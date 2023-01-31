//An Example Node.js Application can be found here: https://nodejs.dev/en/learn/
const http = require('http')

// 127.0.0.1 always refers to your own machine
const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    greeting: 'hey',
    name: 'Patience'
  }))
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
