<template>
  <main>
    <section>
      <Banner :banner="banner" />
    </section>
    <section class="pt-64 md:pt-128 xl:pb-170 md:pb-128 pb-64">
      <div class="container">
        <div
          class="
            flex flex-col
            items-center
            justify-center
            text-white
            img-background
          "
        >
          <div
            class="mb-24 h2 capitalize"
            v-html="$t('story.section-1.title')"
          ></div>
          <div
            class="md:w-2/3 w-11/12 text-left md:text-center h4"
            v-html="$t('story.section-1.text')"
          ></div>
        </div>
      </div>
    </section>
    <section class="relative pb-64 md:pb-128">
      <div class="container">
        <div class="grid grid-cols-12">
          <div class="col-span-12 md:col-span-8">
            <h2
              class="h2 text-blue-200"
              v-html="$t('story.section-2.title')"
            ></h2>
            <p
              class="h4-style mt-24 mb-40 text-blue-200"
              v-html="$t('story.section-2.text')"
            ></p>
          </div>
        </div>
        <div class="grid grid-cols-3 md:gap-x-32 gap-y-32">
          <div class="md:col-span-1 col-span-3">
            <div>
              <JPicture
                class="picture-cover"
                src="images/story/people.png"
                alt="people"
              />
              <p
                class="h4 text-primary-accent mt-24 mb-8"
                v-html="$t('story.section-2.description-1')"
              ></p>
              <p
                class="body-text text-blue-200"
                v-html="$t('story.section-2.sub-1')"
              ></p>
            </div>
          </div>
          <div class="md:col-span-1 col-span-3">
            <div>
              <JPicture
                class="picture-cover"
                src="/images/story/image-32.png"
                alt="image"
              />
              <p
                class="h4 text-primary-accent mt-24 mb-8"
                v-html="$t('story.section-2.description-2')"
              ></p>
              <p
                class="body-text text-blue-200"
                v-html="$t('story.section-2.sub-2')"
              ></p>
            </div>
          </div>
          <div class="md:col-span-1 col-span-3">
            <div>
              <JPicture
                class="picture-cover"
                src="/images/story/develop.png"
                alt="image"
              />
              <p
                class="h4 text-primary-accent mt-24 mb-8"
                v-html="$t('story.section-2.description-3')"
              ></p>
              <p
                class="body-text text-blue-200"
                v-html="$t('story.section-2.sub-3')"
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12"></div>
    </section>
    <section class="pb-64 md:pb-128">
      <div class="container grid xl:grid-cols-12 grid-cols-1 gap-32">
        <div class="col-span-1 xl:col-span-6">
          <div
            class="
              md:border-l-10
              border-l-6 border-primary-accent
              md:px-40
              px-24
              md:py-72
              py-24
              bg-primary-light
              h-full
            "
          >
            <h2 class="h2 mb-24 text-blue-200">
              {{ $t('story.section-3.title') }}
            </h2>
            <div
              class="h4 text-then text-blue-200"
              v-html="$t('story.section-3.text')"
            ></div>
          </div>
        </div>
        <div class="col-span-1 xl:col-span-6">
          <div class="h-full">
            <JPicture
              src="/images/story/develop-grow.png"
              alt="develope"
              class="picture-cover"
            />
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
        image: '/images/story/banner.png',
        title: this.$t('story.banner'),
      },
      projects: [
        {
          image: require('~/assets/images/story/tick.svg'),
          title: this.$t('story.section-2.description-1'),
          text: this.$t('story.section-2.sub-1'),
        },
        {
          image: require('~/assets/images/story/tick.svg'),
          title: this.$t('story.section-2.description-2'),
          text: this.$t('story.section-2.sub-2'),
        },
        {
          image: require('~/assets/images/story/tick.svg'),
          title: this.$t('story.section-2.description-3'),
          text: this.$t('story.section-2.sub-3'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.img-background {
  background-image: url('~assets/images/story/philosophy.jpg');
  @apply bg-cover;
  height: 375px;

  @screen lg {
    height: 430px;
  }
}

.text-then {
  @apply font-then;
}
</style>
