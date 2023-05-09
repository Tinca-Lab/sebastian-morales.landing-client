<template>
  <div class="w-6/12 h-[500px] m-auto rounded-lg">
    <lottie-animation
    class="rounded-lg"
    fill="green"
    path="./loti.json"
    />
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

export default {
  components: {
      LottieAnimation
  },
};
</script>
