<template>
  <span :class="{ align: bottom }" @click="onClick" >
    <a class="has-text-danger"><b-icon icon="times"> </b-icon></a>
  </span>
</template>

<script lang="ts" >
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class RemoveIcon extends Vue {
  @Prop(String) value!: string
  @Prop(Boolean) bottom!: boolean

  @Emit('input')
  protected onClick(): string {
    return this.value
  }
}
</script>

<style scoped>
.align {
  vertical-align: text-top;
}
</style>
