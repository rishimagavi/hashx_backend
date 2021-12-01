const logic = require('../lib/logicLibrary')
const check = require('../lib/checkLibrary')
const request = require('../lib/requestLibrary')

exports.readContent = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await request.readContent(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}    
}

exports.createContent = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.createContent(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}

}

exports.readContentPermission = async (req) => {
  var body = req.body; 
  result = await request.readContentPermission(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}

}
 
exports.readAllContent = async (req) => {
  var body = req.body; 
  result = await request.readAllContent(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}

}

exports.updateContent = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.updateContent(body)
  resultMP = await check.matchPassword(body)   
  if(!resultMP.data)  
    return{'err':null,'data':null,'msg':'Password match failed'+ result.msg}
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}

}

exports.deleteContent = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.deleteContent(body)
  resultMP = await check.matchPassword(body)
  if(!resultMP.data)  
    return{'err':null,'data':null,'msg':'Password match failed'+ result.msg}
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}

}
