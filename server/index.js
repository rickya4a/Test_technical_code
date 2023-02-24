const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', function(req, res) {
  res.send('test')
})

app.post('/generate-segitiga', function (req, res) {
  let input = req.body.input

  const data = Array.from(input)

  for (let i = 0; i < data.length; i++) {
    console.log(data[i])
  }
})

app.post('/generate-ganjil', function (req, res) {
  let input = req.body.input

  let result = []

  for (let i = 0; i <= +input; i++) {
    if (i % 2 != 0) {
      result.push(i)
    }
  }

  return res.json({
    data: result
  })
})

app.post('/generate-prime', function (req, res) {
  let input = req.body.input

  let result = []

  for (let i = 0; i <= +input; i++) {
    let num = 0
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        num = 1
        break
      }
    }

    if (i > 1 && num == 0) {
      result.push(i)
    }
  }

  return res.json({
    data: result
  })
})

app.listen(3000)