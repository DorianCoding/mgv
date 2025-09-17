#!/usr/bin/env python
# Generate json from created directory
# importing os module
import os.path
# Get the list of all files and directories
path = os.path.dirname(os.path.realpath(__file__))
dir_list = [f+"/" for f in os.listdir(path) if os.path.isdir(os.path.join(path,f))]
with open(path + "/index.json","w") as file:
	file.write(str(dir_list).replace("'",'"'))
