<template>
  <div class="locale-switcher">
    <button
      v-for="locale in locales"
      :key="locale"
      :class="{ 'locale-button': true, active: currentLocale === locale }"
      @click="switchLocale(locale)"
    >
      {{ locale.toUpperCase() }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";
import { LOCALES } from "@/shared/constants";
import { State } from "@/store";

export default defineComponent({
  name: "LocaleSwitcher",
  data() {
    return {
      locales: LOCALES,
    };
  },
  computed: {
    ...mapState({
      currentLocale: (state: State) => state.locale,
    }),
  },
  methods: {
    ...mapMutations(["setLocale"]),
    switchLocale(locale: string) {
      this.setLocale(locale);
      this.$i18n.locale = locale;
    },
  },
});
</script>

<style scoped src="./LocaleSwitcher.scss"></style>
