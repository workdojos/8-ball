<template>
  <Canvas />
  <LocaleSwitcher />
  <MagicBall />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Canvas from "@/components/Canvas/Canvas.vue";
import MagicBall from "@/components/MagicBall/MagicBall.vue";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher.vue";

export default defineComponent({
  name: "App",
  components: {
    Canvas,
    MagicBall,
    LocaleSwitcher,
  },
});
</script>

<style scoped></style>
