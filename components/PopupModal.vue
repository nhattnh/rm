<template>
  <transition name="slide" appear>
    <div
      class="
        fixed
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        z-50
        md:w-[499px]
        md:h-[514px]
        bg-white
        md:py-40
        md:px-80
        p-20
        w-full
        flex flex-col
        items-center
        justify-center
        gap-24
      "
    >
      <JIcon name="modal-img" />
      <div class="text-center text-20 text-primary-textBody font-normal">
        {{ $t('modal.title') }}
      </div>
      <form @submit.prevent="toggleModal" class="flex flex-col gap-32">
        <div class="flex items-center gap-24">
          <input
            id="checkShow"
            v-model="checked"
            type="checkbox"
            class="
              w-28
              h-28
              cursor-pointer
              checked:bg-white
              checked:border-primary-accent
              checked:text-primary-accent
            "
          />
          <label for="checkShow" class="text-18 font-normal text-gray-100">
            {{ $t('modal.understand') }}
          </label>
        </div>
        <button
          class="btn btn-primary flex justify-center focus:outline-none"
          type="submit"
        >
          <div class="text-24 font-normal">{{ $t('modal.clsoe-aler') }}</div>
        </button>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    toggleModal() {
      if (this.checked) {
        this.$store.commit('toggleModal', { modal: false, remember: true })
      } else {
        this.$store.commit('toggleModal', { modal: false, remember: false })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.slide-enter-active {
  animation: bounce-in 0.3s;
}
.slide-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateX(-50%) translateY(-50%) scale(0);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) scale(1);
  }
}
</style>
