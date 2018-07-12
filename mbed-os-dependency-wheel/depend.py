#! /usr/bin/env python

import collections
import os
import re
import subprocess
import sys
import logging
from os import path

addr_re = r"(?P<address>[0-9a-f]{1,16})?"
code_re = r"(?P<code>[a-z])"
symbol_re = r"(?P<symbol>[a-z0-9_.$]+)"
nm_line_re = re.compile(r"\s+".join([addr_re, code_re, symbol_re]) + "\s*$",
                        re.I)
objectsidx = {}
objectsset = []
requires = collections.defaultdict(set)
provides = collections.defaultdict(set)

def get_object_symbols(filename):
    lines = subprocess.check_output(["nm", "-g", filename]).splitlines()
    
    if(filename.endswith(".l")):
        lines = [line for line in lines if '.o' not in line]
        
    for l in lines:
        if(len(l) > 0):
            m = nm_line_re.match(l)
            symbol = m.group('symbol')
            if m.group('code') == 'U':
                requires[filename].add(symbol)
            else:
                provides[symbol].add(filename)
               
if __name__ == '__main__':
    import argparse
    
    parser = argparse.ArgumentParser(description='Analyze dependencies')

    # specify arguments
    parser.add_argument(type=str, dest='mapfile', help='path to map file')
    parser.add_argument('-v','--verbose', action="store_true", help='enable verbose logging')          
    
    # get and validate arguments
    args = parser.parse_args()
    
    if(args.verbose):
        logging.basicConfig(filename='mbedos-dependencies.log', filemode='w', level=logging.DEBUG)
            
    mapfile = args.mapfile
    
    if(mapfile == None):
        print("Invalid arguments, exiting")
        parser.print_usage()
        sys.exit(1)
        
    if not path.exists(mapfile):
        print("Map file %s does not exist"%(str(p)))
        parser.print_usage()
        sys.exit(1)
        
    print("Inputs:")        
    print("\tMapfile: %s"%(mapfile))
        
    projdir = mapfile[0:mapfile.lower().find("build")]
    objlines = [os.path.join(projdir,line.strip().split()[-1]).split('(')[0].strip() for line in open(mapfile) if line.strip().startswith('0x') and 'PAD' not in line]
    objlines=list(set(objlines))
    
    idx = 0
    for eachline in objlines:
        objfile = eachline.split('(')[0].strip()
        if(os.path.exists(objfile)):
            idx += 1
            if(objfile not in objectsset):
                get_object_symbols(objfile)
            objectsidx[os.path.basename(objfile.strip())]=idx
            objectsset.append(os.path.basename(objfile.strip()))
        else:
            print("%s does not exist"%objfile)
    
    DependencyMatrix = [ [ 0 for y in range( len(objectsidx) ) ] for x in range( len(objectsidx) ) ]
    
    for filename, symbols in requires.items():
        logging.debug("%s requires %s"%(filename,symbols))
        for s in symbols:
            if s in provides:
                provider=list(provides[s])[0]
                logging.debug("\t\t%s is provided by %s"%(s,provider))
                require_head, require_tail = os.path.split(filename)
                provider_head, provider_tail = os.path.split(provider)
                DependencyMatrix[int(objectsidx[provider_tail])-1][int(objectsidx[require_tail])-1]=1
                
    f = open(os.path.join(os.path.dirname(__file__),"html\\data-deps.js"), 'w')
    f.write("var data = {\n")
    f.write("\tpackageNames: %s,\n"%str(objectsset))
    f.write("\tmatrix: %s\n"%(str(DependencyMatrix)))
    f.write("};\n")
    f.close()
    
