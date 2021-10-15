<template>
  <main>
    <Banner :banner="banner" />
    <section>
      <div class="container mt-64 mb-64 lg:mt-128 lg:mb-200">
        <div class="space-y-32">
          <div v-for="(item, key) in listCategory" :key="key" :id="item.slug">
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
                      transform
                      duration-200
                      ease-in-out
                    "
                    v-html="item.title"
                  ></h2>
                </div>
              </div>
            </nuxtLink>
          </div>
        </div>
      </div>
    </section>
    <div v-if="getisShowModal.isShowModal && getisShowModal.remember === false">
      <Overlay />
      <PopupModal />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ $content, app, params }) {
    const listCategory = await $content(
      `${app.i18n.locale}/product_group`
    ).fetch()

    return {
      listCategory,
    }
  },
  mounted() {
    if (
      this.getisShowModal.isShowModal === false &&
      this.getisShowModal.remember === false
    ) {
      this.$store.commit('toggleModal', {
        modal: true,
        remember: this.getisShowModal.remember,
      })
    }
  },
  computed: {
    ...mapGetters(['getisShowModal']),
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
  transition: opacity 0.5s ease-in-out;
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
</style>
