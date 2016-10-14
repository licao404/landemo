var http = require('http');

http
    .createServer(function(req,res){
        res.writeHead(200,{
            'Content-Type': 'text/aplain'
        })
        res.write('Hello Nodejs')
        res.end()
    })
    .listen(2016)