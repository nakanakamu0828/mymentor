<template>
  <footer class="footer has-background-white">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column">
          <div class="closure">
            <a href="/" class="is-inline-block" title="Gustav">
              <img src="~assets/img/favicon-256.png" alt="N" width="50">
            </a>
            <p class="m-t-10"> © 2018 Nakamu.life </p>
            <p class="m-t-10">香港在住3年目になるWEBエンジニアのなかむです。 現在は、LaravelやRailsを利用したWEB開発を中心にエンジニアをしています。 顧客は全て日本の企業になります。リモート開発にて各企業様の支援を行なっております。</p>
          </div>
        </div>
        <div class="column is-3">
          <h3 class="menu__label"> About me</h3>
          <ul class="menu-list">
            <li> <a href="https://nakamu.life" target="_blank" title="Nakamu on Profile">Profile</a> </li>
            <li> <a href="https://blog.nakamu.life" target="_blank" title="Nakamu on Blog">Blog</a> </li>
          </ul>
        </div>
        <div class="column is-3">
          <h3 class="menu__label"> Connect </h3>
          <ul class="menu-list">
            <li> <a href="https://twitter.com/nakanakamu0828" target="_blank" title="Nakamu on Twitter">Twitter</a> </li>
            <li> <a href="https://github.com/nakanakamu0828" target="_blank" title="Nakamu on Github">Github</a> </li>
            <li> <a href="https://medium.com/@nakamu" target="_blank" title="Nakamu on Medium">Medium</a> </li>
            <li> <a href="mailto:yuuki.nakamura.0828@gmail.com" target="_blank" title="Nakamu on Email">Email</a> </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  },
};
</script>

<style scoped>
.menu__label {
  font-size: 1.5rem;
}
</style>
