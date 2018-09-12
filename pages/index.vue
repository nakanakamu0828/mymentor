<template>
  <main>
    <div class="container">
      <!-- <section class="section">
        <p class="title">
          <strong class="has-text-info">Welcome</strong> to our awesome market
        </p>
        <p class="subtitle">Below you will find your latests products</p>
      </section> -->


      <section class="section">
        <h2 class="title has-text-dark is-underline has-text-centered font-leckerli-one">
          Mentor Plan
        </h2>
        <p class="subtitle has-text-grey has-text-centered is-7">
          必要な時に購入できるメンタープランですです
        </p>

        <div class="columns">
          <div class="column is-flex is-6-tablet is-4-desktop" v-for="(product, index) in products" :key="index">
              <CardServiceProduct :product="product" v-if="'service' == product.type"></CardServiceProduct>
              <CardGoodProduct :product="product" v-else-if="'good' == product.type"></CardGoodProduct>
          </div>
        </div>
      </section>


      <section class="section">
        <h2 class="title has-text-dark is-underline has-text-centered font-leckerli-one">
          How to Use
        </h2>
        <p class="subtitle has-text-grey has-text-centered is-7">
          メンターの利用方法について
        </p>

        <div class="columns m-t-50">

          <div class="column is-4">

            <div class="icon-container has-text-centered">
              <span class="floating-number">１</span>
              <img src="~/assets/img/icon-accept.png">
            </div>
            <p class="title is-4 has-text-centered m-t-10 m-b-30">
              メンタープランの選択
            </p>
            <p class="subtitle has-text-centered is-6">
              求めているスキルにあったメンタープランを選択します
            </p>
          </div>

          <div class="column is-4">

            <div class="icon-container has-text-centered">
              <span class="floating-number">２</span>
              <img src="~/assets/img/icon-total-cart.png">
            </div>
            <p class="title is-4 has-text-centered m-t-10 m-b-30">
              選択したプランを購入
            </p>
            <p class="subtitle has-text-centered is-6">
              クレジットカード決済を利用してプランを購入します。Stripeを利用した決済になります。
            </p>
          </div>

          <div class="column is-4">

            <div class="icon-container has-text-centered">
              <span class="floating-number">３</span>
              <img src="~/assets/img/icon-read.png">
            </div>
            <p class="title is-4 has-text-centered m-t-10 m-b-30">
              メールによるご連絡
            </p>
            <p class="subtitle has-text-centered is-6">
              購入時にご登録頂いたメールアドレスにご連絡差し上げます。その後、Slackにてメンタリングスタートします。
            </p>
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

.icon-container {
  position: relative;
}

.floating-number {
    position: absolute;
    top: -1.5rem;
    left: auto;
    font-size: 1.3rem;
    font-weight: 900;
    color: #09a4b8;

    & + img {
      width: 8rem;
      height: 8rem;
    }
}
</style>

