const requestLibrary = require('./requestLibrary')

exports.matchPassword = async (body) => {
    try{
        var data  = {'IdentityUUID':body.UserUUID,'SaltedHash':body.SaltedHash};
        result = await requestLibrary.matchPassword(data)
        if(result.data)
          return {'err':null,'data':result.data.PasswordMatch?1:0,'msg' : 'Passwordcheck Successful & '+result.msg}
        else
          return {'err':'Error calling the Database level API','data':null,'msg':result.msg}        
    }
    catch(err){
        return{'err':err,'data':null,msg:'Error checking the Password'}
    }
  }