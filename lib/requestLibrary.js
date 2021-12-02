const axios = require('axios')
const PROD = 1
module.exports = {
  readContent:async (data) => {
    try {
        res = await axios({method: 'post',
        url: PROD ? 'https://hashx-api-content-read.herokuapp.com/readContent':'http://localhost:8080/readContent',
        data: data})
        return {'err':null,'data':res.data.data,'msg':'readContent Request Successful & ' + res.data.msg}
      }
      catch (err) {
        return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs ' + err}
      }
  },
  createContentPermission:async (data) => {
    try {
        res = await axios({method: 'post',
        url: PROD ? 'https://hashx-api-contentperm-cud.herokuapp.com/createContentPermission':'http://localhost:8080/createContentPermission',
        data: data})
        return {'err':null,'data':res.data.data,'msg':'createContentPermission Request Successful & ' + res.data.msg}
      }
      catch (err) {
        return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs ' + err}
      }
  },
  readContentPermission:async (data) => {
    try {
        res = await axios({method: 'post',
        url: PROD ? 'https://hashx-api-contentperm-read.herokuapp.com/readContentPermission':'http://localhost:8080/readContentPermission',
        data: data})
        return {'err':null,'data':res.data.data,'msg':'readContentPermission Request Successful & ' + res.data.msg}
      }
      catch (err) {
        return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs ' + err}
      }
  },
  deleteContentPermission: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-contentperm-cud.herokuapp.com/deleteContentPermission':'http://localhost:8080/deleteContentPermission',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'deleteContentPermission Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },  
  readAllContent:async (data) => {
    try {
        res = await axios({method: 'post',
        url: PROD ? 'https://hashx-api-content-read.herokuapp.com/readAllContent':'http://localhost:8080/readAllContent',
        data: data})
        return {'err':null,'data':res.data.data,'msg':'readAllContent Request Successful & ' + res.data.msg}
      }
      catch (err) {
        return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs ' + err}
      }
  },
  createContent: async (data) => {
    try {
          console.log(data);
          res = await axios({method: 'post',
          url: PROD ? 'https://hashx-api-content-cud.herokuapp.com/createContent ': 'http://localhost:8080/createContent',
          data: data})
          return {'err':null,'data':res.data.data,'msg':'createContent Request Successful & ' + res.data.msg}
        }
    catch (err) {
          console.log(err);
                 return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  deleteContent: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-content-cud.herokuapp.com/deleteContent':'http://localhost:8080/deleteContent',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'deleteContent Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  updateContent: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-content-cud.herokuapp.com/updateContent':'http://localhost:8080/updateContent',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'updateContent Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  matchPassword: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-password-read.herokuapp.com/matchPassword':'http://localhost:8080/matchPassword',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'matchPassword Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
}