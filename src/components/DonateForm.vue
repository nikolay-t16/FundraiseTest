<template>
  <div class="donate-form">
    <form @submit="onSubmit">
      <div class="donate-form__presets">
        <preset-button
          v-for="(preset, index) in donateStore.getters.presets"
          v-bind:key="preset"
          :value="preset"
          :index="index"
          :is-selected="preset === currentDonate"
          @click="onClickPresetButton"
        />
      </div>
      <input
        v-model="currentDonate"
        @change="onCurrentDonateChange"
        @keyup="this.onCurrentDonateKeyup"
      />
      <select v-model="currentCurrencyCode">
        <option
          v-for="currency in donateStore.getters.currencies"
          v-bind:value="currency.code"
          v-bind:key="currency.code"
        >
          {{currency.code}}
        </option>
      </select>
      <button type="submit">Donate</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Helper from '@/helpers/Helper';
import PresetButton from './PresetButton.vue';
import donate from '../store/donate/DonateStore';

  @Component({
    components: {
      PresetButton,
    },
  })
export default class DonateForm extends Vue {
    private donateStore = donate.context(this.$store);

    private currentDonate = 0;

    private currentPresetIndex: number | null = 0;

    private get currentCurrencyCode(): string {
      return this.donateStore.getters.currentCurrency.code;
    }

    private set currentCurrencyCode(value: string) {
      this.donateStore.mutations.setCurrentCurrency(value);
      if (this.currentPresetIndex != null) {
        this.currentDonate = this.donateStore.getters.presets[this.currentPresetIndex];
      }
    }

    private onClickPresetButton(value: number, index: number): void {
      this.currentDonate = value;
      this.currentPresetIndex = index;
    }

    private onCurrentDonateChange() {
      this.currentPresetIndex = null;
      this.currentDonate = Helper.formatDonate(this.currentDonate.toString());
    }

    public onCurrentDonateKeyup(event: InputEvent) {
      this.onCurrentDonateChange();
    }

    public async onSubmit(event: InputEvent) {
      event.preventDefault();
      const response = await this.donateStore.actions.sendDonate(
        {
          amount: this.currentDonate,
          currency: this.currentCurrencyCode,
        },
      );
      alert(response);
    }
}

</script>

<style lang="scss">
  .donate-form {
    max-width: 400px;
  }
</style>
