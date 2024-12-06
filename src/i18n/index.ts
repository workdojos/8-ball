import { createI18n } from "vue-i18n";
import store from "../store";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

const defaultLocale = store.state.locale;

const i18n = createI18n({
  legacy: false, // for Composition API
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: { en, ru },
});

export default i18n;
