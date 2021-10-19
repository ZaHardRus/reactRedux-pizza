const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const path = require('path')
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;


server.use(middlewares);
server.use(router);

server.listen(port);

server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./build", "index.html"));
})
server.listen(port,()=>console.log('server is running' + port))