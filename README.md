# Hashx Bundle Read Microservice
Microservice to implement Bundle Read operations.

Run using -

npm install

npm start (OR) node index.js

# Change Guide
Make changes

git add .

git commit -m "Message"

git push hashx 

# Routes

## /readBundle

Reads an Bundle : 
Request Body - 
 - req.body.BundleUUID

 
 Response Body -
 res.body.data  = {IdentityUUID,BundleUUID,BundleName,CoverContentUUID,CreatedAt,ModifiedAt,Description,NetReserve}

Query - 
'select * from "Bundle" where "BundleUUID" = $1'


## /readAllBundles

Request Body -
    req.body.IdentityUUID : UUID, searches for IdentityUUID's like '${IdentityUUID}%' \
    req.body.createdAt :  CreatedAt , ignore IdentityUUID with ModifiedAt < parameter, Default 0 \
    req.body.modifiedAt :  LastModified , ignore IdentityUUID with ModifiedAt < parameter, Default 0 \
    req.body.limit : Number of rows returned , Default 10 \
    req.body.offset : Offset of rows returned, Default 0 \
    req.body.orderby : Column to OrderBy, Default "ModifiedAt"; \
    req.body.orderdir : Order Direction ASC/DESC, Default "DESC"; \

 Response Body - 
 Select *

Query - \
'SELECT * FROM "Bundle" WHERE "CreatedAt" > $1 AND "ModifiedAt" > $2 AND "IdentityUUID" = $3 ORDER BY $4 '+orderdir+' LIMIT $5 OFFSET $6 '


# Response Format

[err,data,msg]

 - err : Error message from SQL try block
 - data : Data returned by SQL query
 - msg : Custom message defined in API
