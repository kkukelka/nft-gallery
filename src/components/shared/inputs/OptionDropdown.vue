<template>
  <b-field :label="$i18n.t(label)">
    <b-select :placeholder="$i18n.t(description)" v-model="model">
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </b-select>
  </b-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, VModel } from 'vue-property-decorator'

type Option = {
  value: string | number
  text: string
}

@Component
export default class BasicDropdown extends Vue {
  @VModel({ type: [Number, String], required: true }) model!: number;
  @Prop({ type: String, default: 'input.slider' }) protected label!: string;
  @Prop({ type: String, default: 'input.slider' }) protected description!: string;
  @Prop({ type: Array, default: 'input.slider', required: true }) protected options!: Option[];

}
</script>
