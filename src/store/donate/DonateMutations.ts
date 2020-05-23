import { Mutations } from 'vuex-smart-module';
import DonateState from './DonateState';

export default class DonateMutations extends Mutations<DonateState> {
  public setCurrentCurrency(value: string): void {
    this.state.currentCurrency = value;
  }
}
