#Postman also used for testing.

import requests, sys, json

from requests.api import head

def createBundle(root,reqvar):
    url = "http://localhost:8080/"+root
    print(url)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'BundleUUID':reqvar[0],
        'CoverContentUUID':reqvar[1],
        'Description':reqvar[2],
        'NetReserve':reqvar[3],
        'Assets':reqvar[4],
        'BundleName':reqvar[5]
    }
    print(reqjson)
    r=requests.post(url, data=json.dumps(reqjson),headers=headers)
    print(r.status_code)
    print(r.json())


def updateBundle(root,reqvar):
    url = "http://localhost:8080/"+root
    print(url)
    headers = {'Content-type':'application/json'}
    reqjson = {
        'BundleUUID':reqvar[0],
        'IdentityUUID':reqvar[1],
        'CoverContentUUID':reqvar[2],
        'Description':reqvar[3],
        'NetReserve':reqvar[4],
        'Assets':reqvar[5],
        'BundleName':reqvar[6]
    }r
    print(reqjson)
    r=requests.post(url, data=json.dumps(reqjson),headers=headers)
    print(r.status_code)
    print(.json())

def deleteBundle(root,reqvar):
    url = "http://localhost:8080/"+root
    print(url)
    headers = {'Content-type':'application/json'}
    reqjson = {
        'BundleUUID':reqvar[1]
    }
    print(reqjson)
    r=requests.post(url, data=json.dumps(reqjson),headers=headers)
    print(r.status_code)
    print(r.json())

if __name__ == '__main__':
    root=sys.argv[1]
    reqvar=[]
    for x in range(2,len(sys.argv)):
        reqvar.append(sys.argv[x])
    eval(root+'(root,reqvar)')
