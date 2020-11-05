require('http').Server((req, res) => {
  const author = 'itmo282167'

  res.setHeader('X-Author', author)
  res.setHeader('Content-Type', 'application/json; charset=UTF-8')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'x-test,Content-Type,Accept,Access-Control-Allow-Headers')

  if (req.url === '/result4/') {
    return res.end({
      message: author,
      'x-result': req.headers['x-text'],
      'x-body': req.body,
    })
  }

  res.end(author)
}).listen(process.env.PORT)
