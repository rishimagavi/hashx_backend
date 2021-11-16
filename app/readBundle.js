var pgsql = require('../lib/pgsql')


var checkResults = (result) => {
    if(result.rowCount == 1)
        data = result.rows[0]
    else if(result.rowCount > 1)
        data = result.rows
    else
        data = {'err':'No data found'}
    return data
}

exports.readBundle = async (req) => { 

        var BundleUUID = req.body.BundleUUID;
        console.log("Started!!! BundleUUID - " + BundleUUID)

        qname='select * from "Bundle" where "BundleUUID" = $1' 
        qarg=BundleUUID
        try{
            let result =await pgsql.conquery(qname,[qarg])
            data = checkResults(result);
            return [null,data,"Successfully fetched data"]
        }

        catch(err)
        {
            return [err,null,"Error Fetching from data base"]
        }

};


exports.readAllBundles = async (req) => {

    var created = req.body.createdAt || "0";
    var modified = req.body.modifiedAt || "0";
    var limit = req.body.limit || "10";
    var offset = req.body.offset || "0";
    var orderby = req.body.orderby || "CreatedAt";
    var orderdir = req.body.orderdir || "DESC";
    var IdentityUUID = req.body.IdentityUUID;

	
    const readusersquery = {
        //name: 'fetch-users',
        text: 'SELECT * FROM "Bundle" WHERE "CreatedAt" > $1 AND "ModifiedAt" > $2 AND "IdentityUUID" = $3 ORDER BY $4 '+orderdir+' LIMIT $5 OFFSET $6 ',
        values: [created,modified,IdentityUUID,orderby,limit,offset]
    }
	try{
            result =await pgsql.namedquery(readusersquery)
            console.log(result.rows)
            data = checkResults(result);
            return [null,data,"Successfully fetched data"]
        }
        catch(err)
        {
            return [err,null,"Error Fetching from data base"]
        }


};
