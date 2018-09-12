<template>
    <nuxt-link class="card is-radius" :to="{ name: 'p-id', params: { id: product.id }}">
        <div class="card-image">
            <picture class="image">
                <img :src="product.images[0]" :alt="product.name">
            </picture>
        </div>
        <div class="card-content">
            <p
                :to="{ name: 'p-id', params: { id: product.id }}"
                class="title is-4 m-b-10 is-block"
                v-text="product.name">
            </p>
            <div class="content is-size-7" v-html="product.description"></div>

            <!-- <div class="media" v-if="!product.metadata.price">
                <div class="media-content">
                </div>
                <div class="media-right">
                    <span class="sr-only">価格</span>
                    <strong class="is-size-4">¥{{ product.metadata.price }}</strong>
                </div>
            </div> -->
        </div>
        <!-- <span data-purpose="badge" class="on-course-card badge badge-accented yellow">ベストセラー</span> -->
    </nuxt-link>
</template>

<script>
export default {
  props: ['product']
};
</script>

<style lang="scss" scoped>
.card {
    &:hover {
        transform: scale(1.025);
    }
}

.badge {
    padding: 2px 6px;
    font-size: 10px;
    background-clip: padding-box;
    min-width: 22px;
    border: 2px solid #fff;
    z-index: 1;
    text-shadow: none;
    vertical-align: text-top;

    &.badge-accented {
        border-radius: 3px;
        font-size: .8rem;
        padding: .1rem .6rem;
        background: #f4c150;
        color: #29303b;
        border: none;
        min-width: inherit;
        display: inline-block;
        font-weight: 700;
        line-height: 1.5;
        position: relative;
        text-align: center;

        &.on-course-card {
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            box-shadow: 0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1);
            pointer-events: none;
            position: absolute;
            top: 12px;
            z-index: 1;
        }
    }
}

</style>