<template>
  <nuxt-picture :src="src" :alt="alt" :loading="loading" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    loading: {
      type: String,
      default: 'lazy',
    },
  },
}
</script>

<style lang="scss">
picture.picture-cover {
  @apply flex;
  img {
    @apply object-cover;
  }
}
</style>
