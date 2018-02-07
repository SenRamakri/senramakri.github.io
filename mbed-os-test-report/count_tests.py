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

     
CMD_EXEC = "mbed test --compile-list"

def main(output):
    global num_test_cases
    root = OrderedDict({"name": "test", "children": []})
    op = check_output(CMD_EXEC).split("\n")
    
    for line in op:
        line_toks=line.strip().split(":")
        if(line_toks[0].startswith("Path")):
            #print(line_toks[1].strip())
            test_dir = line_toks[1].strip()
            for filename in os.listdir(test_dir):
                if filename.endswith(".cpp") or filename.endswith(".c"): 
                    test_file_path = test_dir + "\\" +filename
                    num_test_cases=0
                    with open(test_file_path) as f:
                        for line in f:
                            line=line.strip()
                            if line.startswith("Case(") or line.startswith("{\"Testing "):
                                print("Test Case: File: %s : %s" % (str(test_file_path), str(line)))
                                num_test_cases=num_test_cases+1
                    if(num_test_cases > 0):        
                        add_node(root, test_dir, num_test_cases)            
    
    output_to_file(output, root, "mbed_test_map")
    
if __name__ == '__main__':
    main(open("testdata.js", "wb"))

    