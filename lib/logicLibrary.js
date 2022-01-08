const requestLibrary = require('./requestLibrary')

exports.createContent = async (body) => {
try{
    res = await requestLibrary.createContent(body)
    if(res.err)return {'err':res.err,'data':null,'msg':res.msg}
    if(res.data.UserUUID)return{'err':null,'data':res.data,'msg':'Successfully createdContent & '+res.msg}
    return{'err':null,'data':res.data,'msg':res.msg}  
}
catch(err){
  return{'err':err,'data':null,'msg':'Code Failed at calling createContent'}
  }
}

exports.updateContent = async (body) => {
  try{
      res = await requestLibrary.updateContent({'ContentUUID':body.ContentUUID,'SaltedHash':body.SaltedHash})
      if(res.err)return{'err':res.err,'data':null,'msg':res.msg}
      if(res.data.UserUUID)
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
  
      res = await requestLibrary.readContent({'ContentUUID':body.ContentUUID})
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

exports.createContentPermission = async (body) => {
  try{
      res = await requestLibrary.createContentPermission({'ContentUUID':body.ContentUUID, 'GranteeUUID':body.GranteeUUID, 'OwnerUUID':body.OwnerUUID})
      if(res.err)return {'err':res.err,'data':null,'msg':res.msg}
      if(res.data.ContentUUID)return{'err':null,'data':res.data,'msg':'Successfully createdContentPermission & '+res.msg}
      return{'err':null,'data':res.data,'msg':res.msg}  
  }
  catch(err){
    return{'err':err,'data':null,'msg':'Code Failed at calling createContentPermission'}
    }
  }


exports.deleteContentPermission = async(body) => {
  try{
    res = await requestLibrary.deleteContentPermission({'ContentUUID':body.ContentUUID, 'GranteeUUID':body.GranteeUUID})
    if(res.err) return{'err':res.err,'data':null,'msg':res.msg}
    if(res.data.ContentUUID)return{'err':null,'data':res.data,'msg':'Successfully deletedContentPermission & '+res.msg}
    return{'err':null,'data':res.data,'msg':res.msg}
  }
  catch(err){
    return{'err':err,'data':null,'msg':'Code failed at calling deleteContentPermission'}
  }
}  