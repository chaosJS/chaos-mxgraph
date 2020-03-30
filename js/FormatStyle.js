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
  textContainer.id = 'styleContainer'
  // 初始化骨架
  let initHtml = `<p id="domTypeContainer"></p>
  <span id="setDom" data-custom-data="xxxx">设置</span>`
  $(textContainer).html(initHtml)
  // 初始化基本配置
  let domTypeList = [
    {
      type: 'input',
      title: '输入框',
      htmlStr: `
          <input type="text" id="name" name="name" />
          `
    },
    {
      type: 'select',
      title: '下拉框',
      htmlStr: `<select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
          </select>
          `,
      active: true
    },
    {
      type: 'button',
      title: '按钮',
      htmlStr: `
          <button name="button">Click me</button>
          `
    }
  ]
  function genDomType() {
    let htmlStr = domTypeList.filter(item => {
      return item.active === true
    })[0].htmlStr
    $('#domTypeContainer').html(htmlStr)
  }
  function updateDomData(spanData) {
    $($('#domTypeContainer').children()[0]).attr('data-custom-data', spanData)
  }
  function genMemuList() {
    let $ul = $(`<ul id="menuList" class="menu-list" style="display:none;">`)
    let str = ''
    domTypeList.forEach(item => {
      str += `<li data-type="${item.type}">${item.title}</li>`
    })
    $ul.html(str)
    $('#setDom').after($ul)
  }
  $(() => {
    //
    genDomType()
    genMemuList()
    $('#setDom').click(() => {
      $('#menuList').toggle()
    })
    $('#menuList li').click(e => {
      let liIndex = $(e.target).index()
      domTypeList.forEach((item, index) => {
        item.active = false
      })
      domTypeList[liIndex].active = true
      genDomType()
      updateDomData($('#setDom').data('custom-data'))
      $('#menuList').hide()
    })
  })
  this.container.appendChild(textContainer)
}
