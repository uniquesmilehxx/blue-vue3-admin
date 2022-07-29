<template>
  <a-layout style="height: 100%; overflow: hidden;">
    <a-layout-header class="header">
      <div class="logo"></div>
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        @select="selectNav"
      >
        <a-menu-item key="index">版权中心</a-menu-item>
        <a-menu-item key="about">运营中心</a-menu-item>
        <a-menu-item key="home">分销中心</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout class="container">
      <a-layout-sider width="200" style="background: #fff">
        <Menu></Menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'
import Menu from './Menu'

export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    Menu
  },

  setup() {
    const router = useRouter();
    let selectedKeys1 = ref(['home'])

    // 顶部导航跳转
    function selectNav () {
      router.push({
        name: selectedKeys1.value[0]
      })
    }

    return {
      selectedKeys1,
      selectedKeys2: ref(['1']),
      collapsed: ref(false),
      openKeys: ref(['sub1']),
      selectNav
    };
  },

});
</script>
<style lang="less">
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
.ant-layout.container {
  height: calc(100% - 64px);
  overflow: hidden;
}
.ant-layout-sider {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>