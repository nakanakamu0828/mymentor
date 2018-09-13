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

        <div class="box" v-for="(sku, index) in skus" :key="index">
          <article class="media">
            <div class="media-left" v-if="sku.image">
              <picture class="image is-64x64">
              </picture>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong v-text="sku.attributes.period"></strong><br>
                  <span class="sr-only">価格</span>
                  <strong class="is-size-3">{{ priceFormat(sku.price, sku.currency) }}</strong>
                  <a
                    class="button is-primary is-large is-circle is-outlined is-pulled-right"
                    href="javascript:void(0)"
                  >
                    <i class="fas fa-cart-plus"></i> 
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
    
  </main>
</template>

<script>

const initData = async ({ app, params }) => {
  const [ product, skus ] = await Promise.all([
    app.$axios.$get(`/product?id=${params.id}`),
    app.$axios.$get(`/skus?product=${params.id}`),
  ])
  return {
    product: product,
    skus: skus,
  }
}

export default {
  async asyncData (context) {
    if (process.browser) {
      return {
        products: null,
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
      const { products, skus } = await initData({ app: this, params: this.$route.params });
      this.products = products;
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
  methods: {
    priceFormat: function (price, currency = 'JPY') {
      const formatter = new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: currency
      });
      return formatter.format(price);
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
</style>
