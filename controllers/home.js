exports.list = (req,res)=>{
    let data = { data : 'Hello hapi list'}
      //return '<h1>Hello World!</h1>';

      return res.response(data).type('application/json').header('content-type', 'application/json').code(200);
}

exports.checkParam = (req,res)=>{
    console.log(req.payload);
    const {token, orgId} = req.payload ??{};
const data = {token : token, orgId : orgId};
      //return '<h1>Hello World!</h1>';

      return res.response(data).type('application/json').header('content-type', 'application/json').code(201);
}