<template>
  <div id="app">
    <input type="text" v-model="bar">
    <Child />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, ProvideReactive } from 'vue-property-decorator'

import Child from './Child.vue'

@Component({
  components: {
    Child
  }
})
export default class Parent extends Vue {
  @ProvideReactive() private bar = 'deeper lorry'
}
</script>
