# ava-commander-front

## 简介
- 因实验室项目需要，开发了Spirent Avalanche设备web控制系统
- 学习了vuetify框架后使用vue+vuetify重构一下，目前还在开发中
- 采用了一款[vuetify模板](https://store.vuetifyjs.com/products/vuetify-material-dashboard-free)
- 启动：
  - 进入/ava-commander-front路径
  - `yarn install` 或 `npm install`
  - `yarn serve` 或 `npm run dev`

## 项目文件结构

```txt
.
├── README.md
├── babel.config.js
├── dir.md
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.vue
│   ├── api
│   │   └── axios.js
│   ├── assets
│   │   ├── logo.png
│   │   └── register.jpg
│   ├── components
│   │   ├── Dialog.vue
│   │   ├── Links.vue
│   │   ├── MaterialAlert.vue
│   │   ├── MaterialCard.vue
│   │   ├── MaterialChartCard.vue
│   │   ├── MaterialSnackbar.vue
│   │   ├── MaterialStatsCard.vue
│   │   ├── ViewIntro.vue
│   │   └── app
│   ├── layouts
│   │   └── default
│   ├── main.js
│   ├── plugins
│   │   ├── app.js
│   │   ├── chartist.js
│   │   ├── index.js
│   │   ├── vue-meta.js
│   │   ├── vuetify.js
│   │   ├── vuex-pathify.js
│   │   └── webfontloader.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── index.js
│   │   └── modules
│   ├── styles
│   │   ├── overrides.sass
│   │   └── variables.scss
│   ├── util
│   │   ├── globals.js
│   │   ├── helpers.js
│   │   └── routes.js
│   └── views
│       ├── Dashboard.vue
│       ├── Error.vue
│       ├── Login.vue
│       ├── ResultManage.vue
│       ├── ScenceManage.vue
│       └── Support.vue
├── vue.config.js
└── yarn.lock
```



