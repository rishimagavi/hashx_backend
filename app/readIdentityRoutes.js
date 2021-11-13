var pgsql = require('../lib/pgsql')
var utils = require('../common/utils')
var readAsset = require('./readAsset');
module.exports = (app, console) => {
    

    app.post('/readAsset',async (req, res) => {
         result  = await readAsset.readAsset(req);
         utils.handleresult(res,result)
        }
    )
        
    app.post('/readAllIdentities',async (req, res) => {
        result =await readAsset.readAllIdentities(req);
        utils.handleresult(res,result)
        }
    )

    console.log("Installing TOKEN Routes")
};
