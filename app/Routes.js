
var utils = require('../common/utils');
var ContentService = require('./ContentService');
module.exports = (app, console) => {
    
    app.post('/readContent',async (req, res) => {
        console.log('hello')
        result  = await ContentService.readContent(req);
        utils.handleresultdict(res,result)
       }
    )

    app.post('/createContent',async (req, res) => {
        result  = await ContentService.createContent(req);
        utils.handleresultdict(res,result)
       }
    )

    app.post('/readContentPermission',async (req, res) => {
        result  = await ContentService.readContentPermission(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/readContentPermission',async (req, res) => {
        result  = await ContentService.readContentPermission(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/readAllContent',async (req, res) => {
        result  = await ContentService.readAllContent(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/updateContent',async (req, res) => {
        result  = await ContentService.updateContent(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/deleteContent',async (req, res) => {
        result  = await ContentService.deleteContent(req);
        utils.handleresultdict(res,result)
       }
    )
};
