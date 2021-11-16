# Hashx Bundle CUD Microservice
Microservice to implement Bundle Create Update and Delete operations.

Run using -

npm install

npm start (OR) node index.js

# Change Guide
Make changes

git add .

git commit -m "Message"

git push hashx 

# Routes

## /createBundle

Creates a new Bundle :

Request Body - 
 - req.body.IdentityUUID : UUID of Identity from Identity 
 - req.body.BundleName  : Name of Bundle
 - req.body.CoverContentUUID : UUID of CoverContent from Content
 - req.body.Description : Description of Created Bundle
 - req.body.NetReserve : Price set for the Created Bundle
 
 *Optional Arguments 
 
Query : 
-'Insert into "Bundle" ("BundleUUID","IdentityUUID","BundleName","CoverContentUUID","CreatedAt","Description","ModifiedAt","NetReserve") values($1,$2,$3,$4,$5,$6,$7,$8)'

## /updateBundle

Updates  Bundle with new details : 

Request Body - 
- req.body.BundleName  : Name of Bundle
- req.body.BundleUUID : Unqiue UUID of Bundle
- req.body.CoverContentUUID : UUID of CoverContent from Content
- req.body.Description : Description of Created Bundle
- req.body.NetReserve : Price set for the Created Bundle

 
 
Query : 
- qname='update "Bundle" set "BundleName"=$2, "CoverContentUUID"=$3, "ModifiedAt"=$4, "Description"=$5, "NetReserve"=$6  where "BundleUUID"=$1'  

## /deleteBundle

Deletes Bundle row : 
Request Body - 
 - req.body.BundleUUID : Unique UUID of Bundle
 
Query : 
- 'delete from "Bundle" where "BundleUUID"=$1'



# Response Format

[err,data,msg]

 - err : Error message from SQL try block
 - data : Data returned by SQL query
 - msg : Custom message defined in API
