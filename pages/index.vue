<template>
  <main>
    <section id="introduction" class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-half">
              <h1 class="title is-1 m-b-40 has-text-dark">
                <div class="font-leckerli-one m-b-10">
                  Nakamu <span class="has-text-primary">Mentor</span>
                </div>
                <p class="is-size-4">
                  プログラマミングをサポートしていきます
                </p>
              </h1>
              <p class="subtitle">
                <span class="shadow is-primary">Webデベロッパー</span>/
                <span class="shadow is-danger">Laravel デベロッパー</span>/
                <span class="shadow is-warning">Rails デベロッパー</span>/
                <span class="shadow is-success">Codeメンター</span>

                として活動しています。<br>
                今ままでの開発経験を生かして、プログラミング初学者に向けメンターをしてきます。
                本サイトでは私が提供できるメンタープランの紹介と契約を行うことができます。
              </p>
            </div>
            <div class="column is-half">
              <img src="~/assets/img/top-image-business.jpg">
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
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
            <p class="subtitle has-text-centered is-6 m-b-20">
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
            <p class="subtitle has-text-centered is-6 m-b-20">
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
            <p class="subtitle has-text-centered is-6 m-b-20">
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
                    @click="$store.dispatch('contact/toggleContactModal')"
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

const initData = async ({ app, params }) => {
    let products = await app.$axios.$get('/products');
    return {
      products: products,
    }
}

export default {
  async asyncData (context) {
    if (process.browser) {
      return {
        products: []
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
    CardServiceProduct,
    CardGoodProduct,
  }
}
</script>

<style lang="scss" scoped>
#introduction {
  .subtitle {
    line-height: 1.5;
  }
}


.is-primary--light {
  background-color: #EEF5FF;
}

.icon-container {
  position: relative;
}

.floating-number {
    position: absolute;
    top: -1.5rem;
    left: 4.5rem;
    font-size: 1.3rem;
    font-weight: 900;
    color: #09a4b8;

    & + img {
      width: 8rem;
      height: 8rem;
    }
}

@media screen and (min-width: 769px) {
  h1.title {
    font-size: 2.5rem;
  }
}
</style>

