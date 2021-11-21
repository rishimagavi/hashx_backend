#Postman also used for testing.

import requests, sys, json

def readBundle(root,reqvar):
    url = "http://localhost:8080/"+root
    print(url)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'BundleUUID':reqvar[0]
    }
    print(reqjson)
    r=requests.post(url, data =json.dumps(reqjson),headers=headers)
    print(r.status_code)
    print(r.json())

def readAllBundle(root,reqvar):
    url = "http://localhost:8080/"+root
    print(url)
    headers = {'Content-type':'application/json'}
    reqjson = {
        'BundleUUID':reqvar[0]
    }
    print(reqjson)
    r=requests.post(url,data=json.dumps(reqjson),headers=headers)
    print(r.status_code)
    print(r.json())

if __name__ == '__test__':
    root=sys.argv[1]
    reqvar=[]
    for x in range(2,len(sys.argv)):
        reqvar.append(sys.argv[x])
    eval(root+'(root,reqvar)')
