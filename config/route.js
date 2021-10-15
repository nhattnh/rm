export default {
  locales: [
    { code: "en", iso: "en-US", file: "en-US.js" },
    { code: "vi", iso: "vi-VN", file: "vi-VN.js" }
  ],
  lazy: true,
  langDir: "./config/locales/",
  defaultLocale: "vi",
  detectBrowserLanguage: false,
  parsePages: false,
  pages: {
    index: {
      vi: "/",
      en: "/"
    },

    "products/index": {
      vi: "/san-pham",
      en: "/products"
    },

    "products/_category/_slug": {
      vi: "/san-pham/:category/:slug?",
      en: "/products/:category/:slug?"
    },

    "products/_slug": {
      vi: "/san-pham/:slug?",
      en: "/products/:slug?"
    },
    story: {
      vi: "/cau-chuyen-rm",
      en: "/story"
    },
    "event/index": {
      vi: "/su-kien",
      en: "/event"
    },
    "event/_slug": {
      vi: "/su-kien/:slug?",
      en: "/event/:slug?"
    },
    'recruitment/index': {
      vi: "/tuyen-dung",
      en: '/recruitment',
    },
    "recruitment/_slug": {
      vi: "/tuyen-dung/:slug?",
      en: '/recruitment/:slug?'
    },
    "story": {
      vi: "/cau-chuyen",
      en: "/story"
    },
  }
};
