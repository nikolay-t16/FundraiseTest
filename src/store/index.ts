import Vue from 'vue';
import Vuex from 'vuex';
import {createStore, Module} from 'vuex-smart-module';
import donateStore from './donate/DonateStore';

Vue.use(Vuex);
const rootModule = new Module({
  modules: {
    donateStore,
  },
});

export default createStore(
  rootModule,
  {
    strict: true,
  },
);
