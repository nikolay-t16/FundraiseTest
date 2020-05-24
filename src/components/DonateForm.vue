<template>
  <div class="donate-form">
    <form>
      <div class="donate-form__presets">
        <preset-button
          v-for="preset in donateStore.getters.presets"
          v-bind:key="preset"
          :value="preset"
        />
      </div>
      <input v-model="currentDonate"/>
      <select v-model="currentCurrencyCode">
        <option
          v-for="currency in donateStore.getters.currencies"
          v-bind:value="currency.code"
          v-bind:key="currency.code"
        >
          {{currency.code}}
        </option>
      </select>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
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

    protected get currentCurrencyCode(): string {
      return this.donateStore.getters.currentCurrency.code;
    }

    protected set currentCurrencyCode(value: string) {
      this.donateStore.mutations.setCurrentCurrency(value);
    }
}
</script>

<style scoped lang="scss">
  .donate-form {
    max-width: 400px;
  }
</style>
