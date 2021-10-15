<template>
  <div class="relative img-show">
    <transition-group name="fade" class="h-full" tag="div">
      <div class="h-full" v-for="i in [currentIndex]" :key="i">
        <div
          class="bg-no-repeat bg-homepage bg-cover bg-center md:p-0 p-16"
          :style="{ backgroundImage: `url(${currentItem.image})` }"
        >
          <div class="flex flex-col justify-center items-center h-full">
            <div class="h3 text-white mb-8 text-center">
              {{ currentItem.name }}
            </div>
            <div class="w-full flex flex-row justify-around items-center">
              <div>
                <div
                  class="h1 text-white text-center lg:px-[120px] xl:px-[200px]"
                  v-html="currentItem.title"
                ></div>
              </div>
            </div>
            <a :href="currentItem.url">
              <div class="btn btn-primary text-button lg:mt-40 mt-20 mx-auto">
                {{ $t('common.see-more') }}
              </div></a
            >
          </div>
        </div>
      </div>
    </transition-group>
    <div
      class="
        transform
        rotate-180
        lg:block
        hidden
        absolute
        top-0
        right-40
        h-full
        cursor-pointer
      "
      @click="next"
    >
      <div class="flex h-full items-center justify-center">
        <Arrow />
      </div>
    </div>
    <div
      class="
        transform
        lg:block
        hidden
        absolute
        top-0
        left-40
        h-full
        cursor-pointer
      "
      @click="prev"
    >
      <div class="flex h-full items-center justify-center">
        <Arrow />
      </div>
    </div>
  </div>
</template>

<script>
const INTERVAL = 3000

export default {
  props: {
    banners: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      timer: INTERVAL,
      currentIndex: 0,
    }
  },

  computed: {
    currentItem() {
      return this.banners[Math.abs(this.currentIndex) % this.banners.length]
    },
  },

  mounted() {
    this.startSlide()
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, INTERVAL)
    },

    next() {
      this.currentIndex += 1
    },

    prev() {
      this.currentIndex -= 1
    },

    setSlide(index) {
      this.currentIndex = index
      this.timer = INTERVAL
    },

    isCurrentSlide(index) {
      const currentIndex = Math.abs(this.currentIndex) % this.banners.length
      return currentIndex === index
    },
  },
}
</script>

<style lang="scss" scoped>
.bg-homepage {
  height: 350px;
  @screen sm {
    height: 350px;
  }

  @screen md {
    height: 500px;
  }

  @screen lg {
    height: 720px;
  }

  @screen xl {
    height: calc(100vh - 132px);
  }
}
.slider {
  height: 350px;
  @screen sm {
    height: 350px;
  }

  @screen md {
    height: 500px;
  }

  @screen lg {
    height: 720px;
  }

  @screen xl {
    height: calc(100vh - 132px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.img-show {
  height: 350px;
  @screen sm {
    height: 350px;
  }

  @screen md {
    height: 500px;
  }

  @screen lg {
    height: 720px;
  }

  @screen xl {
    height: calc(100vh - 132px);
  }
  width: 100%;
}
</style>
