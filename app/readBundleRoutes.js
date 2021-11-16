var pgsql = require('../lib/pgsql')
var utils = require('../common/utils')
var readBundle = require('./readBundle');
module.exports = (app, console) => {
    

    app.post('/readBundle',async (req, res) => {
         result  = await readBundle.readBundle(req);
         utils.handleresult(res,result)
        }
    )
        
    app.post('/readAllBundles',async (req, res) => {
        result =await readBundle.readAllBundles(req);
        utils.handleresult(res,result)
        }
    )

    console.log("Installing TOKEN Routes")
};
