<template>
  <div>
    {{ title }} 
    {{ props.age }}
    <a-button @click="handleClick">点击</a-button>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
const title = 'script setup的使用展示'
// props
const props = defineProps({
  age: Number
})
// emit
const emit = defineEmits(['setAge'])
// 生命周期
onBeforeMount (() => {
  console.log('使用setup的单文件组件加载啦')
})
// 普通函数
function handleClick () {
  emit('setAge')
}
</script>

<style>
</style>