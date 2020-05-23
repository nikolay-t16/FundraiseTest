<template>
  <div class="donate-form">
    <form>
      <div v-for="preset in this.donateStore.getters.presets" v-bind:key="preset">
        {{preset}}
      </div>
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
import donate from '../store/donate/DonateStore';

  @Component
export default class DonateForm extends Vue {
    @Prop() private msg!: string;

    protected donateStore = donate.context(this.$store);

    protected presets = this.donateStore.getters.presets;

    protected get currentCurrencyCode(): string {
      return this.donateStore.getters.currentCurrency.code;
    }

    protected set currentCurrencyCode(value: string) {
      this.donateStore.mutations.setCurrentCurrency(value);
      console.log('currentCurrencyCode', value);
    }
}
</script>

<style scoped lang="scss">
  .donate-form {
    max-width: 400px;
  }
</style>
