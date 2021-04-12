const http = require('http')

const server = http.createServer(function(req, res){
    res.writeHead(200, {"Context-type": "text/html"})
    res.end('<p>  Melhor usar o Express, não? </p>')
})

const porta = 3456;

server.listen(porta, function(){
    console.log(`Escutando a porta ${porta}`)
})