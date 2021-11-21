import requests
import sys, json 

def createAsset(root,reqvar):
	url = "http://localhost:8080/"+root
	print(url)
	headers = {'Content-type':'application/json'}
	reqjson = {
		'AssetName':reqvar[0],
		'IdentityUUID':reqvar[1],
		'CoverContentUUID':reqvar[2],
		'AssetUUID':reqvar[3],
		'Description':reqvar[4],
		'ReservePrice':reqvar[5],
		'BatchID':reqvar[6]
	}
	print(reqjson)
	r=requests.post(url, data=json.dumps(reqjson), headers=headers)
	print(r.status_code)
	print(r.json())

def updateAsset(root,reqvar):
    url = "http://localhost:8080/"+root
    print(url)
    headers = {'Content-type':'application/json'}
    reqjson = {
        'AssetUUID':reqvar[0],
        'AssetName':reqvar[1],
        'CoverContentUUID':reqvar[2],
        'Description':reqvar[3],
        'ReservePrice':reqvar[4]
    }
    print(reqjson)
    r=requests.post(url, data=json.dumps(reqjson),headers=headers)
    print(r.status_code)
    print(json())


def deleteAsset(root,reqvar):
    url = "http://localhost:8080/"+root
    print(url)
    headers = {'Content-type':'application/json'}
    reqjson = {
        'AssetUUID':reqvar[1]
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
