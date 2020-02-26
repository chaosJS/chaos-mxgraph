function RightSideNav(editorUi, container) {
  this.editorUi = editorUi
  this.container = container
  this.menuConfig = [
    {
      className: 'menuInfo',
      title: '信息',
      active: true,
      linkedContainerClass: 'formatContainer'
    },
    {
      className: 'menuStyle',
      title: '样式',
      active: false,
      linkedContainerClass: 'formatStyleContainer'
    },
    {
      className: 'menuComment',
      title: '评论',
      active: false,
      linkedContainerClass: 'formatCommentContainer'
    }
  ]
  this.init()
}
RightSideNav.prototype.init = function() {
  this.addSideNavMenu()
}

RightSideNav.prototype.addSideNavMenu = function() {
  var menuList = document.createElement('ul')
  menuList.className = 'rightNavMenu'
  menuList.style.cssText = 'background-color:#fff;width: 50px;height:100%;'
  for (i = 0; i < this.menuConfig.length; i++) {
    var li = document.createElement('li')
    li.innerText = this.menuConfig[i].title
    li.className = this.menuConfig[i].className
    this.menuConfig[i].active && li.classList.add('is-active')
    menuList.appendChild(li)
  }
  this.container.appendChild(menuList)

  const menuPanelEl = this.menuConfig.map(item => {
    return this.editorUi[item.linkedContainerClass]
  })
  $(document).ready(() => {
    $('.rightNavMenu').on('click', 'li', function(event) {
      $(this).addClass('is-active')
      $(this)
        .siblings()
        .removeClass('is-active')
      let liIndex = $(this).index()
      menuPanelEl.map((item, index) => {
        if (index === liIndex) {
          item.style.display = 'block'
        } else {
          item.style.display = 'none'
        }
      })
    })
  })
}
