function RightSideNav(editorUi, container) {
  this.editorUi = editorUi
  this.container = container
  this.menuConfig = [
    {
      className: 'menuInfo',
      title: '信息',
      active: true,
      linkedContainerClass: 'formatContainer',
      iconSrc: '/images/svg/info.svg'
    },
    {
      className: 'menuStyle',
      title: '样式',
      active: false,
      linkedContainerClass: 'formatStyleContainer',
      iconSrc: '/images/svg/styles.svg'
    },
    {
      className: 'menuComment',
      title: '评论',
      active: false,
      linkedContainerClass: 'formatCommentContainer',
      iconSrc: '/images/svg/comments.svg'
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
  menuList.style.cssText = 'background-color:#fff;width: 50px;'
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
  // const thisClass = this
  let formatContainerShow = true
  $(document).ready(() => {
    $('.tooltip').tooltipster({
      animation: 'fade',
      delay: 200,
      side: 'right',
      theme: 'tooltipster-borderless'
    })
    $('.rightNavMenu').on('click', 'li', function(event) {
      let originWidth = $('.geFormatContainer').width()
      if ($(this).hasClass('is-active')) {
        // 已经选中
        $('.geFormatContainer').toggle('slow')
        $('.geRightSideMenuContainer').animate(
          {
            right: `${formatContainerShow ? '-' : '+'}=${originWidth}px`
          },
          'slow',
          () => {
            formatContainerShow = !formatContainerShow
          }
        )
        $('.geDiagramContainer').css('right', '0px')
      } else {
        if (!formatContainerShow) {
          $('.geRightSideMenuContainer').animate(
            {
              right: `+=240px`
            },
            0,
            () => {
              formatContainerShow = !formatContainerShow
            }
          )
        }
      }

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
