<template>
  <b-field :label="$i18n.t(label)">
    <b-input
      :placeholder="$i18n.t(label || description)"
      v-model="model"
      expanded
      :spellcheck="spellcheck"
    ></b-input>
  </b-field>
</template>

<script lang="ts" >
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

@Component({})
export default class BasicInput extends Vue {
  @VModel({ type: [Number, String], required: true }) model!: number;
  @Prop({ type: String, default: 'input.input' }) protected label!: string;
  @Prop({ type: String, default: 'input.input' })
  protected description!: string;
  @Prop(Boolean) protected spellcheck!: boolean;
}
</script>
