<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
      <div>我是父组件状态：{{ name }}</div>
      <HelloWorld msg="Welcome to Your Vue.js App" @changeName="changeName" />
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

import { ref } from 'vue'

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    let name = ref('小红')

    const changeName = function (value) {
      name.value = value
    }

    return {
      locale: zhCN,
      name,
      changeName
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
