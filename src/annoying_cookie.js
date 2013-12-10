function AnnoyingCookie(opts) {
  opts = opts || {}
  this.el = opts.el || document.createElement("div")
  this._listen()
}
AnnoyingCookie.prototype = {
  ondoesnotcare: function() {},
  render: function() {
    this.el.innerHTML = [
      "<p>Some old people running the EU got confused and thought ",
      "using sites with cookies was the reason they're fat, so we ",
      "have to warn you that we're using cookies.</p>",
      "<button class=does_not_care>I don't care</button>"
    ].join("")
  },
  _listen: function() {
    $(this.el).on("click",".does_not_care",function() {
      this.ondoesnotcare()
    })
  }
}
