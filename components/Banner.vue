<template>
  <section class="relative h-responsive fade-in-image">
    <JPicture :src="banner.image" :alt="banner.title" class="picture-cover w-full h-full" />
    <div class="absolute top-0 w-full h-full flex items-center">
      <div class="container">
        <h1 class="h1 text-primary-accent" v-html="banner.title"></h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    banner: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.h-responsive {
  height: 20vh;
  @apply object-cover;
  @screen md {
    height: 50vh;
  }
}
.fade-in-image {
  animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
