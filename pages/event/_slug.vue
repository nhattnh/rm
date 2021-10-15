<template>
  <main class="mt-48">
    <section class="md:mb-64 mb-32">
      <div class="container grid md:grid-cols-12 grid-cols-1">
        <div class="col-span-full sub-text mb-16">
          {{ format(post.date) || '' }}
        </div>
        <h1
          class="
            md:col-span-full
            lg:col-span-9
            col-span-1
            md:mb-48
            mb-24
            h2
            capitalize
            text-blue-200
          "
        >
          {{ post.title }}
        </h1>
        <div
          class="
            md:col-span-8 md:col-start-4
            col-span-1 col-start-1
            body-text
            lg:text-justify
          "
        >
          {{ post.description }}
        </div>
      </div>
    </section>
    <section class="md:mb-128 mb-64">
      <div
        class="
          container
          grid
          md:grid-cols-12
          grid-cols-1
          gap-x-16
          md:gap-y-36
          gap-y-16
        "
      >
        <div class="col-span-full h3">{{ $t('events.image') }}</div>
        <div
          class="lg:col-span-4 md:col-span-6 col-span-1"
          v-for="(item, index) in post.image_event"
          :key="index"
          :item="item"
        >
          <div class="aspect-w-3 aspect-h-2">
            <JPicture :src="item" alt="event" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-primary-light lg:py-72 py-64 w-full">
        <div
          class="
            container
            grid
            md:grid-cols-12
            grid-cols-1
            md:gap-x-36
            gap-x-0 gap-y-36
            lg:gap-y-0
          "
        >
          <div class="col-span-full h2 md:pb-56 pb-0">
            {{ $t('events.related-events') }}
          </div>
          <CardEvent
            v-for="(item, index) in relatedPosts"
            :key="index"
            :events="item"
            class="lg:col-span-4 md:col-span-6 col-span-1"
          />
        </div>
      </div>
    </section>
    <SocialMeta
      :title="post.title"
      :description="post.description"
      :image="post.image"
    />
  </main>
</template>

<script>
export default {
  methods: {
    format(date) {
      let month = new Date(date).toLocaleString('en-US', { month: 'short' })
      let day = new Date(date).getDate()
      let year = new Date(date).getFullYear()

      return day + ' ' + month + ', ' + year
    },
  },

  async asyncData({ $content, app, params }) {
    let post = await $content(`${app.i18n.locale}/blog`)
      .where({ slug: params.slug })
      .limit(1)
      .fetch()

    post = post[0]

    const relatedPosts = await $content(`${app.i18n.locale}/blog`)
      .where({ slug: { $ne: params.slug } })
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()

    return {
      post,
      relatedPosts,
    }
  },

  data() {
    return {
      images: [
        {
          image: require('~/assets/images/home/event-3.png'),
        },
        {
          image: require('~/assets/images/event/image-1.jpg'),
        },
        {
          image: require('~/assets/images/home/event-2.png'),
        },
        {
          image: require('~/assets/images/home/event-1.png'),
        },
        {
          image: require('~/assets/images/event/image-2.jpg'),
        },
        {
          image: require('~/assets/images/event/image-3.jpg'),
        },
      ],
      lists: [
        {
          image: require('~/assets/images/home/event-1.png'),
          date: '25 May, 2021',
          title:
            'Lorem Ipsum is simply dummy text of the printing and typesetting',
        },
        {
          image: require('~/assets/images/home/event-2.png'),
          date: '25 May, 2021',
          title:
            'Lorem Ipsum is simply dummy text of the printing and typesetting',
        },
        {
          image: require('~/assets/images/home/event-3.png'),
          date: '25 May, 2021',
          title:
            'Lorem Ipsum is simply dummy text of the printing and typesetting',
        },
      ],
    }
  },
}
</script>
