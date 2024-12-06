<template>
  <div class="magic-ball">
    <p class="magic-ball__brief" ref="brief">
      <span class="magic-ball__text">{{ $t("brief") }}</span>
      <span class="magic-ball__countdown">{{ countdown }}</span>
    </p>
    <div class="magic-ball__container" ref="ball" @click="shake()">
      <div class="magic-ball__triangle" ref="triangle">
        <p class="magic-ball__answer" ref="answer">{{ answer }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { ANSWERS_COUNT } from "../../shared/constants";

export default defineComponent({
  name: "MagicBall",
  data() {
    return {
      count: ANSWERS_COUNT,
      answer: "",
      isActive: false,
      isShaking: false,
      countdown: 5,
      lastX: 0 as number | null,
      lastY: 0 as number | null,
      lastZ: 0 as number | null,
      shakeThreshold: 15, // Порог тряски
    };
  },
  mounted() {
    this.start();
    window.addEventListener("devicemotion", this.handleMotion);
  },
  beforeUnmount() {
    window.removeEventListener("devicemotion", this.handleMotion);
  },
  computed: {
    ...mapState(["locale"]),
  },
  watch: {
    locale() {
      this.reset();
    },
  },
  methods: {
    start() {
      const ball = this.$refs.ball as HTMLElement;
      const brief = this.$refs.brief as HTMLElement;
      const triangle = this.$refs.triangle as HTMLElement;

      brief.classList.add("visible");
      triangle.classList.add("hidden");

      const interval = setInterval(() => {
        this.countdown--;
        if (this.countdown < 0) {
          clearInterval(interval);
          this.countdown = 0;
        }
      }, 1000);

      setTimeout(() => {
        brief.classList.remove("visible");
        brief.classList.add("hidden");
        ball.classList.add("active");
        this.isActive = true;
      }, this.countdown * 1000);
    },

    reset() {
      const triangle = this.$refs.triangle as HTMLElement;
      const answer = this.$refs.answer as HTMLElement;

      triangle.classList.remove("visible");
      answer.classList.remove("visible");
      triangle.classList.add("hidden");
      answer.classList.add("hidden");
    },

    shake() {
      if (!this.isActive || this.isShaking) return;

      this.isShaking = true;

      if ("vibrate" in navigator) navigator.vibrate([500, 500]);

      const ball = this.$refs.ball as HTMLElement;
      const triangle = this.$refs.triangle as HTMLElement;
      const answer = this.$refs.answer as HTMLElement;

      const randomIndex = Math.floor(Math.random() * this.count);

      ball.classList.add("shake");
      triangle.classList.add("hidden");
      answer.classList.add("hidden");

      setTimeout(() => {
        this.answer = this.$t(`answers[${randomIndex}]`);

        triangle.classList.remove("hidden");
        answer.classList.remove("hidden");
        triangle.classList.add("visible");
        answer.classList.add("visible");
        ball.classList.remove("shake");

        this.isShaking = false;
      }, 1300);
    },
    handleMotion(event: DeviceMotionEvent) {
      const acceleration = event.accelerationIncludingGravity;

      if (!acceleration) return;

      const currentX = acceleration.x!;
      const currentY = acceleration.y!;
      const currentZ = acceleration.z!;

      if (this.lastX === null) {
        this.lastX = currentX;
        this.lastY = currentY;
        this.lastZ = currentZ;
        return;
      }

      const deltaX = Math.abs(currentX - this.lastX!);
      const deltaY = Math.abs(currentY - this.lastY!);
      const deltaZ = Math.abs(currentZ - this.lastZ!);

      if (
        deltaX > this.shakeThreshold ||
        deltaY > this.shakeThreshold ||
        deltaZ > this.shakeThreshold
      ) {
        this.shake();
      }

      this.lastX = currentX;
      this.lastY = currentY;
      this.lastZ = currentZ;
    },
  },
});
</script>

<style scoped src="./MagicBall.scss"></style>
