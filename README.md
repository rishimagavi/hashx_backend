# Hashx Identity Read Microservice
Microservice to implement Identity Read operations.

Run using -

npm install

npm start (OR) node index.js

# Change Guide
Make changes

git add .

git commit -m "Message"

git push hashx 

# Routes

## /readIdentity

Reads a Identity : 
Request Body - 
 - req.body.UserUUID

 
 Response Body -
 res.body.data  = {IdentityUUID,Username,UserUUID,ProfileImageURL,ProfileBio,createdAt,modifiedAt,numfollowing,numfollowers}

Query - 
'select "IdentityUUID","Username" from "Identity" where "UserUUID" = $1' 



## /checkUsername

Reads a Identity by Username : 
Request Body - 
 - req.body.Username

 
 Response Body -
 res.body.data  = 0 : "Available", 1 : "NotAvailable"

Query -
'select "IdentityUUID","Username" from "Identity" where "UserUUID" = $1' 

## /readAllIdentities

Request Body -
    req.body.username : Username, searches for Usernames like '${username}%' , Default '' \
    req.body.createdAt :  CreatedAt , ignore IdentityUUID with ModifiedAt < parameter, Default 0 \
    req.body.modifiedAt :  LastModified , ignore IdentityUUID with ModifiedAt < parameter, Default 0 \
    req.body.limit : Number of rows returned , Default 10 \
    req.body.offset : Offset of rows returned, Default 0 \
    req.body.orderby : Column to OrderBy, Default "ModifiedAt"; \
    req.body.orderdir : Order Direction ASC/DESC, Default "DESC"; \

 Response Body - 
 Select *

Query - \
'SELECT * FROM "Identity" WHERE "CreatedAt" > $1 AND "ModifiedAt" > $2 AND "Username" like $3 ORDER BY $4 '+orderdir+' LIMIT $5 OFFSET $6 ',


# Response Format

[err,data,msg]

 - err : Error message from SQL try block
 - data : Data returned by SQL query
 - msg : Custom message defined in API
