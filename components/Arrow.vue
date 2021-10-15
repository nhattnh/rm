<template>
  <div
    class="opacity-60 hover:opacity-100 h-50 w-50 rounded-full bg-white group hover:bg-primary-accent flex justify-center items-center border-hover"
  >
    <div class="group-hover:text-white text-black">
      <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1L1 10L11 19"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.border-hover {
  @apply border border-secondary-darken-2 border-solid;
  &:hover {
    @apply border-white border-solid;
    filter: #fff;
  }
}
</style>
