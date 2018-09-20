<template>
    <section class="section">
        <BoxProductSku :sku="sku" v-for="(sku, index) in cart" :key="index" />

        <div class="is-clearfix">
            <h3 class="is-size-3 is-pulled-left">合計:  {{ amount }}</h3>
            <button class="button is-success is-large is-rounded is-pulled-right" @click="setActualStep(2)">
              購入へ
            </button>
        </div>
    </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import BoxProductSku from '~/components/Box/Cart/Product/Sku.vue'

const { mapGetters, mapActions } = createNamespacedHelpers('cart')

export default {
  props: [
      'cart',
      'total',
      'amount',
  ],
  methods: {
    ...mapActions(['setActualStep']),
    priceFormat: function (price, currency = 'JPY') {
      const formatter = new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: currency
      });
      return formatter.format(price);
    }
  },
  components: {
    BoxProductSku,
  },
};
</script>

<style lang="scss" scoped>
</style>