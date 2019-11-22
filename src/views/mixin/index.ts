// 定义要混合的类 mixins/index.ts
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
// 一定要用Component修饰
export default class myMixins extends Vue {
  mixinVal: string = 'Hello Mixin'
}
