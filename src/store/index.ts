import { createStore } from "vuex";

export interface State {
  locale: string;
}

const store = createStore({
  state: () => ({
    locale: "en",
  }),
  mutations: {
    setLocale(state: State, locale: string) {
      state.locale = locale;
    },
  },
});

export default store;
