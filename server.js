var http = require('http'),
    winston = require('winston');

var logger = new winston.Logger({
    transports: [ 
        new winston.transports.File({ filename: 'server.log'})
    ]
});

http.createServer(function(req,res){
    logger.info(JSON.stringify(req.headers));
    req.on('data',function(data){
        logger.info(data.toString());
    });
    res.writeHead(200);
    res.end();
}).listen(process.env.PORT || 3000);
