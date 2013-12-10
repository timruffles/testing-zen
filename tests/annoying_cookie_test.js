
describe("annoying cookie widget",function() {
  it("can be commanded to leave by the user",function() {
    var widget = new AnnoyingCookie
    var cares = true
    widget.ondoesnotcare = function() {
      cares = false
    }
    widget.render()
    $(widget.el).find(".does_not_care").click()
    assert.isFalse(cares,"user unable to dismiss stupid cookie warning")
  })
})
