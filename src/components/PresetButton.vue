<template>
  <div
    class="presset-button"
    v-bind:class="{['presset-button_selected']: isSelected}"
    @click="onClick"
  >
    {{label}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import donate from '@/store/donate/DonateStore';
import PresetsHelper from '@/helpers/PresetsHelper';

@Component({
  props: ['value', 'isSelected', 'index'],
})
export default class PresetButton extends Vue {
  private donateStore = donate.context(this.$store);

  @Prop(Number)
  public readonly value!: number;

  private valueLocal: number = this.value ? this.value : 0;

  @Prop(Number)
  public readonly index!: number;

  private indexLocal: number = this.index ? this.index : 0;

  @Prop(Boolean)
  public readonly isSelected!: boolean;

  private isSelectedLocal: boolean = this.isSelected ? this.isSelected : false;

  private get label() {
    const label = PresetsHelper.makePresetLabel(
      this.valueLocal,
      this.donateStore.getters.currentCurrency.locale,
      this.donateStore.getters.currentCurrency.code,
    );
    return `${label} ${this.donateStore.getters.currentCurrency.symbol}`;
  }

  private onClick() {
    this.$emit('click', this.valueLocal, this.indexLocal);
  }
}
</script>

<style lang="scss">
  .presset-button {
    cursor: pointer;

    &_selected {
      color: red;
    }
  }
</style>
