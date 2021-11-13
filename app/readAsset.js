var pgsql = require('../lib/pgsql')


var checkResults = async (result) => {
    if(result.rowCount == 1)
        data = result.rows[0]
    else if(result.rowCount > 1)
        data = result.rows
    else
        data = {'err':'No data found'}
    return data
}

exports.readAsset = async (req) => { 

        var AssetUUID = req.body.AssetUUID;
        console.log("Started!!! AssetUUID - " + AssetUUID)

        qname='select * from "Asset" where "AssetUUID" = $1' 
        qarg=AssetUUID
        try{
            let result =await pgsql.conquery(qname,[qarg])
            data = await checkResults(result);
            return [null,data,"Successfully fetched data"]
        }

        catch(err)
        {
            return [err,null,"Error Fetching from data base"]
        }

};


exports.readAllAssets = async (req) => {

    var created = req.body.createdAt || "0";
    var modified = req.body.modifiedAt || "0";
    var limit = req.body.limit || "10";
    var offset = req.body.offset || "0";
    var orderby = req.body.orderby || "CreatedAt";
    var orderdir = req.body.orderdir || "DESC";
    var AssetUUID = req.body.AssetUUID;

	
    const readusersquery = {
        //name: 'fetch-users',
        text: 'SELECT * FROM "Asset" WHERE "CreatedAt" > $1 AND "ModifiedAt" > $2 AND "Username" like $3 ORDER BY $4 '+orderdir+' LIMIT $5 OFFSET $6 ',
        values: [created,modified,AssetUUID,orderby,limit,offset]
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
