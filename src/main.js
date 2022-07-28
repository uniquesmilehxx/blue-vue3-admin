import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

// moment
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
// 对应 vue2 中：Vue.prototype.$moment = moment
app.config.globalProperties.$moment = moment

// 基础less
import '@/assets/css/common.less'

// 使用插件（可链式调用use）
app
.use(Antd)
.mount('#app')