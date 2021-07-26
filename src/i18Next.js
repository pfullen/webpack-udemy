.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
  fallbackLng: "en",
  detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
  }, 
  backend: {
      localPath: 'assets/locales/{{lng}}/translation.json'
  },
  react: {useSuspense: false}
})