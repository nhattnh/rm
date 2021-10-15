<template>
  <transition name="fade" appear>
    <div class="modal-overlay fixed inset-0 z-40 inset-y-0 inset-x-0"></div>
  </transition>
</template>


<style lang="scss" scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>