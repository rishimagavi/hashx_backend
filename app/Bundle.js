var pgsql = require('../lib/pgsql')
var hash = require('../lib/hash')
exports.createBundle = async (req) => {

        var BundleUUID = hash.hashing(BundleName,CreatedAt);
        var IdentityUUID = req.body.IdentityUUID;
        var BatchID = req.body.BatchID
        var BundleName = req.body.BundleName || "";
        var CoverContentUUID = req.body.CoverContentUUID;
        var CreatedAt = Date.now();
        var ModifiedAt = Date.now();
        var Description = req.body.Description|| "";
        var NetReserve = req.body.NetReserve|| 0;
        var Assets = req.body.Assets ||[];

        if(checkEmpty(Assets))
            return [null,null,"Assets cannot be empty"]


        var qarg=[BundleUUID,IdentityUUID,BatchID,BundleName,CoverContentUUID,CreatedAt,Description,ModifiedAt,NetReserve];
        
        qname='Insert into "Bundle" ("BundleUUID","IdentityUUID","BatchID","BundleName","CoverContentUUID","CreatedAt","Description","ModifiedAt","NetReserve","Assets") values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)' 
        try{
            result =await pgsql.conquery(qname,qarg)
            console.log(result.rowCount)
            if (result.rowCount == 1)
                data = {"BundleUUID":BundleUUID}
                return [null,data,"Successfully created Bundle"]
        }
        catch(err)
        {
            return [err,null,"Error Creating Bundle : "+err.detail]
        }

};

exports.updateBundle = async (req) => {
    var BundleUUID = hash.hashing(BundleName,CreatedAt);
    var IdentityUUID = req.body.IdentityUUID;
    var BatchID = req.body.BatchID
    var BundleName = req.body.BundleName || "";
    var CoverContentUUID = req.body.CoverContentUUID;
    var ModifiedAt = Date.now();
    var Description = req.body.Description|| "";
    var NetReserve = req.body.NetReserve|| 0;
    var Assets = req.body.Assets ||[];

    var qarg=[BundleUUID,IdentityUUID,BatchID,BundleName,CoverContentUUID,Description,ModifiedAt,NetReserve,Assets];
        qname='update "Bundle" set "BundleName"=$2,"IdentityUUID"=$3, "CoverContentUUID"=$4, "ModifiedAt"=$5, "Description"=$6, "NetReserve"=$7, "Assets"=$8, "BatchID"=$9   where "BundleUUID"=$1' 
    try{
        result =await pgsql.conquery(qname,qarg)
        console.log(result.rowCount)
        if (result.rowCount == 1)
        {
            data ={"BundleUUID":BundleUUID}
            return [null,data,"Successfully updated Bundle"]
        }
        else if(result.rowCount == 0){
            err ={"err":"BundleUUID does not exist"}
            return [err,null,"BundleUUID does not exist"]
        }
    }
    catch(err)
    {
        return [err,null,"Error updating Bundle to the database :"+err.detail]
    }

};

exports.deleteBundle = async (req) => {
    var BundleUUID = req.body.BundleUUID;
    var qarg=[BundleUUID]
    qname='delete from "Bundle" where "BundleUUID"= $1' 
    try{
        result =await pgsql.conquery(qname,qarg)
        if (result.rowCount == 1)
        {
            data = {"BundleUUID":BundleUUID}
            return [null,data,"Successfully deleted Bundle"]
        }   
        else if(result.rowCount == 0)
        {
            err={'err':'Row does not exist'}
            return [err,null,"Bundle for the BundleUUID does not exist"]
        }
    }
    catch(err)
    {
        console.log(err)
        return [err,null,"Error deleting from the database"]
    }

};

