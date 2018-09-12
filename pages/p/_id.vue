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
          </div>
          <div class="column is-offset-1 is-5">
            <figure class="image">
              <img :src="product.images[0]" :alt="product.name">
            </figure>
          </div>
        </div>

        <div class="box" v-for="(sku, index) in skus" :key="index">
          <article class="media">
            <div class="media-left">
              <picture class="image is-64x64">
              </picture>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong v-text="sku.attributes.period"></strong><br>
                  <span class="sr-only">価格</span>
                  <strong class="is-size-3"><span class="is-size-2">¥</span>{{ sku.price }}</strong>
                  <a
                    class="button is-primary is-large is-rounded is-outlined is-pulled-right"
                    href="javascript:void(0)"
                  >
                    契約する
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
export default {
  async asyncData ({ env, params }) {
    return {
    }
  },
  async asyncData ({ app, params }) {
    const product = await app.$axios.$get(`/product?id=${params.id}`);
    const skus = await app.$axios.$get(`/skus?product=${params.id}`);
    return {
      product: product,
      skus: skus,
    }
  },
  computed: {
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>

</style>
