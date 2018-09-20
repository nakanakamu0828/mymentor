<template>
    <div class="box">
        <div class="columns">
            <div class="column is-3">
                <picture class="image">
                    <img :src="sku.product.images[0]" :alt="sku.product.name">
                </picture>
            </div>
            <div class="column">
                <div class="content">
                    <h2 class="title is-4 m-b-20" v-text="sku.product.name"></h2>
                    <p>
                        <strong v-text="sku.attributes.period"></strong><br>
                        <span class="sr-only">価格</span>
                        <strong class="is-size-3">{{ priceFormat(sku.price, sku.currency) }}</strong>
                        <a
                            class="button is-danger is-circle is-outlined is-pulled-right"
                            href="javascript:void(0)"
                            @click="removeItem(sku)"
                        >
                            <i class="fas fa-times"></i>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('cart')

export default {
  props: [
      'product',
      'sku'
  ],
  methods: {
    ...mapActions(['removeItem']),
    priceFormat: function (price, currency = 'JPY') {
      const formatter = new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: currency
      });
      return formatter.format(price);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>