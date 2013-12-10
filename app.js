var express = require("express")
var app = express()

app.get("/add/:a/:b",function(req,res) {
  var a = parseInt(req.params.a)
  var b = parseInt(req.params.b)
  if(isNaN(a) || isNaN(b)) return res.send(400,{error: "NaN"})
  res.send({answer: a + b})
})

module.exports = app
