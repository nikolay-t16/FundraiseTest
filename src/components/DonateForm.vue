<template>
  <div class="donate-form">
    <form>

    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DonateForm extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
  .donate-form{
    max-width: 400px;
  }
</style>
