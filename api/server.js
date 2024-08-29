const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Ensure this path is correct
const middlewares = jsonServer.defaults();

// Optionally set up a base path
server.use('/api', router);

server.use(middlewares);

server.listen(8000, () => {
  console.log('JSON Server is running on http://localhost:8000');
});
