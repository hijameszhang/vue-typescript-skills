<template>
  <div>
    <input v-model="message">
    <p>message: {{ message }}</p>
    <p>computed message: {{ msg }}</p>
    <button @click="hi">Hi Boy!</button>
    <Demo :child='child' :name.sync='name' ref="demo" @reset='resetHandler'></Demo>
    <div>
      <button @click="changeChild">change child</button>
    </div>
    <div>
      <hello-world msg='hello world'></hello-world>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import { Emit, Inject, Model, Prop, Provide, Watch, PropSync, Ref } from 'vue-property-decorator'

import HelloWorld from '../components/HelloWorld.vue'
import Demo from './Demo.vue'
import mixinDemo from './mixin'

@Component({
  components: {
    Demo,
    HelloWorld // 组件注入
  }
})
export default class App extends mixins(mixinDemo) {
  // data
  message = 'hello'
  name = 'dmax'
  child: number | string = 'james'

  @Ref('demo') readonly demoRef!:Vue
  // @Ref('demoTwo') readonly demoRef2!: Demo

  @Provide() foo = 'foo'
  @Provide() optional = 'parent optional'
  // baz, 别名
  @Provide('bar') baz = 'bar'
  // mounted钩子函数
  mounted () {
    window.console.log('hello Hello.vue')
    window.$vm = this
    window.console.log('demo ref1=> ', this.demoRef)
    window.console.log('mixinVal => ', this.mixinVal)
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

  changeChild () {
    this.child = +new Date()
  }
}
</script>
