<template>
  <header>
    <section class="relative">
      <div class="container">
        <div
          class="
            lg:grid
            grid-cols-12
            flex
            justify-between
            lg:gap-12
            xl:gap-32
            relative
          "
        >
          <div
            class="
              xl:col-span-7
              lg:col-span-8
              flex
              items-center
              xl:justify-between
              space-x-16
              text-gray-600
              py-12
            "
          >
            <nuxt-link :to="localePath('/')">
              <JIcon
                name="logo"
                class="w-[60px]"
              />
            </nuxt-link>
            <nuxt-link
              :to="localePath('/')"
              class="
                hidden
                lg:block
                text-gray-600
                cursor-pointer
                body-text-bold
                border-b border-white
              "
            >
              {{ $t('home.header.home') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('story')"
              class="
                hidden
                lg:block
                text-gray-600
                cursor-pointer
                body-text-bold
                border-b border-white
              "
            >
              {{ $t('home.header.story') }}
            </nuxt-link>

            <div class="par-menu">
              <nuxt-link
                :to="
                  localePath({
                    name: 'products',
                  })
                "
                class="
                  hidden
                  lg:block
                  text-gray-600
                  cursor-pointer
                  body-text-bold
                  border-b border-white
                "
              >
                {{ $t('home.header.product') }}
              </nuxt-link>
              <div
                class="
                  absolute
                  lg:w-[80%]
                  z-10
                  container
                  border-0
                  right-0
                  top-full
                  sub-menu
                "
              >
                <div
                  class="
                    bg-white
                    col-start-3 col-span-10
                    px-64
                    py-32
                    border border-gray-300
                  "
                >
                  <div class="flex">
                    <ul class="space-y-16 w-2/5">
                      <li v-for="(item, index) in products" :key="index">
                        <nuxtLink
                          :to="
                            localePath({
                              name: `products-slug`,
                              params: {
                                slug: item.slug,
                              },
                              hash: `#${item.slug}`,
                            })
                          "
                        >
                          <span
                            :class="
                              active.title === item.title
                                ? 'text-primary-accent border-primary-accent'
                                : 'text-blue-200'
                            "
                            @mouseover="changeAtive(item.title, item.image)"
                            class="
                              sub-text
                              cursor-pointer
                              border-white border-b
                            "
                          >
                            {{ item.title }}
                          </span>
                        </nuxtLink>
                      </li>
                    </ul>
                    <div class="aspect-w-6 aspect-h-1 flex-auto">
                      <JPicture
                        class="w-full h-full pl-56 picture-cover"
                        :src="active.imageCurrent"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nuxt-link
              :to="localePath('event')"
              class="
                hidden
                lg:block
                text-gray-600
                cursor-pointer
                body-text-bold
                border-b border-white
              "
            >
              {{ $t('home.header.event') }}
            </nuxt-link>
            <nuxt-link
              class="
                hidden
                lg:block
                text-gray-600
                cursor-pointer
                body-text-bold
                border-b border-white
              "
              :to="localePath('recruitment')"
            >
              {{ $t('home.header.career-opportunities') }}
            </nuxt-link>
          </div>
          <div
            class="
              xl:col-span-5
              lg:col-span-4
              ml-auto
              flex
              justify-around
              items-center
              xl:space-x-32
              lg:space-x-16
            "
          >
            <div
              class="
                lg:flex
                flex-col
                space-y-4
                text-right
                hidden
                py-12
                font-bold
              "
            >
              <a href="tel:(028)22238999"> {{ $t('home.header.phone') }}</a>
              <a href="mailto:rmhealthcare@rm.com.vn">
                {{ $t('home.header.mail') }}</a
              >
            </div>
            <div class="lg:flex hidden items-center space-x-8 font-bold">
              <a
                href="/"
                :class="
                  $route.name.includes('_vi')
                    ? 'text-primary-accent'
                    : 'text-black'
                "
                >VI</a
              >
              <span>|</span>
              <a
                href="/en"
                :class="
                  $route.name.includes('_en')
                    ? 'text-primary-accent'
                    : 'text-black'
                "
                >EN</a
              >
            </div>
            <div
              class="
                xl::pl-24
                lg:pl-16
                py-12
                lg:border-l lg:border-gray-500
                lg:block
                hidden
              "
            >
              <div class="cursor-pointer" @click="openMenuMobile">
                <svg
                  width="44"
                  height="48"
                  viewBox="0 0 44 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.32764 11.9482H36.6388"
                    stroke="#3B3B3B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.32764 23.8965H36.6388"
                    stroke="#3B3B3B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.32764 35.8447H36.6388"
                    stroke="#3B3B3B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <template>
              <div
                v-if="!isOpenMobile"
                class="
                  lg:border-l lg:border-gray-500
                  lg:pl-40
                  py-12
                  lg:hidden
                  block
                "
                @click="isOpenMobile = !isOpenMobile"
              >
                <div class="cursor-pointer">
                  <svg
                    width="44"
                    height="48"
                    viewBox="0 0 44 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.32764 11.9482H36.6388"
                      stroke="#3B3B3B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.32764 23.8965H36.6388"
                      stroke="#3B3B3B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.32764 35.8447H36.6388"
                      stroke="#3B3B3B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div v-else @click="isOpenMobile = false"><close /></div>
            </template>
          </div>
        </div>
      </div>
      <div
        class="
          absolute
          left-0
          right-0
          w-full
          max-h-400
          bg-white
          transform
          duration-200
          ease-linear
          overflow-hidden
          z-50
          flex
          items-center
        "
        :class="
          isOpenMobile ? 'h-300 border-t border-b border-gray-500' : 'h-0'
        "
      >
        <div class="container py-24">
          <ul class="space-y-24">
            <li>
              <nuxt-link
                :to="localePath('/')"
                class="text-gray-600 body-text uppercase"
              >
                <p @click="isOpenMobile = false">
                  {{ $t('home.header.home') }}
                </p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath('story')"
                class="text-gray-600 body-text uppercase"
              >
                <p @click="isOpenMobile = false">
                  {{ $t('home.header.story') }}
                </p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="
                  localePath({
                    name: 'products',
                  })
                "
                class="text-gray-600 body-text uppercase"
              >
                <p @click="isOpenMobile = false">
                  {{ $t('home.header.product') }}
                </p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath('event')"
                class="text-gray-600 body-text uppercase"
                ><p @click="isOpenMobile = false">
                  {{ $t('home.header.event') }}
                </p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath('recruitment')"
                class="text-gray-600 body-text uppercase"
                ><p @click="isOpenMobile = false">
                  {{ $t('home.header.career-opportunities') }}
                </p>
              </nuxt-link>
            </li>
            <li>
              <div class="flex items-center space-x-8">
                <a
                  href="/"
                  :class="
                    $route.name.includes('_vi')
                      ? 'text-primary-accent'
                      : 'text-black'
                  "
                  >VI
                  </a>
                <span>|</span>
                <a
                  href="/en"
                  :class="
                    $route.name.includes('_en')
                      ? 'text-primary-accent'
                      : 'text-black'
                  "
                  >EN
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- header -->
    <section
      class="
        header
        z-30
        fixed
        left-0
        right-0
        transform
        duration-1000
        ease-in-out
        bg-white
      "
      :class="lastPosition > 600 ? 'top-0' : '-top-full'"
    >
      <div class="container">
        <div
          class="
            lg:grid
            grid-cols-12
            flex
            justify-between
            lg:gap-12
            xl:gap-32
            relative
          "
        >
          <div
            class="
              xl:col-span-7
              lg:col-span-8
              flex
              items-center
              xl:justify-between
              space-x-16
              text-gray-600
              py-12
            "
          >
            <nuxt-link :to="localePath('/')">
              <JIcon
                name="logo"
                class="w-[60px]"
              />
            </nuxt-link>
            <nuxt-link
              :to="localePath('/')"
              class="
                hidden
                lg:block
                text-gray-600
                cursor-pointer
                body-text-bold
                border-b border-white
              "
            >
              {{ $t('home.header.home') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('story')"
              class="
                hidden
                lg:block
                text-gray-600
                cursor-pointer
                body-text-bold
                border-b border-white
              "
            >
              {{ $t('home.header.story') }}
            </nuxt-link>

            <div class="par-menu">
              <nuxt-link
                :to="
                  localePath({
                    name: 'products',
                  })
                "
                class="
                  hidden
                  lg:block
                  text-gray-600
                  cursor-pointer
                  body-text-bold
                  border-b border-white
                "
              >
                {{ $t('home.header.product') }}
              </nuxt-link>
              <div
                class="
                  absolute
                  lg:w-[80%]
                  z-10
                  container
                  border-0
                  right-0
                  top-full
                  sub-menu
                "
              >
                <div
                  class="
                    bg-white
                    col-start-3 col-span-10
                    px-64
                    py-32
                    border border-gray-300
                  "
                >
                  <div class="flex">
                    <ul class="space-y-16 w-2/5">
                      <li v-for="(item, index) in products" :key="index">
                        <nuxtLink
                          :to="
                            localePath({
                              name: `products-slug`,
                              params: {
                                slug: item.slug,
                              },
                              hash: `#${item.slug}`,
                            })
                          "
                        >
                          <span
                            :class="
                              active.title === item.title
                                ? 'text-primary-accent border-primary-accent'
                                : 'text-blue-200'
                            "
                            @mouseover="changeAtive(item.title, item.image)"
                            class="
                              sub-text
                              cursor-pointer
                              border-white border-b
                            "
                          >
                            {{ item.title }}
                          </span>
                        </nuxtLink>
                      </li>
                    </ul>
                    <div class="aspect-w-6 aspect-h-1 flex-auto">
                      <JPicture
                        class="w-full h-full pl-56"
                        :src="active.imageCurrent"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nuxt-link
              :to="localePath('event')"
              class="
                hidden
                lg:block
                text-gray-600
                cursor-pointer
                body-text-bold
                border-b border-white
              "
            >
              {{ $t('home.header.event') }}
            </nuxt-link>
            <nuxt-link
              class="
                hidden
                lg:block
                text-gray-600
                cursor-pointer
                body-text-bold
                border-b border-white
              "
              :to="localePath('recruitment')"
            >
              {{ $t('home.header.career-opportunities') }}
            </nuxt-link>
          </div>
          <div
            class="
              xl:col-span-5
              lg:col-span-4
              ml-auto
              flex
              justify-around
              items-center
              xl:space-x-32
              lg:space-x-16
            "
          >
            <div
              class="
                lg:flex
                flex-col
                space-y-4
                text-right
                hidden
                py-12
                font-bold
              "
            >
              <a href="tel:(028)22238999"> {{ $t('home.header.phone') }}</a>
              <a href="mailto:rmhealthcare@rm.com.vn">
                {{ $t('home.header.mail') }}
              </a>
            </div>
            <div class="lg:flex hidden items-center space-x-8 font-bold">
              <a
                href="/"
                :class="
                  $route.name.includes('_vi')
                    ? 'text-primary-accent'
                    : 'text-black'
                "
                >VI
              </a>
              <span>|</span>
              <a
                href="/en"
                :class="
                  $route.name.includes('_en')
                    ? 'text-primary-accent'
                    : 'text-black'
                "
                >EN
              </a>
            </div>
            <div
              class="
                xl::pl-24
                lg:pl-16
                py-12
                lg:border-l lg:border-gray-500
                lg:block
                hidden
              "
            >
              <div class="cursor-pointer" @click="openMenuMobile">
                <svg
                  width="44"
                  height="48"
                  viewBox="0 0 44 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.32764 11.9482H36.6388"
                    stroke="#3B3B3B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.32764 23.8965H36.6388"
                    stroke="#3B3B3B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.32764 35.8447H36.6388"
                    stroke="#3B3B3B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <template>
              <div
                v-if="!isOpenMobile"
                class="
                  lg:border-l lg:border-gray-500
                  lg:pl-40
                  py-12
                  lg:hidden
                  block
                "
                @click="isOpenMobile = !isOpenMobile"
              >
                <div class="cursor-pointer">
                  <svg
                    width="44"
                    height="48"
                    viewBox="0 0 44 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.32764 11.9482H36.6388"
                      stroke="#3B3B3B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.32764 23.8965H36.6388"
                      stroke="#3B3B3B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.32764 35.8447H36.6388"
                      stroke="#3B3B3B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div v-else @click="isOpenMobile = false"><close /></div>
            </template>
          </div>
        </div>
      </div>
      <div
        class="
          absolute
          z-50
          left-0
          right-0
          w-full
          max-h-400
          bg-white
          transform
          duration-200
          ease-linear
          overflow-hidden
          z-50
          flex
          items-center
          border-t border-gray-500
        "
        :class="isOpenMobile ? 'h-300 border-b border-gray-500' : 'h-0'"
      >
        <div class="container">
          <ul class="space-y-24 py-24">
            <li>
              <nuxt-link
                :to="localePath('/')"
                @click="closeMegaMenuMobile()"
                class="text-gray-600 body-text uppercase active-mobile"
              >
                {{ $t('home.header.home') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                @click="closeMegaMenuMobile()"
                :to="localePath('story')"
                class="text-gray-600 body-text uppercase"
              >
                {{ $t('home.header.story') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="
                  localePath({
                    name: 'products-slug',
                    params: { slug: 'ki-sinh-trung' },
                  })
                "
                class="text-gray-600 body-text uppercase"
              >
                {{ $t('home.header.product') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath('event')"
                class="text-gray-600 body-text uppercase"
              >
                {{ $t('home.header.event') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath('recruitment')"
                class="text-gray-600 body-text uppercase"
              >
                {{ $t('home.header.career-opportunities') }}
              </nuxt-link>
            </li>
            <li>
              <div class="flex items-center space-x-8">
                <a
                  href="/"
                  :class="
                    $route.name.includes('_vi')
                      ? 'text-primary-accent'
                      : 'text-black'
                  "
                  >VI
                </a>
                <span>|</span>
                <a
                  href="/en"
                  :class="
                    $route.name.includes('_en')
                      ? 'text-primary-accent'
                      : 'text-black'
                  "
                  >EN
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- tab right  -->
    <section>
      <div
        @click="openMenuMobile"
        :class="[
          isOpen
            ? ' fixed z-40 top-0 bottom-0 bg-gray-600 opacity-50 w-screen h-screen'
            : '',
        ]"
      ></div>
      <div
        :class="[isOpen ? ' translate-x-0' : 'translate-x-full']"
        class="
          fixed
          z-50
          bottom-0
          duration-200
          ease-in-out
          transform
          right-0
          top-0
          bg-white
          h-[100vh]
          lg:overflow-y-auto
          w-full
          lg:w-[35vw]
        "
      >
        <div>
          <div
            class="flex justify-end cursor-pointer mt-32 mr-40"
            @click="openMenuMobile"
          >
            <close />
          </div>
          <div class="xl:pl-48 px-24 xl:pr-90 xl:pb-72">
            <div class="flex items-center justify-center">
              <div class="w-[127px] h-[127px]">
                <JPicture
                  src="/images/home/logo-tab.png"
                  alt="logo healthcare"
                />
              </div>
            </div>
            <div class="space-y-32 lg:mt-48 mt-24">
              <div class="flex flex-col">
                <a href="tel:(028)22238999" class="body-text-medium">
                  + (028) 222 38 999
                </a>
                <a
                  class="body-text-medium text-primary-accent"
                  href="mailto:rmhealthcare@rm.com.vn"
                >
                  {{ $t('home.tab.mail') }}
                </a>
              </div>
              <div class="flex flex-col space-y-20">
                <p class="body-text-medium text-gray-600">
                  {{ $t('home.header.time') }}
                </p>
                <div class="space-y-10">
                  <p class="sub-text font-then text-gray-600">
                    {{ $t('home.header.schedule') }}
                  </p>
                  <p class="sub-tex font-thent text-gray-600">
                    {{ $t('home.tab.schedule') }}
                  </p>
                </div>
              </div>
              <div class="flex flex-col space-y-8 text-gray-600">
                <p class="body-text-medium text-gray-600">
                  {{ $t('home.tab.address-title') }}
                </p>
                <a
                  class="address lg:text-justify"
                  href="https://goo.gl/maps/L7G4wyCVhBHWw9P9A"
                >
                  {{ $t('home.tab.address-one') }}
                </a>
                <a
                  class="address lg:text-justify"
                  href="https://goo.gl/maps/iX5CHUwjFMFtsCTf9"
                >
                  {{ $t('home.tab.address-two') }}
                </a>
                <a
                  class="address lg:text-justify"
                  href="https://goo.gl/maps/ga5aSwL78kkoLkWH8"
                >
                  {{ $t('home.tab.address-three') }}
                </a>
              </div>
              <div class="flex items-center space-x-20 text-gray-600">
                <a href="" class="hover:text-primary-accent" target="_blank">
                  <face
                /></a>
                <a href="" class="hover:text-primary-accent" target="_blank">
                  <mess
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <JPicture
            src="/images/home/drug-banner.png"
            class="w-full"
            alt="drug"
          />
          <div class="imglianer"></div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
import close from './icon/close.vue'
import face from './icon/face.vue'
import instagram from './icon/instagram.vue'
import mess from './icon/mess.vue'
export default {
  components: { face, mess, instagram, close },
  async fetch() {
    const locale = this.$nuxt.$i18n.locale
    const data = await this.$nuxt.$content(`${locale}/product_group`).fetch()
    this.products = data

    this.active = {
      imageCurrent: this.products[0].image,
      title: this.products[0].title,
    }
  },
  data() {
    return {
      active: {
        imageCurrent: '',
        title: '',
      },
      products: [],
      isOpen: false,
      limitPosition: 500,
      isOpenMobile: false,
      lastPosition: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    openMenuMobile() {
      this.isOpen = !this.isOpen
      document.body.style.overflowY = this.isOpen ? 'hidden' : null
    },

    changeAtive(title, img) {
      this.active = {
        imageCurrent: img,
        title: title,
      }
    },

    handleScroll() {
      this.lastPosition = window.scrollY
      if (this.lastPosition != 600) {
        this.isOpenMobile = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.address {
  @apply font-display font-light text-16 leading-[24px];
}

.imglianer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
}

.header {
  @apply w-full transform duration-300 ease-in-out;
  border-bottom: 1px solid #dfe2e0;
}
.par-menu {
  .sub-menu {
    visibility: hidden;
    opacity: 0;
    z-index: 99;
    transform: translateY(20%);
    transition: all ease-in-out 0.3s;
  }
  &:hover {
    .sub-menu {
      transform: translateY(0%);

      visibility: visible;
      opacity: 1;

      &:before {
        content: '';
        height: 2.5rem;
        top: -2.2rem;
        left: 0;
        right: 0;
        position: absolute;
      }
    }
  }
}

@keyframes moveDown {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0%);
  }
}
.nuxt-link-exact-active {
  @apply text-primary-accent-button;
  @screen md {
    @apply border-primary-accent text-primary-accent;
  }
}
</style>
