<template>
  <div class="donate-form">
    <form>
      <div v-for="preset in presets" v-bind:key="preset">
        {{preset}}
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import donate, {
  DonateState,
  DonateGetters,
  DonateMutations,
  DonateActions,
} from '../store/donate/DonateStore';

  @Component
export default class DonateForm extends Vue {
    @Prop() private msg!: string;

    protected donateStore = donate.context(this.$store);

    protected presets = this.donateStore.getters.presets;
}
</script>

<style scoped lang="scss">
  .donate-form {
    max-width: 400px;
  }
</style>
