export default {
  toggleContactModal(state) {
    state.contactModal = !state.contactModal;
    document.querySelector('html').classList.toggle('is-clipped');
  },
  closeContactModal(state) {
    state.contactModal = false;
    document.querySelector('html').classList.remove('is-clipped');
  },
}
