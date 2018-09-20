export default {
  cart: ({ cart }) => cart,
  total: ({ total }) => total,
  amount: ({ amount }) => amount,
  actualStep: ({ actualStep }) => actualStep,
  success: ({ success }) => success,
  hasItem: (state) => (id) => {
    return id in state.cart
  }
}
