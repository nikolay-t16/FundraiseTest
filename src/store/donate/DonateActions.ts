import { Actions } from 'vuex-smart-module';
import axios from 'axios';
import DonateState from './DonateState';
import DonateMutations from './DonateMutations';
import DonateGetters from './DonateGetters';

export default class DonateActions extends Actions<DonateState, DonateGetters, DonateMutations> {
  public async sendDonate(options: { amount: number, currency: string }): Promise<void> {
    const {amount, currency} = options;
    return axios.post('http://localhost:3001/donate', {amount, currency})
      .then((res) => {
        return res.data.data;
      })
      .catch((error) => error.response.data.error);

  }
}
