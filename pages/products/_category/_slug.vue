<template>
  <main>
    <section class="container lg:pt-32 pt-64 pb-64">
      <div class="grid grid-cols-12 lg:gap-32 lg:space-y-0 space-y-32">
        <div class="col-span-12 lg:col-span-5">
          <div class="aspect-w-1 aspect-h-1 sticky top-[10px] w-full">
            <JPicture :src="product.image" alt="product" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-7 space-y-40">
          <div class="space-y-24">
            <h1 class="h2 text-blue-200" v-html="product.title"></h1>
            <p class="h5-medium text-blue-200">
              {{ product.summary }}
            </p>
          </div>
          <div class="space-y-24">
            <h2
              class="
                h3
                text-blue-200
                border-b border-gray-300
                relative
                line--left
              "
            >
              {{ $t('products.decription') }}
            </h2>
            <div class="space-y-4">
              <p class="body-text-semibold text-blue-200">
                {{ $t('products.ingredient') }}
              </p>
              <p class="body-text text-blue-200">
                {{ product.ingredient }}
              </p>
            </div>
            <div class="space-y-4">
              <p class="body-text-semibold text-blue-200">
                {{ $t('products.excipients') }}
              </p>

              <p class="body-text text-blue-200">
                {{ product.excipients }}
              </p>
            </div>
            <div class="space-y-4">
              <p class="body-text-semibold text-blue-200">
                {{ $t('products.assign') }}
              </p>

              <p
                class="
                  body-text
                  text-blue-200
                  whitespace-pre-line
                  transform
                  translate-y-[-15px]
                "
              >
                {{ product.assign }}
              </p>
            </div>
            <div class="space-y-4 flex md:flex-row flex-col md:items-center">
              <p class="body-text-semibold text-blue-200 mr-16">
                {{ $t('products.expiry_date') }}:
              </p>

              <p class="body-text text-blue-200">
                {{ product.expiry_date }}
              </p>
            </div>
            <div class="space-y-4 flex md:flex-row flex-col md:items-center">
              <p class="body-text-semibold text-blue-200 mr-16">
                {{ $t('products.pack') }}:
              </p>
              <p class="body-text text-blue-200">
                {{ product.pack }}
              </p>
            </div>
            <div class="space-y-4 flex md:flex-row flex-col md:items-center">
              <p class="body-text-semibold text-blue-200 mr-16">
                {{ $t('products.preservation') }}:
              </p>
              <p class="body-text text-blue-200">
                {{ product.preservation }}
              </p>
            </div>

            <div class="space-y-4 flex md:flex-row flex-col md:items-center">
              <p class="body-text-semibold text-blue-200 mr-16">
                {{ $t('products.brand') }}
              </p>
              <p class="body-text text-blue-200">{{ product.origin }}:</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 mt-64">
        <div class="col-span-12">
          <div class="space-y-24">
            <h2
              class="
                h3
                text-blue-200
                border-b border-gray-300
                relative
                line--left
              "
            >
              {{ $t('products.info') }}
            </h2>

            <div class="space-y-4">
              <p class="body-text-semibold text-blue-200">
                {{ $t('products.amount_use') }}
              </p>
              <p
                class="
                  body-text
                  text-blue-200
                  whitespace-pre-line
                  transform
                  translate-y-[-15px]
                "
              >
                {{ product.amount_use }}
              </p>
            </div>
            <div class="space-y-4">
              <p class="body-text-semibold text-blue-200">
                {{ $t('products.contraindications') }}
              </p>
              <p class="body-text text-blue-200">
                {{ product.contraindications }}
              </p>
            </div>

            <div class="space-y-4">
              <p class="body-text-semibold text-blue-200 mr-16">
                {{ $t('products.careful') }}
              </p>
              <p
                class="
                  body-text
                  text-blue-200
                  whitespace-pre-line
                  transform
                  translate-y-[-25px]
                "
              >
                {{ product.careful }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="border-t border-gray-300">
      <div class="container pt-64 lg:pb-112 pb-64">
        <h2 class="h3 text-blue-200 lg:mb-56 mb-32">
          {{ $t('products.more') }}
        </h2>
        <div class="grid grid-cols-4 gap-32">
          <ProductCard
            class="lg:col-span-1 md:col-span-2 col-span-full"
            v-for="(item, index) in another"
            :key="index"
            :item="item"
          />
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
  async asyncData({ $content, app, params, error }) {
    let product = await $content(`${app.i18n.locale}/product`)
      .where({ slug: params.slug })
      .fetch()
    product = product[0] || error({ statusCode: 404 })

    let another = await $content(`${app.i18n.locale}/product`)
      .where({ slug: { $ne: params.slug } })
      .sortBy('createdAt', 'desc')
      .limit(4)
      .fetch()

    return {
      product,
      another,
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
}
</script>

<style lang="scss" scoped>
.line--left {
  padding-left: 0.75rem;
  &:before {
    content: '';
    @apply absolute left-0 bottom-1/2 top-1/2 transform -translate-y-1/2 bg-primary-accent h-24 w-4;
  }
}
</style>

