function AddImg(editorUi, container) {
  this.editorUi = editorUi
  this.container = container
  this.init()
}
AddImg.prototype.init = function() {
  this.addImgContainer()
}

AddImg.prototype.addImgContainer = function() {
  var imgContainer = document.createElement('div')
  imgContainer.className = 'add-img'
  var btn = document.createElement('button')
  btn.innerText = '导入图像'

  btn.style.backgroundColor = '#40b29e'
  btn.style.borderRadius = '4px'
  btn.style.color = '#fff'
  btn.style.padding = '5px 20px'
  imgContainer.appendChild(btn)

  var textContainer = document.createElement('div')
  textContainer.innerText = 'SVG，PNG，JPEG，BMP，GIF和ICO文件最多为2MB'
  imgContainer.appendChild(textContainer)
  this.container.appendChild(imgContainer)
}
