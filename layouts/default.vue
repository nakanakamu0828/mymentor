<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer/>
    <ButtonPageTop />
    <ModalContact />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ButtonPageTop from '~/components/Button/PageTop.vue'
import ModalContact from '~/components/Modal/Contact.vue'

export default {
  head () {
      return {
          bodyAttrs: {
              class: 'has-navbar-fixed-top'
          }
      }
  },
  components: {
    Header,
    Footer,
    ButtonPageTop,
    ModalContact,
  }
}
</script>

<style lang="scss" scoped>
</style>

