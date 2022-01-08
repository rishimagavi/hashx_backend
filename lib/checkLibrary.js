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

  exports.readContentPermission = async (body) => {
    try{
        var data  = {'ContentUUID':body.ContentUUID,'OwnerUUID':body.OwnerUUID, 'GranteeUUID':body.GranteeUUID};
        result = await requestLibrary.readContentPermission(data)
        if(isPublic==0){
          if(result.data.UserUUID == result.data.OwnerUUID)
            return {'err':null,'data':result.data.readContentPermission?1:0,'msg' : 'readContentPermission granted & '+result.msg}
          else 
            return{'err':'Content Access not allowed', 'data':null, 'msg':result.msg}
        }
        else
          return {'err':null,'data':result.data.readContentPermission,'msg':'readContentPermission granted' +result.msg}        
    }
    catch(err){
        return{'err':err,'data':null,msg:'Error fetching content permission'}
    }
  }