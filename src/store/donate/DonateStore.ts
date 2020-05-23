import { Module } from 'vuex-smart-module';
import DonateState from './DonateState';
import DonateGetters from './DonateGetters';
import DonateMutations from './DonateMutations';
import DonateActions from './DonateActions';

const donateStore = new Module({
  state: DonateState,
  getters: DonateGetters,
  mutations: DonateMutations,
  actions: DonateActions,
});

export default donateStore;

export {
  DonateState,
  DonateGetters,
  DonateMutations,
  DonateActions,
};
