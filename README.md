
# Hashx Service for Content

Service to implement Wallet Operations.
Run using - npm install npm start (OR) node index.js

# Routes

## /readContent	

Gets the Content.

Request Body -
-req.body.ContentUUID: ContentUUID of the Content

Response Body -
{ContentUUID,ProviderName, ProviderURL, FileType,FileSize, FileName, OwnerUUID, UploadedOn}
## /createContent	

creates a Content
   
Response Body -
{ContentUUID}

## /readContentPermission	

checks if a user has necessary permissions to read Content.

Request Body -
-req.body.UserUUID : User
-req.body.ContentUUID : Content
   
Response Body -
{ContentUUID,UserUUID}

## /readAllContent
Gets all the Content

Request Body -
-req.body.ContentUUID : Content

Response Body -
{ ContentUUID, ProviderName, ProviderURL, FileType,  FileSize, FileName, OwnerUUID, UploadedOn }

## /deleteContent
Deletes the given content based on ContentUUID

Request Body - 
req.body.UserUUID : User
req.body.SaltedHash : SaltedHash

Response Body - 
{ContentUUID}
## /updateContent
Updates the given content based on ContentUUID

Request Body - 
req.body.UserUUID : User
req.body.SaltedHash : SaltedHash

Response Body - 
{ContentUUID}
# Response Format

[err,data,msg]

-   err : Error message from SQL try block
-   data : Data returned by SQL query
-   msg : Custom message defined in API


