import axios from 'axios'
import { createToken } from 'vue-stripe-elements-plus'
axios.defaults.baseURL = process.env.API_URL

export default {
  setIsStripeCardCompleted: ({ commit }, val) =>
    commit('SET_IS_STRIPE_CARD_COMPLETED', val),
  setStatus: ({ commit }, val) =>
    commit('SET_STATUS', val),

  pay: async ({ commit, dispatch }, {name, email, skus}) => {
    commit('SET_IS_LOADING', true)

    const { token } = await createToken()

    commit('SET_IS_SUBMITTED', true)
    try {
      const { data: stripeResponse } = await axios.post('/order_create', {
        name:   name,
        email:  email,
        skus:   skus,
        token:  token.id,
      },
      {
        headers: { 'Content-Type': 'application/json' }
      });

      commit('SET_STATUS', 'success')
      dispatch('cart/clearCount', null, { root: true })
      dispatch('cart/clearContents', null, { root: true })
      dispatch('cart/setSuccess', true, { root: true })
      dispatch('cart/setActualStep', 3, { root: true })

      const { message: stripeResponseMessage } = stripeResponse
      commit('SET_RESPONSE', stripeResponseMessage)
    } catch (err) {
      console.error(err)
      commit('SET_STATUS', 'failure')
      commit('SET_RESPONSE', `Error: ${JSON.stringify(err, null, 2)}`)
    }
    commit('SET_IS_LOADING', false)
  },
  clearCheckout({ commit }) {
    commit('SET_IS_SUBMITTED', false)
    commit('SET_IS_STRIPE_CARD_COMPLETED', false)
    commit('SET_STATUS', '')
    commit('SET_RESPONSE', '')
  }
}
