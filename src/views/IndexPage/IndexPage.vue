<template>
  <div>
    <h1>index页面</h1>
    <div>我是父组件状态：{{ name }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" @changeName="changeName" />
  </div>
</template>

<script>
  import { ref } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'IndexPage',
    components: {
      HelloWorld
    },
    setup () {
      let name = ref('小红')

      const changeName = function (value) {
        name.value = value
      }

      return {
        name,
        changeName
      }
    }
  }

</script>