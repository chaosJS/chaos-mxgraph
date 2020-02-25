function AddDoc(editorUi, container) {
  this.editorUi = editorUi
  this.container = container
  this.init()
}
AddDoc.prototype.init = function() {
  this.addDocContainer()
}

AddDoc.prototype.addDocContainer = function() {
  var imgContainer = document.createElement('div')
  imgContainer.className = 'add-img'
  var btn = document.createElement('button')
  btn.innerText = 'Create Document'

  btn.style.backgroundColor = '#40b29e'
  btn.style.borderRadius = '4px'
  btn.style.color = '#fff'
  btn.style.padding = '5px 20px'
  imgContainer.appendChild(btn)
  this.container.appendChild(imgContainer)
}
