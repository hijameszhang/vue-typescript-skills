<template>
 <div>
   <p>child=> {{child}}</p>
   <p>propA=> {{propA}}</p>
   <p>propB=> {{propB}}</p>
   <p>propC=> {{propC}}</p>
   <p>name=> {{name}}</p>
   <div>
     <button @click="setName">set name</button>

     <button @click="resetCount">reset count</button>
   </div>
 </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Emit, Inject, Model, Prop, Provide, Vue, Watch, PropSync } from 'vue-property-decorator'

@Component
export default class Demo extends Vue {
  // data
  count = 0

  // child, 必传, child! => 表示不需要构建器进行初始化
  @Prop({ type: String, required: true }) readonly child!: string

  // propA, 非必传, 没有默认值, 类型可以是number | undefined
  @Prop(Number) readonly propA: number | undefined

  // propB, 非必传, 类型可以是number | undefined, propB! => 表示不需要构建器进行初始化
  @Prop({ default: 'default value' }) readonly propB!: string

  // propC, 非必传, 构建器可以是String|Boolean, 值类型可以为: string | boolean | undefined
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined

  // .sync 修饰符
  @PropSync('name', { type: String }) syncedName!: string
  /** 等价于
   props: {
      name: {
        type: String
      }
    },
    computed: {
      syncedName: {
        get() {
          return this.name
        },
        set(value) {
          this.$emit('update:name', value)
        }
      }
    }
   */

  @Emit('reset') // 若为 @Emit(), 等价于 @Emit('resetCount'), 默认即方法名就是事件名
  resetCount () {
    const defaultVal = 0
    this.count = defaultVal
    return defaultVal
  }
  /* 此例 resetCount等价于
  resetCount () {
    const defaultVal = 0
    this.count = defaultVal
    this.$emit('reset', defaultVal);
  }
   */

  @Watch('child')
  onChildChanged (val: string, oldVal: string) {
    if (val !== oldVal) {
      window.console.log(val)
    }
  }

  setName () {
    this.syncedName = 'hello'
    this.count += 1
  }
}
</script>

<style>
</style>
