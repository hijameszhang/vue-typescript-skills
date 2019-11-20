<template>
  <div>
    <input v-model="message">
    <p>message: {{ message }}</p>
    <p>computed message: {{ msg }}</p>
    <button @click="hi">Hi Boy!</button>
    <Demo child='james' :name.sync='name' @reset='resetHandler'></Demo>
    <div>
      <hello-world msg='hello world'></hello-world>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import HelloWorld from '../components/HelloWorld.vue'
import Demo from './Demo.vue'

@Component({
  components: {
    Demo,
    HelloWorld // 组件注入
  }
})
export default class App extends Vue {
  // data
  message = 'hello'
  name = 'dmax'

  // mounted钩子函数
  mounted () {
    window.console.log('hello Hello.vue')
    window.$vm = this
  }

  // 计算属性
  get msg () {
    return 'computed ' + this.message
  }

  // method => hi
  hi () {
    this.message = 'hello james'
  }

  resetHandler (value: number, $event:Event) {
    window.console.log('resethandler => ', value, $event)
  }
}
</script>
