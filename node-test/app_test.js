var app = require("../app.js")
var request = require("supertest")

describe("math server 1.1",function() {
  describe("addition",function() {
    it("can add",function(done) {
      request(app)
        .get('/add/10/15')
        .expect(/answer/)
        .expect(/:\s*25/)
        .expect(200,done)
    })
    // I wonder if we should test other types of numbers?
    // are there edge cases for numbers at all?
    it("validates numbers",function(done) {
      request(app)
        .get('/add/spoon/15')
        .expect(/error/)
        .expect(400,done)
    })
  })
})
