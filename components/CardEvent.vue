<template>
  <NuxtLink
    :to="localePath({ name: 'event-slug', params: { slug: events.slug } })"
  >
    <div class="bg-white transition-all duration-300 shadow-10 hover:shadow-20">
      <div class="aspect-w-3 aspect-h-2 overflow-hidden">
        <div class="transform hover:scale-105 duration-300">
          <JPicture
            :src="events.image"
            :alt="events.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="px-24 py-32">
        <div class="sub-text mb-6">{{ format(events.date) }}</div>
        <div
          class="h4 mb-16 hover:text-primary-accent text-blue-200 h-60 max-h-60"
        >
          {{ events.title }}
        </div>
        <div class="btn-text text-button">{{ $t('common.see-more') }}</div>
      </div>
    </div>
  </NuxtLink>
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

  props: {
    events: {
      type: Object,
      required: false,
    },
  },
}
</script>
