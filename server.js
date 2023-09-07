const Hapi = require('@hapi/hapi');

const port = 2003;

const server = Hapi.server({ port: port, host: 'localhost' });

const controller = require('./controllers/home');


server.route({
    method: 'GET',
    path:'/',
    handler: (req, res) => { 

        let data = { data : 'Hello hapi'}
      //return '<h1>Hello World!</h1>';

      return res.response(data).type('application/json').header('content-type', 'application/json').code(200);
    }
});

server.route({
    method: 'GET',
    path:'/list',
    handler: controller.list
});

server.route({
    method: 'POST',
    path:'/checkParam',
    handler: controller.checkParam
});

server.start();
console.log(`Server running on port ${port}`);


