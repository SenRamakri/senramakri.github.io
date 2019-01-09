#!/usr/bin/env python

from __future__ import print_function
from collections import OrderedDict
import os
from os import path
from subprocess import check_output
import re
import bisect
import json
import sys

default_datafile = "testdata.js"
repo_root = path.dirname(path.abspath(__file__))
default_op = path.join(repo_root, "html", default_datafile)

def add_node(root, node_path, node_size):
    node = root
    added = 0
    for p in node_path.split(os.sep):
        children = node["children"]
        if p not in [x['name'] for x in children]:
            add = {"name": p, "children": []}
            children.append(add)
            added = 1
            node = children[-1]
        else:
            p_index = [x['name'] for x in children].index(p)
            node = children[p_index]

    if added:
        node.pop("children")
        node['size'] = node_size

def output_to_file(fd, root, node_name):
    # write dict as json to output file
    s = json.dumps(dict(root), indent=4)
    fd.seek(0)
    fd.write("var %s = "%(str(node_name)))
    fd.write(s)
    fd.truncate()

     
#CMD_EXEC = "mbed test --compile-list"
CMD_EXEC = "myfind . -name \"*.cpp\""
def main(output,paths):
    global num_test_cases
    root = OrderedDict({"name": "test", "children": []})
    
    exec_cmd = ""
    op = None
    for eachpath in paths:
        exec_cmd = "myfind " + eachpath + " -name \"*.cpp\""
        #exec_cmd = "myfind . -name \"*.c*\""
        print(exec_cmd)
        #prev_dir=os.getcwd()
        #os.chdir(eachpath)
        op = check_output(exec_cmd).split("\n")
        for line in op:
            print(line)
            filename = str(line).replace("/","\\")
            print(filename)
            if filename.endswith(".cpp") or filename.endswith(".c"): 
                num_test_cases=0
                print(filename)
                with open(filename) as f:
                    for line in f:
                        line=line.strip()
                        if line.startswith("Case(") or line.startswith("{\"Testing "):
                            print("Test Case: File: %s : %s" % (str(filename), str(line)))
                            num_test_cases=num_test_cases+1
                if(num_test_cases > 0):        
                    add_node(root, filename, num_test_cases)            
        #os.chdir(prev_dir)            
        
    output_to_file(output, root, "mbed_test_map")

#Run as below    
#C:\github>senramakri.github.io\mbed-os-test-report\count_tests.py mbed-os ci-test-shield\TESTS ci-test-shield\SDDriver    
if __name__ == '__main__':
    main(open("testdata.js", "wb"),sys.argv[1:])

    