<template>
  <div class="presset-button">
    {{label}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import donate from '@/store/donate/DonateStore';
import PresetsHelper from '@/helpers/PresetsHelper';

@Component({
  props: ['value'],
})
export default class PresetButton extends Vue {
  private donateStore = donate.context(this.$store);

  @Prop(Object)
  public readonly value!: number;

  private valueLocal: number = this.value ? this.value : 0;

  private get label() {
    const label = PresetsHelper.makePresetLabel(
      this.valueLocal,
      this.donateStore.getters.currentCurrency.locale,
      this.donateStore.getters.currentCurrency.code,
    );
    return `${label} ${this.donateStore.getters.currentCurrency.symbol}`;
  }
}
</script>

<style scoped lang="scss">
  .donate-form {
    max-width: 400px;
  }
</style>
