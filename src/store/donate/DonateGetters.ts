import { Getters } from 'vuex-smart-module';
import DonateState, { CurrenciesData } from './DonateState';
import Helper from '../../helpers/Helper';

export default class DonateGetters extends Getters<DonateState> {
  public get currencies(): CurrenciesData[] {
    return Array.from(this.state.currencies.values());
  }

  public get currentCurrency(): CurrenciesData {
    return this.state.currencies.get(this.state.currentCurrency) as CurrenciesData;
  }

  public get presets(): number[] {
    const { rate } = this.getters.currentCurrency;
    return this.state.presets.map((value) => Helper.makePressetValue(value, rate));
  }
}
