<template>
  <main v-if="product">
    
    <nav class="breadcrumb is-bg-white has-succeeds-separator has-shadow" aria-label="breadcrumbs">
      <div class="container">
        <ul>
            <li>
                <router-link to="/">
                  HOME
                </router-link>
            </li>
            <li class="is-active">
                <a href="#" v-text="product.name"></a>
            </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <section class="section">
        <div class="columns is-vcentered">
          <div class="column is-6">
            <h1 class="title is-3 m-b-40" v-text="product.name"></h1>
            <h2 class="subtitle is-6" v-html="product.description"></h2>
            

            <div class="social">
              <div class="button-group level is-mobile">
                <div class="level-item" style="margin: 0;">
                  <a :href="twitterShareUrl" target="_blank" class="button is-fullwidth is-twitter is-medium">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
                <div class="level-item" style="margin: 0;">
                  <a :href=fbShareUrl target="_blank" class="button is-fullwidth is-facebook is-medium">
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div class="column is-offset-1 is-5">
            <figure class="image">
              <img :src="product.images[0]" :alt="product.name">
            </figure>
          </div>
        </div>

        <BoxProductSku :product="product" :sku="sku" v-for="(sku, index) in skus" :key="index" />
      </section>
    </div>
    
  </main>
</template>

<script>
import BoxProductSku from '~/components/Box/Product/Sku.vue'

const initData = async ({ app, params }) => {
  const [ product, skus ] = await Promise.all([
    app.$axios.$get(`/product?id=${params.id}`),
    app.$axios.$get(`/skus?product=${params.id}`),
  ])
  return {
    product: product,
    skus: skus.map((s) => {
      s['product'] = product
      return s
    }),
  }
}

export default {
  async asyncData (context) {
    if (process.browser) {
      return {
        product: null,
        skus: [],
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
      const { product, skus } = await initData({ app: this, params: this.$route.params });
      this.product = product;
      this.skus = skus;
    }
  },
  computed: {
    twitterShareUrl: function () {
      const url = process.env.BASE_URL + this.$route.fullPath
      return `https://twitter.com/intent/tweet?text=${this.product.name}&url=${url}`
    },
    fbShareUrl: function () {
      const url = process.env.BASE_URL + this.$route.fullPath
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`
    },
  },
  components: {
    BoxProductSku,
  }
}
</script>

<style lang="scss" scoped>
</style>
