var pgsql = require('../lib/pgsql')
var utils = require('../common/utils')
var Bundle = require('./Bundle');
module.exports = (app, console) => {
//    var utils = require('../common/utils');

    app.post('/createBundle',async (req, res) => {
        try{
         result  = await Bundle.createBundle(req);
         utils.handleresult(res,result)
        } catch(err){
            console.log(err)
        }
    })
    app.post('/updateBundle',async (req, res) => {
        try{
        result  = await Bundle.updateBundle(req);
        utils.handleresult(res,result)
       } catch(err){
           console.log(err);
       }
    })
    app.post('/deleteBundle',async (req, res) => {
        try{
        result  = await Bundle.deleteBundle(req);
        utils.handleresult(res,result)
        } catch(err){
            console.log(err);
        }
    })

    console.log("Installing TOKEN Routes")
};
