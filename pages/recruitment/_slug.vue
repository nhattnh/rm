<template>
  <main>
    <section class="my-64 md:mt-48 md:mb-120">
      <div class="container">
        <div class="grid grid-cols-12 gap-y-20 md:gap-y-48">
          <div class="md:col-span-10 md:col-start-2 col-span-12">
            <h1 class="h2 mb-12 text-blue-200">{{ recruitment.name }}</h1>
            <div>
              <ul class="flex flex-wrap">
                <li
                  class="
                    flex
                    items-center
                    justify-center
                    bg-gray-400
                    p-8
                    md:py-10
                    md:px-14
                    my-10
                    md:my-0
                  "
                >
                  <JIcon name="clock"/>
                  <div class="ml-8 sub-text text-blue-200">
                    {{ format(recruitment.createdAt) }}
                  </div>
                </li>
                <li
                  class="
                    flex
                    items-center
                    justify-center
                    bg-gray-400
                    p-8
                    md:py-10
                    md:px-14
                    my-10
                    md:my-0
                    mx-10
                  "
                >
                  <div class="sub-text text-blue-200">
                    {{ recruitment.type }}
                  </div>
                </li>
                <li
                  class="
                    flex
                    items-center
                    justify-center
                    bg-gray-400
                    p-8
                    md:py-10
                    md:px-14
                    my-10
                    md:my-0
                  "
                >
                  <JIcon name="location"/>
                  <div class="ml-8 sub-text text-blue-200">
                    {{ recruitment.location }}
                  </div>
                </li>
                <li
                  class="
                    flex
                    items-center
                    justify-center
                    bg-gray-400
                    p-8
                    md:py-10
                    md:px-14
                    my-10
                    md:my-0
                    md:mx-10
                  "
                >
                  <div class="sub-text text-blue-200">
                    {{ $t('recruitment.slug.member') }} :
                    {{ recruitment.member }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:col-span-10 md:col-start-2 col-span-12">
            <h2 class="h3 mb-16">{{ $t('recruitment.slug.describe') }}</h2>
            <div
              class="sub-text text-blue-200"
              v-html="recruitment.describe"
            ></div>
          </div>
          <div class="md:col-span-10 md:col-start-2 col-span-12">
            <h2 class="h3 mb-16">{{ $t('recruitment.slug.required') }}</h2>
            <div
              class="sub-text has-dot text-blue-200"
              v-html="recruitment.required"
            ></div>
          </div>
          <div class="md:col-span-10 md:col-start-2 col-span-12">
            <h2 class="h3 mb-16">{{ $t('recruitment.slug.benefit') }}</h2>
            <div
              class="sub-text text-blue-200"
              v-html="recruitment.benefit"
            ></div>
          </div>
          <div class="md:col-span-10 md:col-start-2 col-span-12">
            <h2 class="h3 mb-16">{{ $t('recruitment.slug.info') }}</h2>
            <div
              class="sub-text text-blue-200"
              v-html="recruitment.contact"
            ></div>
          </div>
          <div class="md:col-span-10 md:col-start-2 col-span-12">
            <h2 class="h3 mb-16">{{ $t('recruitment.slug.location_work') }}</h2>
            <div
              class="sub-text text-blue-200"
              v-html="recruitment.location_work"
            ></div>
          </div>
          <div
            class="
              md:col-span-10 md:col-start-2
              col-span-12
              flex
              justify-center
              md:justify-start
            "
          >
            <button
              class="btn btn-primary mt-20 md:mt-40 focus:outline-none"
              @click="setMenu"
            >
              {{ $t('common.apply') }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <section v-if="success && showModal">
      <div>
        <div
          class="bg-primary-gray bg-opacity-40 fixed top-0 w-full h-screen z-40"
          @click="setMenu"
        ></div>
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div
                class="modal-container-success py-32 md:py-64 px-20 md:px-80"
              >
                <div
                  class="
                    modal-header
                    text-white
                    flex
                    justify-center
                    items-center
                  "
                >
                  <JPicture
                    src="/images/recruitment/profile.png"
                    alt="close icon"
                  />
                </div>
                <div class="modal-body text-center">
                  <div class="h3 mb-1">{{ $t('form.profile') }}</div>
                  <div class="body-text text-gray-100">
                    {{ $t('form.thanks') }}
                  </div>
                  <button
                    class="
                      btn btn-primary
                      text-button text-send
                      mt-32
                      md:mt-56
                      focus:outline-none
                    "
                    @click="setMenu"
                  >
                    {{ $t('common.confirm') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>
    <section v-else-if="!success && showModal">
      <div>
        <div
          class="bg-primary-gray bg-opacity-40 fixed top-0 w-full h-screen z-40"
          @click="setMenu"
        ></div>
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container">
                <div
                  class="
                    modal-header
                    bg-primary-accent
                    py-16
                    px-20
                    lg:px-32
                    xl:px-76
                    text-white
                    hidden
                    md:flex
                    justify-between
                    items-center
                  "
                >
                  <div class="h4" v-html="$t('recruitment.slug.join')"></div>
                  <div @click="setMenu">
                    <JIcon
                      class="cursor-pointer"
                      name="close"
                    />
                  </div>
                </div>

                <div
                  class="
                    modal-body
                    bg-white
                    p-20
                    lg:px-32
                    xl:px-76
                    md:pt-32
                    md:pb-48
                  "
                >
                  <div class="h4 flex justify-between">
                    {{ $t('recruitment.slug.position') }}
                    <div
                      class="
                        block
                        md:hidden
                        text-primary-accent
                        border-b border-primary-accent
                      "
                      @click="setMenu"
                    >
                      Đóng
                    </div>
                  </div>
                  <div class="h3 mb-10 md:mb-32">{{ recruitment.name }}</div>
                  <FormContact :name="recruitment.name" @change="getSuccess" />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>
    <SocialMeta :title="recruitment.name" :description="recruitment.describe" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    let recruitment = await $content(`${app.i18n.locale}/recruitment`)
      .where({ slug: params.slug })
      .limit(1)
      .fetch()
    recruitment = recruitment[0] || error({ statusCode: 404 })

    return {
      recruitment,
    }
  },
  data() {
    return {
      recruitment: {},
      showModal: false,
      success: false,
    }
  },
  methods: {
    format(date) {
      let month = new Date(date).getMonth()
      let day = new Date(date).getDate()
      let year = new Date(date).getFullYear()

      return day + '/' + month + '/' + year
    },
    getSuccess(isSuccess) {
      this.success = isSuccess
    },
    setMenu() {
      this.showModal = !this.showModal
      var html = document.querySelector('html')
      if (process.browser) {
        window.scrollTo({
          top: 100,
          left: 100,
          behavior: 'smooth',
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.modal-mask {
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;

  transition: opacity 0.3s ease;
}

.modal-container,
.modal-container-success {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  @screen md {
    margin: 8.5rem 7.5rem;
  }
  @screen lg {
    margin: 8.5rem 14.5rem;
  }
  @screen xl {
    margin: 8.5rem 22.5rem;
  }
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-container-success {
  height: 35rem;
}

::v-deep {
  p {
    @apply mb-24;
  }

  .has-dot {
    li + li {
      @apply mt-24;
    }
    li {
      @apply relative;
      padding-left: calc(32px + 1em);
      background: url('@/assets/icons/check.svg') no-repeat;
      &:before {
        content: '';
        top: 0.75em;
        left: 0;
        width: 0.8em;
        height: 0.8em;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
