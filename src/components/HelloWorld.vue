<template>
  <div class="hello">
    <div>子组件prop测试：{{ msg }}</div>
    <div>
      <a-button type="primary" class="less-test">测试less的使用</a-button>
    </div>
    <div>
      <a-button type="primary">主题色修改测试</a-button>
    </div>
    <div>
      antv使用及国际化测试：
      <a-date-picker></a-date-picker>
    </div>
    <div>展示moment的使用：{{ date }}</div>
    <div>
      通过自定义方法修改响应式变量：{{ num }}
      <a-button @click="changeNum">点击修改数字</a-button>
    </div>
    <div>
      通过组件通讯修改父组件data:
      <a-button @click="changeName('小王')">点击修改父组件为小王</a-button>
    </div>
    <!-- setup的使用展示组件 -->
    <setup-script :age="18" @setAge="setAge"></setup-script>
  </div>
</template>

<script>
import { onMounted, getCurrentInstance, ref } from 'vue'
import { message } from 'ant-design-vue'
import SetupScript from './setup-script'
import moment from 'moment'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    SetupScript
  },
  emits: ['changeName'],
  setup (props, context) {
    /**
     * 当前实例，使用方式类似于 vue2 单个实例中的this
     * （若data定义在setup同级，可通过instance访问）
     * （instance.setupContext 就是 context）
     * instance.proxy可访问全局属性 globalProperties
     */
    const instance = getCurrentInstance()

    // context包括（attrs、emit、expose、slot）,可解构出使用
    console.log('setup', props, context, instance, instance.proxy.$moment())

    // 创建响应式变量通过ref
    let date = ref(111)
    let num = ref(0)

    // 钩子函数
    onMounted (() => {
      // 修改响应式变量通过.value
      date.value = moment().format()
    })

    // 自定义函数
    const changeNum = function () {
      // 读写的时候都要通过.value（右侧不能做自增）
      num.value = num.value + 1
      message.success('num修改成功')
    }

    // 修改父组件状态
    const changeName = function (value) {
      // 以下两种方式都可以
      // instance.emit('changeName', value)
      context.emit('changeName', value)
    }

    const setAge = function () {
      console.log('setAge')
    }

    return {
      // 暴露出去
      date,
      num,
      changeNum,
      changeName,
      setAge
    }
  }
}
</script>

<style lang="less" scoped>
.hello {
  background-color: #eee;
  padding: 20px 0;
  margin-top: 20px;
}
.less-test {
  background-color: @pink;
}
div {
  margin-bottom: 20px;
}
</style>
