# Hashx Password CUD Microservice
Microservice to implement Password Create Update and Delete operations.

Run using -

npm install

npm start (OR) node index.js

# Change Guide
Make changes

git add .

git commit -m "Message"

git push hashx 

# Routes

## /createPassword

Creates a new Password 	 : 
Request Body - 
 - req.body.UserUUID : UUID of creating account from UserInfo
 - req.body.SaltedHash  : Secure salted hash of password
 
 *Optional Arguments 
 
Query : 
-'Insert into "Password" ("UserUUID","SaltedHash","ModifiedAt","LastUsed") values($1,$2,$3,$4)' 

## /updatePassword

Updates  Password with new details : 

Request Body - 
- req.body.UserUUID : UUID of creating account from UserInfo
- req.body.SaltedHash  : Secure salted hash of password
 
 
Query : 
- qname='update "Password" set "SaltedHash"=$2,"ModifiedAt"=$3  where "UserUUID"=$1' 

## /deletePassword

Deletes Password row : 
Request Body - 
 - req.body.UserUUID : UserUUID of profile 
 
Query : 
- 'delete from "Password" where "UserUUID"= $1' 



# Response Format

[err,data,msg]

 - err : Error message from SQL try block
 - data : Data returned by SQL query
 - msg : Custom message defined in API