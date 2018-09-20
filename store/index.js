import Vuex from 'vuex';
import contact from '~/store/modules/contact/index.js';
import cart from '~/store/modules/cart/index.js';
import checkout from '~/store/modules/checkout/index.js';

const store = () => new Vuex.Store({
  modules: {
    contact,
    cart,
    checkout,
  },
  state: {
    firstView: null,
  },
  mutations: {
    setFirstView(state, context) {
      state.firstView = context.firstView;
    },
  },
  actions: {
    setFirstView: (context, payload) => {
      context.commit({
        type: 'setFirstView',
        firstView: payload.firstView
      })
    },
  },
  getters: {
    isFirstView: state => state.firstView,
  },
})

export default store