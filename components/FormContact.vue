<template>
  <section>
    <FormulateForm
      class="grid grid-cols-2 gap-16 md:gap-24 xl:gap-32 gap-y-[48px]"
      name="contactForm"
      ref="form"
      @submit="onSubmit"
    >
      <div class="col-span-2">
        <div class="text-form text-label">{{ $t('form.name') }}</div>
        <FormulateInput
          id="name"
          input-class="w-full h-50 px-10 py-4 md:px-20 md:py-16 focus:outline-none bg-transparent border border-gray-300 text-black"
          class=""
          :element-class="['h-50']"
          type="text"
          name="name"
          validation="required"
          :validation-messages="{
            required: this.$t('form.error.name'),
          }"
        />
      </div>

      <div class="col-span-2 md:col-span-1">
        <div class="text-form text-label">{{ $t('form.mail') }}</div>
        <FormulateInput
          id="mail"
          input-class="w-full h-50 px-10 py-4 md:px-20 md:py-16 focus:outline-none bg-transparent border border-gray-300 text-black"
          :element-class="['h-50']"
          type="email"
          name="mail"
          validation="required"
          :validation-messages="{
            required: this.$t('form.error.mail'),
          }"
        />
      </div>
      <div class="col-span-2 md:col-span-1">
        <div class="text-form text-label">{{ $t('form.phone') }}</div>
        <FormulateInput
          id="name"
          input-class="w-full h-50 px-10 py-4 md:px-20 md:py-16 focus:outline-none bg-transparent border border-gray-300 text-black"
          class=""
          :element-class="['h-50']"
          type="text"
          name="phone"
        />
      </div>
      <div class="col-span-2">
        <div class="text-form text-label">{{ $t('form.address') }}</div>
        <FormulateInput
          id="address"
          input-class="w-full px-10 py-4 md:px-20 md:py-16 bg-transparent focus:outline-none border border-gray-300 text-black"
          type="text"
          name="address"
        />
      </div>
      <div class="col-span-2">
        <div class="text-form text-label">{{ $t('form.level') }}</div>
        <FormulateInput
          id="level"
          input-class="w-full px-10 py-4 md:px-20 md:py-16 bg-transparent focus:outline-none border border-gray-300 text-black"
          type="text"
          name="level"
        />
      </div>
      <div class="col-span-2">
        <div class="text-form text-label">{{ $t('form.content') }}</div>
        <FormulateInput
          id="content"
          input-class="w-full px-10 py-4 md:px-20 md:py-16 bg-transparent focus:outline-none border border-gray-300 text-black"
          type="textarea"
          rows="3"
          name="content"
        />
      </div>
      <div class="col-span-2">
        <div class="text-form text-label">{{ $t('form.upload') }}</div>
        <div id="fakeDiv">
          <FormulateInput
            type="file"
            name="cv"
            v-model="fileName"
            id="selectedFile"
            accept="application/pdf"
            class="
              bg-transparent
              h-50
              formulate-files
              border border-gray-300
              text-black
            "
            validation="required||mime:application/pdf"
            :validation-messages="{
              required: this.$t('form.error.upload'),
            }"
          />
          <div class="flex items-center" id="buttonImage">
            <JIcon name="file2" alt="file icon" />
            <span class="ml-8 body-text text-gray-100">File</span>
          </div>
        </div>
      </div>
      <div class="hidden col-span-2">
        <FormulateInput
          type="hidden"
          name="time"
          :value="new Date().toLocaleString()"
        />
      </div>
      <div class="col-span-2 mt-4 md:mt-20">
        <div
          v-if="isSuccess"
          class="flex p-12 mb-4 rounded bg-origin-right bg-primary"
        >
          {{ $t('form.success') }}
        </div>
        <button
          v-else
          class="btn text-button text-send focus:outline-none btn-primary"
        >
          {{ $t('common.send') }}
        </button>
        <p class="body-text mt-24">
          {{ $t('recruitment.section-4.guard') }}
        </p>
      </div>
    </FormulateForm>
  </section>
</template>

<script>
const api =
  'https://api.formcake.com/api/form/583927fe-6a6d-498e-858c-b7d879a7df05/submission'
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isSuccess: false,
      fileName: '',
    }
  },
  methods: {
    onSubmit(data) {
      ;(data.position = this.name),
        fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).then(() => {
          this.isSuccess = true
          this.$formulate.reset('contactForm')
          this.$emit('change', this.isSuccess)
        })
    },
  },
}
</script>



<style lang="scss" scoped>
section {
  @apply font-display;
}
.formulate-input-error {
  @apply absolute bottom-0;
}

.text-label {
  @apply font-then mb-8;
}
::v-deep {
  .formulate-input {
    @apply relative w-full;
  }
  .formulate-input-error {
    @apply absolute text-red;
    bottom: -25px;
  }

  div:focus-within .text-label {
    @apply text-gray-300;
  }

  #selectedFile {
    text-overflow: ellipsis;
    overflow: hidden;
    @apply opacity-0 absolute top-0  h-full;
  }

  #fakeDiv {
    .formulate-input-wrapper,
    .formulate-input-element--file {
      @apply h-full;
    }

    .formulate-input-upload-area {
      text-overflow: ellipsis;
      overflow: hidden;
      @apply h-full;
      .formulate-files {
        @apply w-full  h-full flex items-center px-20 py-16;
        li {
          .formulate-file {
            .formulate-file-name {
              width: 80%;
              text-overflow: ellipsis;
              overflow: hidden;
              @screen md {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}

//input[type="file"]
input#fakeInput {
  @apply w-full px-20 py-16;
}
#buttonImage {
  @apply absolute top-0 right-0 h-full px-14;
  span {
    @apply flex items-center;
  }
}
#fakeDiv {
  @apply w-full relative inline-block;
}

.h-50 {
  height: 50px !important;
}
.text-form {
  @apply text-18 leading-normal;
}
</style>
