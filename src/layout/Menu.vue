<template>
  <a-menu
    v-model:selectedKeys="selectedKeys2"
    v-model:openKeys="openKeys"
    mode="inline"
    :style="{ height: '100%', borderRight: 0 }"
  >
    <a-sub-menu key="sub1">
      <template #title>
        <span>
          <user-outlined />
          subnav 1
        </span>
      </template>
      <a-menu-item key="1">option1</a-menu-item>
      <a-menu-item key="2">option2</a-menu-item>
      <a-menu-item key="3">option3</a-menu-item>
      <a-menu-item key="4">option4</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup>
import { UserOutlined } from '@ant-design/icons-vue';

import { ref, reactive } from 'vue'
let selectedKeys2 = ref(['1'])
let openKeys = ref(['sub1'])

</script>