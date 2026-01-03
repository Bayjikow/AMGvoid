import { createI18n } from 'vue-i18n'
import en from './locales/en'
import tk from './locales/tk'

const messages = {
  en,
  tk
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n

