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
  textContainer.id = 'styleContainer'
  // 基本信息配置
  let baseConfig = [
    {
      label: '蒸发器额定水量',
      id: 'id1',
      // 设置图标要携带的数据
      customInfo: 'customInfo-1'
    },
    {
      label: '额定制冷量',
      id: 'id2',
      customInfo: 'customInfo-2'
    },
    {
      label: '位置高度',
      id: 'id3',
      customInfo: 'customInfo-3'
    },
    {
      label: '额定COP',
      id: 'id4',
      customInfo: 'customInfo-4'
    },
    {
      label: '冷凝器额定压降',
      id: 'id5',
      customInfo: 'customInfo-5'
    }
  ]
  // 生成骨架html
  let labelListHtml = ``
  baseConfig.forEach((item, index) => {
    labelListHtml += `<div class="label-list">
    <span>${item.label}</span>
    <p id=${'domTypeContainer' + index}>
    <input type="text" id=${item.id} name="name" placeholder="输入"/>
    </p>
    <img class=${'setting-icon' + index} data-custom-data=${
      item.customInfo
    } src="images/svg/info.svg"/>
    </div>`
  })
  $(textContainer).html(labelListHtml)
  // 生成三种表单类型
  let domTypeList = [
    {
      type: 'input',
      title: '输入框',
      htmlStr: `
          <input type="text" id="name" name="name" placeholder="输入"/>
          `,
      active: true
    },
    {
      type: 'select',
      title: '下拉框',
      htmlStr: `<select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
          </select>
          `
    },
    {
      type: 'button',
      title: '按钮',
      htmlStr: `
          <button name="button">btn</button>
          `
    }
  ]
  function genMemuList() {
    let $ul = $(`<ul id="menuList" class="menu-list" style="display:none;">`)
    let str = ''
    domTypeList.forEach(item => {
      str += `<li data-type="${item.type}">${item.title}</li>`
    })
    $ul.html(str)
    $('.label-list').append($ul)
  }
  // 循环切换dom类型
  function genDomType(i) {
    let htmlStr = domTypeList.filter(item => {
      return item.active === true
    })[0].htmlStr
    $('#domTypeContainer' + i).html(htmlStr)
  }
  // 循环传递自定义数据
  function updateDomData(customData, i) {
    $($('#domTypeContainer' + i).children()[0]).attr(
      'data-custom-data',
      customData
    )
  }
  $(() => {
    // 初始化
    genDomType()
    genMemuList()
    // 循环中绑定各种事件
    for (let i = 0; i <= $('.label-list').length; i++) {
      $('.setting-icon' + i).on('click', { key: i }, function(event) {
        $($('.menu-list')[i]).toggle()
      })

      $($('.menu-list')[i]).click(e => {
        let liIndex = $(e.target).index()
        domTypeList.forEach((item, index) => {
          item.active = false
        })
        domTypeList[liIndex].active = true
        genDomType(i)
        updateDomData($('.setting-icon' + i).data('custom-data'), i)
        $($('.menu-list')[i]).hide()
      })
    }
  })
  this.container.appendChild(textContainer)
}
