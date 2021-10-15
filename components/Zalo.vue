


<template>
  <div>
    <div
      class="
        pulsating-circle
        fixed
        z-50
        rounded-full
        w-52
        h-52
        flex
        justify-center
        items-center
        cursor-pointer
      "
      @click="callHotline()"
      @mouseover="active = true"
      @mouseleave="active = false"
    >
      <JPicture
        src="/images/home/zalo.png"
        alt="Hot line"
        class="icon-contact w-52"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },

  methods: {
    toggleClick(e) {
      this.active = !this.active
    },
    callHotline() {
      window.open('https://zalo.me/0898404222', '_self')
    },
  },
}
</script>
<style scoped lang="scss">
[data-popover='foo'] {
  width: 280px !important;
  padding: 0;
  & li {
    @apply px-8 py-8;

    &:hover {
      @apply bg-gray-100;
    }
  }
}

.pulsating-circle .icon-contact {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  color: #444;
  animation: pulse-arrow 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s;
  animation-iteration-count: 3;
  animation-fill-mode: forwards;
}

.pulsating-circle {
  bottom: 140px;
  right: 25px;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #01a4e9;
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-iteration-count: 3;
    animation-fill-mode: forwards;
  }

  &:after {
    content: '';
    position: absolute;
    left: 1px;
    top: 1px;
    display: block;
    width: 100%;
    height: 100%;

    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }

  &:hover {
    &.popover {
      z-index: 50;
    }
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.33);
  }
  80%,
  100% {
    opacity: 0;
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
@keyframes pulse-arrow {
  0% {
    transform: scale(0.8) translate(-59%, -59%);
  }
  50% {
    transform: scale(1) translate(-50%, -50%);
  }
  100% {
    transform: scale(0.8) translate(-59%, -59%);
  }
}

.vue-popover.dropdown-position-left:before {
  top: 80%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// Show from bottom transition
.show-from-bottom-enter-active,
.show-from-bottom-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

// Show from left transition
.show-from-left-enter-active,
.show-from-left-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}
.show-from-left-enter,
.show-from-left-leave-to {
  opacity: 0;
  transform: translate(-20px);
}

.popover {
  right: 80px;
  bottom: 140px;
  z-index: -1;
  & li {
    @apply px-8 py-8;

    &:hover {
      @apply bg-gray-300;
    }
  }

  transition: transform 0.3s, opacity 0.3s;
  opacity: 0;
  display: hidden;

  &.active {
    opacity: 1;
    display: block;
    transition: transform 0.3s, opacity 0.3s;
    transform: translate(-20px);
  }
}

.right-20 {
  right: 20px;
}
</style>

