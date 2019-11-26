<template>
  <div>
    {{hello}}
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Emit, Inject, Model, Prop, Provide, Ref, Watch, PropSync } from 'vue-property-decorator'

import { Module, VuexModule, getModule } from 'vuex-module-decorators'
import MyModule from '@/store/MyModule'

const $myMod = getModule(MyModule)

@Component
export default class UseVuex extends Vue {
  hello: string = $myMod.someField

  created () {
    window.console.log($myMod)
  }
}
</script>
