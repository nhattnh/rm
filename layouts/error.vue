<template>
  <section
    class="py-100 text-primary-accent-button flex flex-col justify-center items-center h-screen bg-black-100"
  >
    <div class="container flex flex-col justify-center">
      <h1 class="h1 text-center text-primary-accent">404</h1>
      <div class="text-gray-800 h3 text-center">Page not found</div>
      <div class="mt-16 body text-center text-primary-accent-button">
        The page you are looking for does not exist. Please check again link or
        return to home page
      </div>
    </div>
    <div class="text-center">
      <div
        class="mx-auto font-bold my-20 flex items-center mt-40 button-text-hover text-primary-accent-button"
      >
        <a href="/">Back to home</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'blank',
  components: {},
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
