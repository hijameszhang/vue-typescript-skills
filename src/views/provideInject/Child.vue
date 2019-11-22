<template>
  <div id="app">
    InjectReactive: {{bar}}
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, InjectReactive } from 'vue-property-decorator'

@Component
export default class Child extends Vue {
  @InjectReactive() private bar!: string
}
</script>
