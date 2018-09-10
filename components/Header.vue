<template>
  <nav class="navbar is-fixed-top has-shadow">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item is-block">
          <div class="font-leckerli-one navbar-brand__title">
            Nakamu Mentor
          </div>
          <div class="subtitle is-size-7">初心者のプログラムをサポートしています</div>
        </router-link>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  data: () => ({
    drawer: false,
    scrollY: 0,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>