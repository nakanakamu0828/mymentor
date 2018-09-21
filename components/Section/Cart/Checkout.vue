<template>
    <section class="section">
        <div class="columns">
          <div class="column is-offset-3 is-6">
            <div class="box">
              <h2 class="title is-5 has-text-centered">購入者情報を入力してください</h2>

              <form
                    @submit.prevent="beforePay"
                    novalidate
              >
                  <div class="columns">
                      <div class="column is-offset-1 is-10">
                          <div class="field">
                              <label class="label">氏名</label>
                              <div class="control has-icons-left">
                                  <input
                                      class="input"
                                      name="name"
                                      type="text"
                                      v-model="name"
                                      data-vv-as="氏名"
                                      :class="{ 'is-danger': errors.has('name') }"
                                  >
                                  <span class="icon is-small is-left">
                                      <i class="fas fa-user"></i>
                                  </span>
                              </div>
                              <p class="help">氏名はご連絡するときに利用します。本名でなくても問題ありません。</p>
                              <p class="help is-danger" v-if="errors.has('name')">
                                  {{ errors.first('name') }}
                              </p>
                          </div>

                          <div class="field">
                              <label class="label">メールアドレス</label>
                              <div class="control has-icons-left">
                                  <input
                                      class="input"
                                      name="email"
                                      type="email"
                                      v-model="email"
                                      v-validate="'required'"
                                      data-vv-as="メールアドレス"
                                      :class="{ 'is-danger': errors.has('email') }"
                                  >
                                  <span class="icon is-small is-left">
                                      <i class="fas fa-envelope"></i>
                                  </span>
                              </div>
                              <p class="help is-danger" v-if="errors.has('email')">
                                  {{ errors.first('email') }}
                              </p>
                          </div>

                          <div class="field">
                              <label class="label">クレジットカード</label>
                              <div class="control">
                                <Card class='stripe-card'
                                      :class="{ 'complete': isStripeCardCompleted }"
                                      :stripe="stripePublishableKey"
                                      :options='stripeOptions'
                                      @change="setIsStripeCardCompleted($event.complete)"
                                    />
                              </div>
                          </div>

                          <button class="button is-success is-large is-rounded is-fullwidth m-t-50">
                              購入
                          </button>
                      </div>
                  </div>
              </form>

            </div>
          </div>
        </div>

        <div class="is-clearfix">
            <button class="button is-success is-large is-outlined is-rounded is-pulled-left" @click="$store.dispatch('cart/setActualStep', 1)">
              カートへ戻る
            </button>
        </div>
    </section>
</template>

<script>
import { Card } from 'vue-stripe-elements-plus'
import { createNamespacedHelpers } from 'vuex'
import BoxProductSku from '~/components/Box/Cart/Product/Sku.vue'

const { mapActions, mapGetters } = createNamespacedHelpers('checkout')
const STRIPE_URL = process.env.STRIPE_URL

export default {
  props: {
    total: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      name: undefined,
      email: undefined,
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      stripeOptions: {
        hidePostalCode: true
      }
    }
  },
  computed: {
    ...mapGetters(['isStripeCardCompleted', 'status', 'isLoading'])
  },
  methods: {
    ...mapActions([
      'clearCheckout',
      'pay',
      'setIsStripeCardCompleted',
      'setStatus'
    ]),
    async beforePay() {
      const isAllFieldsValid = await this.$validator.validateAll()
      if (!isAllFieldsValid) {
        this.setStatus('failure')
        return
      }

      await this.pay({
        name: this.name,
        email: this.email,
        total: this.total
      })
    }
  },
  components: {
    Card,
    BoxProductSku,
  },
};
</script>

<style lang="scss" scoped>

.stripe-card {
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    font-size: 1rem;
    height: 2.25em;
    background-color: white;
    color: #363636;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(0.375em - 1px);
    padding-left: calc(0.625em - 1px);
    padding-right: calc(0.625em - 1px);
    padding-top: calc(0.375em - 1px);
    position: relative;
    vertical-align: top;
}
.stripe-card.complete {
  border-color: green;
}

</style>