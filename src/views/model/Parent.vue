<template>
 <div>
   <child v-model="price"></child>
   <div>
     v-model(price) => {{price}}
   </div>
 </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import Child from './Child.vue'

@Component({
  components: {
    Child
  }
})
export default class Parent extends Vue {
  price = 'hello price'
}
</script>
