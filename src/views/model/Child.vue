<template>
 <div>
   <input type="text" :value="value" @input="changed"/>
 </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator'

@Component
export default class Child extends Vue {
  @Model('input') value!: boolean

  @Emit('input')
  changed (ev:any) {
    return ev.target.value
  }
}
</script>
