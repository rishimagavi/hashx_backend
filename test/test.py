import requests
import sys

URL = "https://hashx-api-Bundle-cud.herokuapp.com/createBundle"#"http://localhost:8080/readBundle"  

BundleUUID = "0ea9ec09c2eefe9d35b17c72b309914c16bc442990e1b44db9cfe3199a33232c"#Unique identity of Bundle
CoverContentUUID = "9c22c2130570e8f73dffb76838b6b237ba0ae0dff971d8dc481f92795df1ec40" 			#Unique identity of content for cover			#URL to fetch Bundles
Description = "Whats up peeps"				#Description of Bundle
NetReserve= 1				#Reserve price for all Bundles
Assets = ["asb","asa"]
BundleName= "MyfirstBundle"				# Short display name for Bundle


data ={"BundleUUID":BundleUUID,"CoverContentUUID":CoverContentUUID,"Description":Description,"NetReserve":NetReserve,"BundleName":BundleName,"Assets":Assets}
if len(sys.argv)==4:
	data = {"Username":sys.argv[1],"Email":sys.argv[2] ,"SaltedHash":sys.argv[3]}

r = requests.post(url = URL, data=data)

print(r.text)
