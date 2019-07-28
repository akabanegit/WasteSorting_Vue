# my_project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
src——css——添加hello-mui
# 样式和资源需求
1.字体
2.背景色
3.轮播图图片
4.icon图片

# 垃圾分类
>1.主体仿造微信小程序中的垃圾分类指南

>2.底部icon小图标使用阿里icon（已在阿里icon-垃圾分类项目中）

>3.项目素材寻找:前期还是使用icon

>4.样式：APP主页为一个router-view+底部导航栏 导航栏主要分为：指南（icon书籍）专题（icon特色专题）下载（icon下载）留言（icon留言）

>5.功能需求：

>6.主页书籍指南中: 1.利用开启后端api调用v-for-li
		  2.分左右两列1.标签页2.主体页面 


# Bug
>1.Tabbar栏 icon active不显示的解决方案 在router内修改`linkActiveClass:'mui-active'`

>2.在调用图标时，font-family 和font前缀作为标签调用 例如
`<span class="iconfont Wasteshuji"></span>`

>3.vue动画的使用

>4.如要使div撑满整个页面 必须初始化`html, body{ margin:0; height:100%; }` 一般最好先使用normalize.css 
