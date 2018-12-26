const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const EMAIL = 'gandalf@thegrey.com'
const PASSWORD = 'mellon'

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === EMAIL && password === PASSWORD) {
    return res.send({
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    })
  }

  return res.status(401).send({
    error: 'Email e senha não conferem',
  })
})

server.listen(3000, () => {
  console.log('JSON Server is running')
})