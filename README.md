### 改动的地方

1. 把 `https://github.com/jgraph/mxgraph/tree/master/javascript/src` 目录下拷贝到项目根目录
2. 修改 `index.html` 文件 `mxClient.js` 的引用路径为 `<script type="text/javascript" src="./src/js/mxClient.js"></script>` 这两步主要是为了我自己本地测试用
3. 引入 jquery 操作 DOM 和事件代理
4. 界面的主要框架的生成逻辑是在 `js/EditorUi.js` 中生成的，所以要添加新的 UI 就需要在这个文件中进行修改
5. 创建生成左侧菜单的文件`js/SideNav.js` ,由于不太清楚`mxEvent` 的事件代理逻辑，所以选择用 jq 来处理事件
6. 在`js/EditorUi.js` 添加 `SideNav` ，生成侧边导航栏
7. 在 `styles/grapheditor.css` 中修改样式
8. 修改其他受到影响的UI样式
9. 创建文件夹和图片menu对应的容器并放到主UI中
10. 修改menu对应的容器的样式
11. 右侧的菜单没有做，不过跟左侧这个应该是一样的逻辑

12. clone 这个项目，在本地启动服务器打开就能看到效果了
