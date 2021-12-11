#!/usr/bin/env python3
#1212
import os,sys,requests,json,time, pprint,csv
from requests.auth import HTTPBasicAuth

def readContent(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Content':reqvar[0]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def createContent(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'ProviderName':reqvar[0],
        'ProviderURL':reqvar[1],
        'FileType':reqvar[2],
        'FileName':reqvar[3],
        'FileSize':reqvar[4],
        'OwnerUUID':reqvar[5]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def readAllContent(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'isPublic':reqvar[0],
        'limit':reqvar[1],
        'offset':reqvar[2],
        'orderby':reqvar[3],
        'orderdir':reqvar[4]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def deleteContent(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'ContentUUID':reqvar[0]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def updateContent(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'ContentUUID':reqvar[0],
        'isPublic':reqvar[1]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def createContentPermission(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'ContentUUID':reqvar[0],
        'GranteeUUID':reqvar[1],
        'OwnerUUID':reqvar[2],
        'GrantedTill':reqvar[3]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def updateContentPermission(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'ContentUUID':reqvar[0],
        'GranteeUUID':reqvar[1],
        'GrantedTill':reqvar[2],
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    
def deleteContentPermission(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'ContentUUID':reqvar[0],
        'GranteeUUID':reqvar[1]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())

if __name__ == '__main__':
    root=sys.argv[1]
    reqvar=[]
    for x in range(2,len(sys.argv)):
        reqvar.append(sys.argv[x])
    eval(root+"(root,reqvar)")
