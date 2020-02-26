function FormatComment(editorUi, container) {
  this.editorUi = editorUi
  this.container = container
  this.init()
}
FormatComment.prototype.init = function() {
  this.formatCommentContainer()
}

FormatComment.prototype.formatCommentContainer = function() {
  var textContainer = document.createElement('div')
  textContainer.innerText = '评论'
  this.container.appendChild(textContainer)
}
