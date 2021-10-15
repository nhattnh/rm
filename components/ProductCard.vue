<template>
  <div class="group">
    <!-- pc -->
    <div class="bg-primary-light p-24 mb-20 z-10 relative md:block hidden">
      <div
        class="
          absolute
          h-full
          w-full
          top-0
          left-0
          z-20
          bg-primary-accent
          transition-opacity
          duration-300
          opacity-0
          hover:bg-primary-accent
          hover:opacity-90
          flex
          justify-center
          items-center
        "
      >
        <nuxt-link
          :to="
            localePath({
              name: 'products-category-slug',
              params: { category: xoa_dau(item.group), slug: item.slug },
            })
          "
          class="btn btn-secondary text-18"
        >
          {{ $t('common.see-more') }}
        </nuxt-link>
      </div>
      <div class="aspect-w-3 aspect-h-2">
        <JPicture
          :src="item.image"
          alt="product"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- mobile  -->
    <div class="bg-primary-light p-24 mb-20 z-10 relative md:hidden block">
      <nuxtLink
        :to="
          localePath({
            name: 'products-category-slug',
            params: { category: xoa_dau(item.group), slug: item.slug },
          })
        "
      >
        <div class="aspect-w-1 aspect-h-1">
          <JPicture
            :src="item.image"
            alt="product"
            class="w-full h-full object-cover"
          />
        </div>
      </nuxtLink>
    </div>
    <div class="text-opacity opacity-50 mb-4">{{ item.group }}</div>
    <div class="h4-card group-hover:text-primary-accent">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      listProduct: [],
    }
  },
  methods: {
    xoa_dau(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
      str = str.replace(/đ/g, 'd')
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
      str = str.replace(/Đ/g, 'D').toLowerCase().split(' ').join('-')

      return str
    },
  },
}
</script>

<style lang="scss" scoped>
.h4-card {
  font-weight: normal;
  font-size: 24px;
  line-height: 150%;
}
</style>
