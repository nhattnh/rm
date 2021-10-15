<template>
  <main class="relative">
    <h1 class="h1 hidden">{{ $t('home.hero.title1') }}</h1>
    <section class="md:mb-128 mb-64">
      <SlideHome :banners="banners" />
    </section>
    <section class="md:mb-128 mb-64">
      <div class="container grid lg:grid-cols-12 grid-cols-1 ">
        <div class="col-span-1 lg:col-span-7 bg-primary-light md:border-l-10 border-l-6 border-primary-accent ">
          <div
            class="md:p-64 p-32"
          >
            <h2
              class="h2 text-primary-accent mb-40"
              v-html="$t('home.section-1.title')"
            ></h2>
            <div
              class="h4 text-blue-200"
              v-html="$t('home.section-1.text')"
            ></div>
            <div class="w-[261px] h-[128px] my-44">
              <JPicture
              class="picture-cover"
              src="/images/home/signature.png"
              alt="signature"
            />
            </div>
            <nuxt-link
              :to="localePath('story')"
              class="btn btn-primary text-button"
            >
              {{ $t('common.see-more') }}
            </nuxt-link>
          </div>
        </div>
        <div class="lg:col-span-5 col-span-1">
          <JPicture
            src="/images/home/image-1.jpg"
            alt="image-1"
            class="picture-cover w-full h-full"
          />
        </div>
      </div>
    </section>
    <section class="md:mb-128 mb-64">
      <div class="container">
        <div class="text-center md:mb-64 mb-32">
          <h2 class="h2 mb-16 text-blue-200">
            {{ $t('home.section-2.title') }}
          </h2>
          <div class="h4-medium" v-html="$t('home.section-2.text')"></div>
        </div>
        <div class="grid grid-cols-4 gap-x-32 md:gap-y-64 gap-y-48 mb-64">
          <ProductCard
            class="lg:col-span-1 col-span-2"
            v-for="(item, index) in products"
            :key="index"
            :item="item"
          />
        </div>
        <div class="flex justify-center">
          <nuxt-link
            :to="
              localePath({
                name: `products`,
              })
            "
            class="btn btn-primary btn-custom"
          >
            {{ $t('common.see-more') }}
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="bg-primary-light md:py-128 py-64 md:px-90 px-0">
      <div class="container grid xl:grid-cols-12 grid-cols-1 gap-y-48">
        <div class="xl:col-span-5 col-span-1">
          <h2 class="h2 text-blue-200">{{ $t('home.section-3.title') }}</h2>
          <hr class="solid border-primary-gray my-24 lg:w-11/12 w-full" />
          <div class="flex items-center space-x-20">
            <JIcon name="check"/>
            <div class="h4-style">
              {{ $t('home.section-3.description-1') }}
            </div>
          </div>
          <div class="flex items-center space-x-20">
            <JIcon name="check"/>
            <div class="h4-style my-16">
              {{ $t('home.section-3.description-2') }}
            </div>
          </div>
          <div class="flex items-center space-x-20">
            <JIcon name="check"/>
            <div class="h4-style">
              {{ $t('home.section-3.description-3') }}
            </div>
          </div>
        </div>
        <div class="xl:col-span-6 col-span-1 xl:col-start-7 col-start-1">
          <div class="mb-24">
            <JIcon name="quotehome"/>
          </div>
          <div class="h3-style">
            {{ $t('home.section-3.text') }}
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="bg-develope relative flex flex-col justify-center items-center"
      >
        <div
          class="absolute bg-blue-200 opacity-50 top-0 bottom-0 left-0 right-0"
        ></div>
        <div class="absolute text-center">
          <h2
            class="h2 text-white mb-40 text-center"
            v-html="$t('home.section-4.title')"
          ></h2>
          <nuxt-link
            :to="localePath('recruitment')"
            class="btn btn-primary text-button uppercase"
            >{{ $t('common.join-group') }}</nuxt-link
          >
        </div>
      </div>
    </section>
    <section class="md:my-128 mt-64">
      <div class="container">
        <div class="grid grid-cols-12 md:gap-x-32">
          <div class="col-span-12 lg:col-span-4">
            <div class="sticky top-85 w-full">
              <h2
                class="h2 lg:mb-0 mb-32 text-blue-200"
                v-html="$t('home.section-5.title')"
              ></h2>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-8">
            <div class="grid grid-cols-12 md:gap-x-32 gap-y-40">
              <div
                class="
                  flex
                  justify-center
                  items-center
                  col-span-12
                  md:col-span-6
                  lg:col-span-4
                  bg-primary-light
                  p-[70px]
                  relative
                  group
                "
                v-for="(item, index) in partner"
                :key="index"
              >
                <JPicture :src="item.logo" :alt="item.title" />
                <div
                  class="
                    absolute
                    z-10
                    left-0
                    right-0
                    transition-all
                    bottom-0
                    hidden
                    group-hover:block
                    top-0
                    bg-primary-100
                  "
                >
                  <div class="relative w-full h-full">
                    <div
                      class="
                        border-2 border-white
                        bg-primary-accent
                        opacity-100
                        z-40
                        p-[16px]
                        text-white
                        absolute
                        top-14
                        left-14
                        right-14
                        bottom-14
                      "
                    >
                      <p class="section-5">
                        {{ item.title }}
                      </p>
                      <div class="w-40 h-1 bg-white mt-8"></div>
                      <p class="sub-text-leading my-[6px]">
                        {{ item.address }}
                      </p>
                      <p class="sub-text">{{ item.phone }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-primary-light md:py-128 py-64">
        <div class="container">
          <div class="flex justify-between items-center md:mb-48 mb-32">
            <h2 class="h2 text-center col-span-full capitalize text-blue-200">
              {{ $t('home.section-6.title') }}
            </h2>
            <nuxt-link
              :to="localePath('event')"
              class="
                text-primary-accent
                capitalize
                border-b border-primary-accent
                text-button-normal
              "
            >
              Xem thêm
            </nuxt-link>
          </div>
          <swiper class="swiper" :options="swiperOption">
            <CardEvent
              class="col-span-1 swiper-slide"
              v-for="(item, index) in events"
              :key="index"
              :events="item"
            />
          </swiper>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        preloadImages: false,
        spaceBetween: 32,
        slidesPerView: 3,
        lazy: true,
        autoplay: {
          delay: 2500,
        },

        breakpoints: {
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          320: {
            slidesPerView: 1.25,
            spaceBetween: 8,
          },
        },
      },
    }
  },

  async asyncData({ $content, app, params }) {
    const products = await $content(`${app.i18n.locale}/product`)
      .only(['group', 'image', 'title', 'slug', 'order'])
      .sortBy('order', 'asc')
      .limit(8)
      .fetch()
    const banners = await $content(`${app.i18n.locale}/banner`).fetch()

    const events = await $content(`${app.i18n.locale}/blog`)
      .where({ hot: true })
      .fetch()
    const partner = await $content(`${app.i18n.locale}/partner`).fetch()
    return { banners, events, products, partner }
  },
}
</script>

<style lang="scss" scoped>
.bg-homepage {
  background-image: url('~assets/images/home/banner.jpg');
  @apply bg-cover;
  height: 450px;
  @screen sm {
    height: 450px;
  }
  @screen md {
    height: 720px;
  }
  @screen lg {
    height: calc(100vh - 132px);
  }
  @screen xl {
    height: calc(100vh - 132px);
  }
}

.btn-custom {
  @apply text-18 font-then leading-normal #{!important};
}

.bg-develope {
  background-image: url('~assets/images/home/banner-team.jpg');
  @apply bg-cover bg-no-repeat bg-center;
  height: 400px;
  @screen md {
    @apply bg-cover bg-no-repeat bg-fixed bg-center;
    height: 700px;
  }
}

.h3-style {
  @apply text-24 leading-normal text-blue-200;
  @screen md {
    @apply text-32 leading-normal text-blue-200;
  }
}

.section-5 {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
}
.sub-text-leading {
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
}
.text-button-normal {
  font-size: 24px;
  line-height: 100%;
}
.h4-medium {
  font-weight: normal;
  font-size: 24px;
  line-height: 150%;
}
</style>

