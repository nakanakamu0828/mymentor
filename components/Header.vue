<template>
  <nav class="navbar is-fixed-top has-shadow">
    <div class="container is-flex-touch">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item is-block">
          <div class="font-leckerli-one navbar-brand__title">
            Nakamu Mentor
          </div>
          <div class="subtitle is-size-7">初心者のプログラムをサポートしています</div>
        </router-link>

      </div>

      <div class="navbar-end is-flex-touch">
        <router-link
          to="/cart"
          class="navbar-item is-text-font-quicksand"
        >
          <div :data-badge="total" :class="{'badge is-badge-danger': total > 0}">
            <i class="fa fa-shopping-cart"></i>&nbsp;
            <span class="is-hidden-mobile">Cart</span>
          </div>
        </router-link>
      </div>

    </div>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('cart');

export default {
  name: 'Header',
  props: {
  },
  computed: {
    ...mapGetters(['total']),
  },
};
</script>

<style lang="scss" scoped>
.navbar-end.is-flex-touch {
    margin: auto 1rem auto auto;
}
</style>