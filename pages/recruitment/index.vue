<template>
  <main>
    <Banner :banner="banner" />

    <section class="mt-64 md:mt-128">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-16">
          <div
            class="col-span-1 bg-primary-accent px-24 py-48 md:py-90 md:px-80"
          >
            <JIcon name="quote" class="mb-32"/>
            <div
              class="h3 text-white"
              v-html="$t('recruitment.section-1')"
            ></div>
          </div>
          <div class="col-span-1">
            <JPicture
              src="/images/recruitment/team.png"
              alt="prescriptions"
              class="picture-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="my-64 md:my-128">
      <div class="container">
        <div class="grid grid-cols-12 md:gap-x-32 gap-y-56">
          <div class="col-span-12">
            <h2
              class="h2 text-left md:text-center text-blue-200"
              v-html="$t('recruitment.section-2.title')"
            ></h2>
          </div>
          <template v-for="(item, index) in reason">
            <div class="col-span-12 md:col-span-4" :key="index">
              <div
                class="body-text text-primary-accent mb-8"
                v-html="item.text"
              ></div>
              <div class="h4 text-blue-200" v-html="item.title"></div>
              <div
                class="w-80 mt-12 mb-20 border bg-gray-700 border-gray-700"
              ></div>

              <div
                class="body-text text-blue-200 md:text-justify"
                v-html="item.description"
              ></div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <section class="bg-primary-light pt-64 pb-64 md:pb-128">
      <div class="container">
        <div class="grid grid-cols-12">
          <div class="col-span-10 col-start-2">
            <h2
              class="h2 mb-24 text-blue-200"
              v-html="$t('recruitment.section-3.title')"
            ></h2>
            <div
              class="h4"
              v-html="$t('recruitment.section-3.description')"
            ></div>
            <div class="mt-40">
              <div
                class="
                  grid-cols-9
                  border-b
                  py-20
                  border-opacity-10 border-black
                  md:grid
                  hidden
                "
              >
                <div
                  class="col-span-4 h4"
                  v-html="$t('recruitment.section-3.created')"
                ></div>
                <div
                  class="col-span-3 h4"
                  v-html="$t('recruitment.section-3.position')"
                ></div>
              </div>
              <template v-for="(rec, index) in recruitment">
                <div
                  class="
                    grid-cols-9
                    border-b
                    py-20
                    border-opacity-10 border-black
                    hidden
                    md:grid
                  "
                  :key="index"
                >
                  <div class="col-span-4 h5 text-table">
                    {{ format(rec.createdAt) }}
                  </div>
                  <div class="col-span-2 md:col-span-3 h5 text-table">
                    {{ rec.name }}
                  </div>
                  <div
                    class="
                      col-span-3
                      md:col-span-2
                      h5
                      text-table text-primary-accent
                      hover:text-red
                    "
                  >
                    <NuxtLink
                      :to="
                        localePath({
                          name: 'recruitment-slug',
                          params: { slug: rec.slug },
                        })
                      "
                      class="border-b border-primary-accent"
                      v-html="$t('recruitment.section-3.cv')"
                    ></NuxtLink>
                  </div>
                </div>
                <div class="block md:hidden" :key="index">
                  <div
                    class="
                      flex flex-wrap
                      justify-between
                      items-center
                      border-b
                      py-20
                      border-opacity-10 border-black
                    "
                  >
                    <div class="">
                      <div class="h5">
                        {{ $t('recruitment.section-3.created') }}:
                        {{ format(rec.createdAt) }}
                      </div>
                      <div class="text-table">
                        {{ $t('recruitment.section-3.position') }}:
                        {{ rec.name }}
                      </div>
                    </div>
                    <div class="text-table text-primary-accent">
                      <NuxtLink
                        :to="
                          localePath({
                            name: 'recruitment-slug',
                            params: { slug: rec.slug },
                          })
                        "
                        class="border-b border-primary-accent"
                        v-html="$t('recruitment.section-3.cv')"
                      ></NuxtLink>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="relative">
        <div class="absolute w-full h-full top-0 left-0 -z-10">
          <JPicture
            src="/images/recruitment/image-2.jpg"
            class="h-full w-full"
            alt="gia nhập RM HEALTHCARE"
          />
        </div>
        <div class="flex items-center justify-center py-32 xl:py-64">
          <div class="container grid grid-cols-12">
            <div
              class="
                col-span-12
                md:col-span-10 md:col-start-2
                xl:col-span-8 xl:col-start-3
              "
            >
              <h2
                class="
                  text-center
                  h3
                  col-span-12
                  bg-primary-accent
                  py-24
                  text-white
                "
                v-html="$t('recruitment.section-4.title')"
              ></h2>
              <div class="p-20 xl:pt-48 xl:px-76 xl:pb-32 bg-white">
                <FormContact />
              </div>
              <hr class="border-t border-white" />
              <div class="p-32 xl:py-48 xl:px-76 bg-gray-400">
                <div class="body-text">
                  {{ $t('recruitment.section-4.quest') }}
                </div>
                <div
                  class="
                    flex
                    lg:flex-row
                    flex-col
                    w-full
                    mt-16
                    space-y-20
                    lg:space-y-0
                  "
                >
                  <a
                    class="flex items-center h4 mr-20 xl:mr-72"
                    href="tel:0026667834"
                  >
                    <JIcon name="phone" class="mr-12"/>
                    <span class="text-then"> (028) 222 38 999</span>
                  </a>
                  <a
                    class="flex items-center h4"
                    href="mailTo:healthcare@gmail.com"
                  >
                    <JIcon name="mail" class="mr-12"/>
                    <span class="text-then">rmhealthcare@rm.com.vn</span>
                  </a>
                </div>
                <div
                  class="body-text italic mt-16"
                  v-html="$t('recruitment.section-4.thanks')"
                ></div>
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
  data() {
    return {
      banner: {
        image: '/images/recruitment/banner.jpg',
        title: this.$t('recruitment.banner'),
      },
      reason: [
        {
          text: this.$t('recruitment.section-2.text-1'),
          title: this.$t('recruitment.section-2.title-1'),
          description: this.$t('recruitment.section-2.description-1'),
        },
        {
          text: this.$t('recruitment.section-2.text-2'),
          title: this.$t('recruitment.section-2.title-2'),
          description: this.$t('recruitment.section-2.description-2'),
        },
        {
          text: this.$t('recruitment.section-2.text-3'),
          title: this.$t('recruitment.section-2.title-3'),
          description: this.$t('recruitment.section-2.description-3'),
        },
      ],
      recruitment: [],
    }
  },
  methods: {
    format(date) {
      let month = new Date(date).getMonth()
      let day = new Date(date).getDate()
      let year = new Date(date).getFullYear()

      return day + '/' + month + '/' + year
    },
  },
  async asyncData({ $content, app }) {
    const recruitment = await $content(`${app.i18n.locale}/recruitment`)
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      recruitment,
    }
  },
}
</script>

<style scoped lang="scss">
.text-table {
  @apply font-then #{!important};
}
.text-then {
  @apply font-then;
}
.text-medium {
  @apply font-medium;
}
.text-semibold {
  @apply font-semibold #{!important};
}
</style>
