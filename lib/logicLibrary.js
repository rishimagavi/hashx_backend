const requestLibrary = require('./requestLibrary')

exports.createContent = async (body) => {
try{
    res = await requestLibrary.createContent(body)
    if(res.err)return {'err':res.err,'data':null,'msg':res.msg}
    if(res.data.UserUUID)return{'err':null,'data':res.data,'msg':'Successfully createdContent & '+res.msg}
    return{'err':null,'data':res.data,'msg':res.msg}  
}
catch(err){
  return{'err':err,'data':null,'msg':'Code Failed at calling getAllFollows'}
  }
}

exports.updateContent = async (body) => {
  try{
      res = await requestLibrary.readContent({'UserUUID':body.UserUUID,'SaltedHash':body.SaltedHash})
      if(res.err)return{'err':res.err,'data':null,'msg':res.msg}
      if(res.data.GeolocationUUID)
      {
        return{'err':null,'data':res.data,'msg':'Successfully Updated Content & '+res.msg}
      }
      return await createContent(body);
  }
  catch(err){
    return{'err':err,'data':null,'msg':'Code Failed at calling updateContent'}
  }
 }


exports.deleteContent = async (body) => {
  try{
  
      res = await requestLibrary.readContent({'UserUUID':body.UserUUID})
      if(!res.err && res.data){
        console.log(res.data)
        if(res.data.UserUUID != body.UserUUID || res.data.UserUUID == null)
          return{'err':'Invalid UserUUID','data':null,'msg':'Code Failed at calling readContent'}
        if(res.data.UserUUID == body.UserUUID)
        {
          
          res = await requestLibrary.deleteContent({'UserUUID':body.UserUUID})
          return{'err':null,'data':{'isEmpty':true,'UserUUID':res.data.UserUUID},'msg':'Successfully deleted Content'+res.msg}
        }
        return{'err':null,'data':{'isEmpty':false},'msg':'Content not empty, '+res.msg}
      }
      else
        return{'err':res.err,'data':null,'msg':res.msg}
  }
  catch(err){
    return{'err':err,'data':null,'msg':'Code Failed at calling deleteContent'}
  }
}
