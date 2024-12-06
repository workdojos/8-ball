<template>
  <div id="canvas" class="canvas">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

export default defineComponent({
  name: "Canvas",
  mounted() {
    this.initVanta();
  },
  methods: {
    initVanta() {
      this.vantaEffect = FOG({
        el: "#canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xb0b7d,
        midtoneColor: 0xc30092,
        lowlightColor: 0x5454c5,
        baseColor: 0x50303,
        blurFactor: 0.5,
        zoom: 0.5,
        THREE: THREE,
      });
    },
  },
});
</script>

<style scoped src="./Canvas.scss"></style>
