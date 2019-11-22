<template>
  <div>
    <p>v-model: demo => {{demo}}</p>
    <input type="text" :value="demo"  @change="$emit('change', $event.target.value)">
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Emit, Inject, Model, Prop, Provide, Ref, Vue, Watch, PropSync } from 'vue-property-decorator'

export default class InputDemo extends Vue {
  // 此处设置demo为 readonly, 若通过 this.demo = 'james'赋值时, 便会编译出错!!!
  @Model('change', { type: String }) demo!: string;
}
</script>
