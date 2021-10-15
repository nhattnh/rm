<template>
  <main>
    <Banner :banner="banner" />
    <section>
      <div class="container mt-64 mb-64 lg:mt-128 lg:mb-200">
        <div class="">
          <div
            class="pt-85 -mt-54"
            v-for="(item, key) in listCategory"
            :key="key"
            :id="item.slug"
          >
            <nuxtLink
              :to="
                localePath({
                  name: 'products-slug',
                  params: { slug: item.slug },
                  hash: `#${item.slug}`,
                })
              "
            >
              <div :id="item.title" class="relative cursor-pointer group group">
                <div class="aspect-w-4 aspect-h-1">
                  <JPicture
                    class="picture-cover"
                    :src="item.image"
                    :alt="item.title"
                  />
                </div>
                <div
                  class="
                    absolute
                    transform
                    -translate-y-1/2
                    top-1/2
                    left-12
                    lg:left-60
                  "
                >
                  <h2
                    class="
                      uppercase
                      title
                      text-primary-gray
                      group-hover:text-white
                    "
                    v-html="item.title"
                  ></h2>
                </div>
              </div>
              <transition name="component-fade">
                <div
                  v-if="$route.params.slug === item.slug"
                  class="grid grid-cols-4 mt-32 md:gap-32"
                >
                  <ProductCard
                    class="lg:col-span-1 md:col-span-2 col-span-2"
                    v-for="(sub, index) in products"
                    :key="index"
                    :item="sub"
                  />
                </div>
              </transition>
            </nuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  transition: 'home',
  async asyncData({ $content, app, params }) {
    const listCategory = await $content(
      `${app.i18n.locale}/product_group`
    ).fetch()

    const product = await $content(`${app.i18n.locale}/product`).fetch()

    return {
      listCategory,
      product,
    }
  },
  mounted() {
    var item
    for (let i in this.listCategory) {
      if (this.listCategory[i].slug === this.$route.params.slug) {
        item = this.listCategory[i]
      }
    }

    for (let i in this.product) {
      if (this.product[i].group === item.title) {
        this.products.push(this.product[i])
      }
    }
  },

  data() {
    return {
      products: [],
      expandedGroup: [],
      banner: {
        image: '/images/product/product-banner.png',
        title: this.$t('products.title'),
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
.title {
  @apply text-18 font-semibold font-display;
  line-height: 120%;
  @screen md {
    @apply text-56 font-semibold font-display;
    line-height: 120%;
  }
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
