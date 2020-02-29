function SideNav(editorUi, container) {
  this.editorUi = editorUi
  this.container = container
  this.menuConfig = [
    {
      className: 'menuFolder',
      title: '文件夹',
      active: false,
      linkedContainerClass: 'addDocContainer',
      iconSrc: '/images/svg/folder.svg'
    },
    {
      className: 'menuImg',
      title: '图片',
      active: false,
      linkedContainerClass: 'addImgContainer',
      iconSrc: '/images/svg/image.svg'
    },
    {
      className: 'menuShape',
      title: '形状',
      active: true,
      linkedContainerClass: 'sidebarContainer',
      iconSrc: '/images/svg/shapes.svg'
    }
  ]
  this.init()
}
SideNav.prototype.init = function() {
  this.addSideNavMenu()
}

SideNav.prototype.addSideNavMenu = function() {
  var menuList = document.createElement('ul')
  menuList.className = 'navMenu'
  menuList.style.cssText = 'background-color:#444b58;width: 50px;height:100%;'
  for (i = 0; i < this.menuConfig.length; i++) {
    var li = document.createElement('li')
    li.className = this.menuConfig[i].className
    const imgSvg = document.createElement('img')
    imgSvg.src = this.menuConfig[i].iconSrc
    imgSvg.width = 25
    li.appendChild(imgSvg)
    li.classList.add('tooltip')
    li.title = this.menuConfig[i].title
    this.menuConfig[i].active && li.classList.add('is-active')
    menuList.appendChild(li)
  }
  this.container.appendChild(menuList)

  const menuPanelEl = this.menuConfig.map(item => {
    return this.editorUi[item.linkedContainerClass]
  })
  $(document).ready(() => {
    $('.tooltip').tooltipster({
      animation: 'fade',
      delay: 200,
      side: 'right',
      theme: 'tooltipster-borderless'
    })
    $('.navMenu').on('click', 'li', function(event) {
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
