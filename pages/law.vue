<template>
  <main>
    <nav class="breadcrumb is-bg-white has-succeeds-separator has-shadow" aria-label="breadcrumbs">
      <div class="container">
        <ul>
            <li>
                <router-link to="/">
                  HOME
                </router-link>
            </li>
            <li class="is-active">
                <a href="#" aria-current="page">特定商取引法に基づく表記</a>
            </li>
        </ul>
      </div>
    </nav>

    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <div class="card article">
                        <div class="card-content">
                            <div class="has-text-centered m-b-30">
                                <h2 class="title is-underline font-quicksand">Law</h2>
                                <p class="subtitle has-text-grey is-6">特定商取引法に基づく表記</p>
                            </div>

                            <table class="table is-bordered is-narrow is-hoverable is-fullwidth">
                                <tbody>
                                    <tr>
                                        <th>ウェブサービス提供者</th>
                                        <td>中村 有貴（SHIEN株式会社代表取締役）</td>
                                    </tr>
                                    <tr>
                                        <th>所在地</th>
                                        <td>〒100-0005 東京都千代田区丸の内2-3-2 郵船ビルディング1階</td>
                                    </tr>
                                    <tr>
                                        <th>お支払方法</th>
                                        <td>クレジットカードによるお支払いが可能です</td>
                                    </tr>
                                    <tr>
                                        <th>販売価格</th>
                                        <td>プランごとに表示された金額と致します（表示価格は消費税込みの金額です）。</td>
                                    </tr>
                                    <tr>
                                        <th>返品・交換・キャンセル等</th>
                                        <td>購入後のキャンセルはできません。ただし、支払済のプランに記載された内容が、メンターの都合によって提供されなかった場合、速やかに事実関係を調査した上で返金いたします。</td>
                                    </tr>
                                    <tr>
                                        <th>中途解約について</th>
                                        <td>月の途中の解約となった場合も１ヶ月分の料金が発生し、 日割清算等による返金を含めた一切の返金は行われません。</td>
                                    </tr>
                                </tbody>
                            </table>                        

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </main>
</template>

<script>
export default {
    head () {
        return {
            title: this.title,
            titleTemplate: '%s',
            meta: [
                { name: 'description', content: this.description },

                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: this.person ? this.person.fields.twitter : '' },
                { name: 'twitter:creator', content: this.person ? this.person.fields.twitter : '' },
                { name: 'twitter:image', content: 'https://images.ctfassets.net/httuqftbm1yv/6A64KKKMmsY2W82Wgy082S/116a0e43794cbd6a00556c20c6131203/nakamu_blog_banner.png?w=1000&h=562&fit=fill' },
                { name: 'twitter:title', content: this.title },
                { name: 'twitter:description', content: this.description },

                { name: 'og:title', content: this.title },
                { name: 'og:description', content: this.description },
            ]
        }
    },
    data () {
        return {
            title: 'なかむ🇭🇰エンジニアブログ | 自由な場所でエンジニアとして生きていくためのメディア',
            description: '香港在住のWebデベロッパー「なかむ」が今ままでのエンジニア経験を元にした技術ブログまとめます。',
        }
    },
}
</script>

<style lang="scss" scoped>
table.table {
    & > tbody > tr {
        & > th {
            background: #f4f4f4;
            padding: .4rem;
            width: 30%;
        }
        & > td {
            padding: .4rem;
        }
    }
}

@media screen and (max-width: 769px) {
    table.table {
        & > tbody > tr {
            &:first-child > th {
                border-top: 1px solid #ddd;
            }
            & > th, & > td  {
                width: 100%;
                display: block;
                border-top: none;
            }
        }
    }
}
</style>