const jsonServer = require('json-server');
const server = jsonServer.create();
const {path} = require('fs')
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
    static: './build',
});

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);
server.get('/cart', (req,res) =>{
    res.send(path.join(__dirname+'/build/index.html'));
});
server.listen(PORT, () => {
    console.log('Server is running');
});