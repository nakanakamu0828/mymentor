<template>
    <div class="box">
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
                            v-if="!hasItem(sku.id) && !clicked"
                            class="button is-primary is-large is-circle is-outlined is-pulled-right"
                            href="javascript:void(0)"
                            @click="clicked = true && addItem(sku)"
                        >
                            <i class="fas fa-cart-plus"></i> 
                        </a>
                    </p>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('cart')

export default {
  props: [
      'product',
      'sku'
  ],
  data: () => ({
      clicked: false
  }),
  computed: {
    ...mapGetters([ 'hasItem' ]),
  },
  methods: {
    ...mapActions(['addItem', 'removeItem']),
    priceFormat: function (price, currency = 'JPY') {
      const formatter = new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: currency
      });
      return formatter.format(price);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>