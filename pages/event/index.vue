<template>
  <main>
    <section class="">
      <Banner :banner="banner" />
    </section>

    <section class="md:mb-128 mb-64">
      <div
        class="
          justify-center
          items-center
          md:flex
          hidden
          border-b border-gray-300
          text-gray-100
          mt-32
          mb-64
        "
      >
        <div class="container flex justify-center space-x-40">
          <div
            class="text-button border-b-3 border-white pb-8 cursor-pointer"
            v-for="(item, index) in listTab"
            @click="getDataTab(index, title)"
            :class="
              currentTab === index
                ? 'border-primary-accent text-primary-accent'
                : ''
            "
            :key="index"
          >
            {{ item.title }}
          </div>
        </div>
      </div>

      <div class="container md:hidden block">
        <select
          name=""
          id=""
          @change="getDataTab(parseInt($event.target.value))"
          class="w-full border border-gray-300 mt-64 mb-32 py-20"
        >
          <option :value="index" v-for="(item, index) in listTab" :key="index">
            {{ item.title }}
          </option>
        </select>
      </div>

      <div
        class="
          container
          grid
          md:grid-cols-12
          grid-cols-1
          gap-x-32
          md:gap-y-64
          gap-y-32
        "
      >
        <CardEvent
          class="lg:col-span-4 md:col-span-6 col-span-1"
          v-for="(item, index) in listEvent"
          :key="index"
          :events="item"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0,
      listEvent: [],
      listTab: [
        {
          title: this.$t('events.society'),
        },
        {
          title: this.$t('events.internal'),
        },
        {
          title: this.$t('events.Knowledge-News'),
        },
        {
          title: this.$t('events.science'),
        },
      ],
      banner: {
        image: '/images/event/banner.jpg',
        title: this.$t('events.banner'),
      },
    }
  },

  mounted() {
    this.getDataTab(0)
  },
  methods: {
    getDataTab(index) {
      this.currentTab = index
      switch (index) {
        case 0:
          this.getData('Xã Hội')
          break
        case 1:
          this.getData('Nội Bộ')
          break
        case 2:
          this.getData('Kiến Thức - Tin Tức')
          break
        case 3:
          this.getData('Khoa Học')
          break

        default:
          break
      }
    },

    async getData(props) {
      const locale = this.$nuxt.$i18n.locale
      const data = await this.$nuxt
        .$content(`${locale}/blog`)
        .where({ group: props })
        .sortBy('date', 'desc')
        .fetch()

      this.listEvent = data
    },
  },
}
</script>
