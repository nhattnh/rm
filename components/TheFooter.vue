<template>
  <footer>
    <div class="bg-blue-100 lg:pb-120 lg:pt-72 pt-64 pb-64">
      <div class="container grid grid-cols-12 gap-y-32">
        <div class="lg:col-span-2 col-span-12">
          <div class="space-y-44">
            <nuxt-link :to="localePath('index')">
              <div class="w-[134px] h-[135px]">
                <JPicture src="images/home/footer.png" alt="logo footer"/>
              </div>
            </nuxt-link>
            <div class="w-[155px] h-[55px]">
              <JPicture src="/images/home/noti.png" alt="notification"/>
            </div>
          </div>
        </div>
        <div class="lg:col-span-2 md:col-span-6 col-span-12">
          <h2 class="h6 text-white font-bold">
            {{ $t('home.footer.fast-access') }}
          </h2>
          <ul class="space-y-20 mt-32">
            <li class="body-text-linehight-150 text-white">
              <nuxt-link
                class="hover:text-primary-accent"
                :to="localePath('index')"
              >
                {{ $t('home.footer.home') }}</nuxt-link
              >
            </li>
            <li class="body-text-linehight-150 text-white">
              <nuxt-link
                class="hover:text-primary-accent"
                :to="localePath('story')"
                >{{ $t('home.footer.story') }}</nuxt-link
              >
            </li>
            <li class="body-text-linehight-150 text-white">
              <nuxt-link
                class="hover:text-primary-accent"
                :to="localePath('products')"
              >
                {{ $t('home.footer.product') }}</nuxt-link
              >
            </li>
            <li class="body-text-linehight-150 text-white">
              <nuxt-link
                class="hover:text-primary-accent"
                :to="localePath('event')"
              >
                {{ $t('home.footer.event') }}</nuxt-link
              >
            </li>
            <li class="body-text-linehight-150 text-white">
              <nuxt-link
                class="hover:text-primary-accent"
                :to="localePath('recruitment')"
                >{{ $t('home.footer.opportunity') }}</nuxt-link
              >
            </li>
          </ul>
        </div>

        <div class="col-span-12 md:col-span-6 lg:hidden block">
          <h2
            class="h6 text-white font-bold"
            v-html="$t('home.footer.contact-title')"
          ></h2>
          <ul class="mt-32">
            <li
              class="body-text-linehight-150 text-white"
              v-html="$t('home.footer.contact')"
            ></li>
            <li class="mt-28 mb-36 space-y-20">
              <div
                class="flex items-center space-x-16 cursor-pointer text-white"
              >
                <JIcon name="phoneFooter"/>
                <a href="tel:(028)22238999" class="sub-text"
                  >(028) 222 38 999</a
                >
              </div>

              <div
                class="flex items-center space-x-16 cursor-pointer text-white"
              >
                <JIcon name="mailFooter"/>
                <a
                  href="mailto:rmhealthcare@rm.com.vn"
                  class="sub-text break-all"
                >
                  rmhealthcare@rm.com.vn
                </a>
              </div>
            </li>

            <li class="body-text-linehight-150 text-white flex space-x-20">
              <a href="#">
                <Face />
              </a>
              <a href="#">
                <Mess />
              </a>
              <a href="#">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-5 md:col-span-12 col-span-12">
          <h2
            class="h6 text-white font-bold"
            v-html="$t('home.footer.address-title')"
          ></h2>
          <ul class="space-y-20 mt-32">
            <li>
              <a
                target="_blank"
                class="
                  flex
                  items-start
                  space-x-16
                  cursor-pointer
                  body-text-linehight-150
                  text-white
                "
                href="https://goo.gl/maps/aUPjP2pbwb91AaYK9"
              >
                <JIcon
                  class="pt-[3px]"
                  name="location2"
                  alt="location"
                />
                <span
                  class="body-text-linehight-150"
                  v-html="$t('home.footer.address-one')"
                >
                </span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://goo.gl/maps/iX5CHUwjFMFtsCTf9"
                class="
                  flex
                  items-start
                  space-x-16
                  cursor-pointer
                  body-text-linehight-150
                  text-white
                "
              >
                <JIcon
                  class="pt-[3px]"
                  name="location2"
                  alt="location"
                />
                <span
                  class="body-text-linehight-150"
                  v-html="$t('home.footer.address-two')"
                >
                </span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://goo.gl/maps/yLinhmQ8ejRuByRN8"
                class="
                  flex
                  items-start
                  space-x-16
                  cursor-pointer
                  body-text-linehight-150
                  text-white
                "
              >
                <JIcon
                  class="pt-[3px]"
                  name="location2"
                  alt="location"
                />
                <span
                  class="body-text-linehight-150"
                  v-html="$t('home.footer.address-three')"
                >
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="lg:col-span-3 col-span-12 lg:block hidden">
          <h2
            class="h6 text-white font-bold"
            v-html="$t('home.footer.contact-title')"
          ></h2>
          <ul class="mt-32">
            <li
              class="body-text-linehight-150 text-white"
              v-html="$t('home.footer.contact')"
            ></li>
            <li class="mt-28 mb-36 space-y-20">
              <div
                class="flex items-start space-x-16 cursor-pointer text-white"
              >
                <JIcon name="phoneFooter"/>
                <a href="tel:(028)22238999 " class="sub-text"
                  >(028) 222 38 999
                </a>
              </div>

              <div
                class="flex items-start space-x-16 cursor-pointer text-white"
              >
                <JIcon name="mailFooter"/>
                <a href="mailto:rmhealthcare@rm.com.vn" class="sub-text">
                  rmhealthcare@rm.com.vn
                </a>
              </div>
            </li>
            <li class="body-text-linehight-150 text-white flex space-x-20">
              <a target="_blank" class="hover:text-primary-accent" href="">
                <Face />
              </a>
              <a target="_blank" class="hover:text-primary-accent" href="">
                <Mess />
              </a>
              <a target="_blank" class="hover:text-primary-accent" href="">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-blue-200">
      <div class="container py-32 pb-16">
        <div
          class="
            flex
            lg:flex-row
            flex-col
            text-center
            justify-between
            items-center
            lg:space-y-0
            space-y-8
          "
        >
          <span
            class="lg:tracking-[0.12rem] text-white text-14"
            v-html="$t('home.footer.copyright')"
          >
          </span>
          <a target="_blank" href="https://jamstackvietnam.com/">
            <Jam />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Location from '~/components/icon/location'
import Jam from '~/components/icon/jam'
import Instagram from '~/components/icon/InstagramWhite'
import Mess from '~/components/icon/mess'
import Face from '~/components/icon/face'

export default {
  components: {
    Location,
    Jam,
    Instagram,
    Face,
    Mess,
  },
}
</script>
<style lang="scss" scoped>
.h6 {
  @apply text-24 font-bold;
  line-height: 150%;
}
.body-text-linehight-150 {
  @apply font-light text-16;
  line-height: 150%;
}
.nuxt-link-exact-active {
  @apply text-primary-accent-button;
  @screen md {
    @apply border-primary-accent text-primary-accent;
  }
}
</style>
