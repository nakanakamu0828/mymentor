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
          <h3 class="menu__label"> Contents</h3>
          <ul class="menu-list">
            <li>
              <router-link to="/">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/policy/privacy">
                プライバシーポリシー
              </router-link>
            </li>
            <li>
              <router-link to="/term">
                利用規約
              </router-link>
            </li>
            <li>
              <router-link to="/law">
                特定商取引法に基づく表記
              </router-link>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                @click="$store.dispatch('contact/toggleContactModal')"
              >
                問い合わせ
              </a>
            </li>
          </ul>
        </div>
        <div class="column is-3">
          <h3 class="menu__label"> About me</h3>
          <ul class="menu-list">
            <li> <a href="https://nakamu.life" target="_blank" title="Nakamu on Profile">運営者</a> </li>
            <li> <a href="https://blog.nakamu.life" target="_blank" title="Nakamu on Blog">運営者ブログ</a> </li>
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
