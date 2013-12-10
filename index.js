var app = require("./index.js")

var PORT = process.argv[2]

app.listen(PORT)
console.log("App listening on %d",PORT)
