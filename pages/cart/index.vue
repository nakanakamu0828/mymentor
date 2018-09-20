<template>
  <main>

    <nav class="breadcrumb is-bg-white has-succeeds-separator has-shadow" aria-label="breadcrumbs">
      <div class="container">
        <ul>
            <li>
                <router-link to="/">
                  HOME
                </router-link>
            </li>
            <li class="is-active">
                <a href="#">ショッピングカート</a>
            </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <section class="section has-text-centered">
        <h1 class="title">
          ショッピングカート
        </h1>
      </section>
      <section class="section">

        <ul class="steps is-medium">
          <li class="step-item" :class="[actualStep > 1 && 'is-completed', actualStep in [0, 1] && 'is-active']">
            <div class="step-marker">
              1
            </div>
          </li>
          <li class="step-item" :class="[actualStep > 2 && 'is-completed', actualStep == 2 && 'is-active']">
            <div class="step-marker">
              2
            </div>
          </li>
          <li class="step-item" :class="[actualStep > 3 && 'is-completed', actualStep == 3 && 'is-active']">
            <div class="step-marker">
              3
            </div>
          </li>
        </ul>

      </section>

      <div v-if="total > 0">
        <SectionCartList :cart="cart" :total="total" :amount="amount" v-if="actualStep in [0, 1]"/>
        <SectionCartCheckout :cart="cart" :total="total" :amount="amount" v-else-if="2 == actualStep"/>
      </div>
      <div v-else-if="!total && !success">
        <div class="m-b-50 has-text-centered">
          <h3 class="title has-text-grey m-b-40">カートに商品が登録されていません！</h3>
          <router-link to="/" class="button is-primary is-outlined is-rounded is-large">
            <i class="fas fa-search"></i> &nbsp;商品を探す
          </router-link>
        </div>
      </div>
      <div v-else>

      </div>
    </div>

  </main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import SectionCartList from '~/components/Section/Cart/List.vue'
import SectionCartCheckout from '~/components/Section/Cart/Checkout.vue'

const { mapGetters, mapActions } = createNamespacedHelpers('cart')

const initData = async ({ app, params }) => {
    return {
    }
}

export default {
  head: {
    script: [
      { src: 'https://js.stripe.com/v3/' }
    ]
  },
  async asyncData (context) {
    if (process.browser) {
      return {
      }
    }
    return await initData(context);
  },
  async mounted () {
    if (this.$store.getters.isFirstView) {
      this.$store.dispatch('setFirstView', {
          firstView: false
      });
    } else {
      const { products } = await initData({ app: this, params: this.$route.params });
      this.products = products;
    }
  },
  components: {
    SectionCartList,
    SectionCartCheckout,
  },
  computed: {
    ...mapGetters(['cart', 'total', 'amount', 'success', 'actualStep'])
  },
  methods: {
    ...mapActions(['setSuccess', 'setActualStep'])
  },
  beforeDestroy() {
    this.success && this.setSuccess(false)
    this.setActualStep(1)
  },
}
</script>

<style lang="scss" scoped>
</style>

