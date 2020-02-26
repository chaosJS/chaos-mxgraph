function FormatStyle(editorUi, container) {
  this.editorUi = editorUi
  this.container = container
  this.init()
}
FormatStyle.prototype.init = function() {
  this.formatStyleContainer()
}

FormatStyle.prototype.formatStyleContainer = function() {
  var textContainer = document.createElement('div')
  textContainer.innerText = '样式'
  this.container.appendChild(textContainer)
}
