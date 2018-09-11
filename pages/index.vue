<template>
  <main>
    <div class="container">
      <section class="section">
        <p class="title">
          <strong class="has-text-info">Welcome</strong> to our awesome market
        </p>
        <p class="subtitle">Below you will find your latests products</p>
      </section>


      <section class="section">
        <h2 class="title has-text-dark is-underline has-text-centered font-leckerli-one">
          Mentor Plan
        </h2>
        <p class="subtitle has-text-grey has-text-centered is-7">
          メンタープラン
        </p>

        <div class="columns">
          <div class="column is-flex is-6-tablet is-4-desktop" v-for="(product, index) in products" :key="index">
              <CardServiceProduct :product="product" v-if="'service' == product.type"></CardServiceProduct>
              <CardGoodProduct :product="product" v-else-if="'good' == product.type"></CardGoodProduct>
          </div>
        </div>
      </section>
    </div>

    <section class="hero is-primary is-primary--light is-medium">
      <div class="hero-body">
        <div class="section-body">
          <div class="columns is-centered">
            <div class="column is-6">
              <div class="box is-signup is-centered">
                <div class="box-body">
                  <h2 class="title has-text-dark is-underline has-text-centered font-leckerli-one">
                    To support the programming
                  </h2>
                  <p class="subtitle has-text-grey has-text-centered is-7">
                    初心者のプログラムをサポートしています
                  </p>
                </div>
                <div class="has-text-centered m-t-50 m-b-50">
                  <a
                    class="button is-primary is-large is-rounded is-outlined"
                    href="javascript:void(0)"
                    @click="toggleContactModal"
                  >
                    問い合わせ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CardServiceProduct from '~/components/Card/Service/Product.vue'
import CardGoodProduct from '~/components/Card/Good/Product.vue'

export default {
  async asyncData ({ app }) {
    let products = []
    try {
      products = await app.$axios.$get('/products');
    } catch(err) {
      console.error(err);
    }
    return {
      products: products,
    }
  },
  components: {
    CardServiceProduct,
    CardGoodProduct,
  },
  methods: {
    toggleContactModal() {
      this.$store.dispatch('toggleContactModal');
    },
  }
}
</script>

<style lang="scss" scoped>
.is-primary--light {
  background-color: #EEF5FF;
}
</style>

