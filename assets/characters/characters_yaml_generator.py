from genericpath import isdir
from os import listdir
from os.path import isfile, join
import re
rootdir = "./"
onlydirs = [f for f in listdir(rootdir) if isdir(join(rootdir, f))]
# print(onlydirs)
# mypath = "./jolly/" #change the path when running the code
for mypath in onlydirs:
    list = []
    char_name = re.sub("[./]","",mypath)
    #print(char_name)
    onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
    for filename in onlyfiles:
        if filename!='List_FileNames_In_CurrentFolder.py':
            list.append(filename)
        else:
            pass
    print(f'''  {char_name}:
    displayName: {char_name.capitalize()} #change name if needed
    nameBox: nameBoxRight #remove this line of code if namebox is needed on left
    color: "#243C2C"
    looks:''')
    for pose in list:
        lefthandtext = pose.split('_',1)[1].replace(".png","")
        #char_name = pose.split('_',1)[0]
        lookWithPath = f'''      {lefthandtext}: assets/characters/{char_name}/{pose}'''
        print(lookWithPath)
