<template>
    <div class="card is-radius">
        <div class="card-image">
        <figure class="image is-4by3">
            <img :src="product.metadata.image" :alt="product.name">
        </figure>
        </div>
        <div class="card-content">
        <p class="title is-4 m-b-5" v-text="product.name"></p>
        <div class="m-b-20">
            <span class="tag is-danger">Laravel</span>
        </div>
        <div class="content" v-html="product.metadata.description"></div>

        <div class="media">
            <div class="media-content">
                ¥1,000
            </div>
            <div class="media-right">
            <button aria-label="Add to cart" class="button is-large add is-primary is-circle is-pulled-right">
                <i data-v-28cc1e40="" class="fa fa-cart-plus fa-stack-1x fa-inverse"></i>
            </button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['product']
};
</script>

<style lang="scss" scoped>
</style>