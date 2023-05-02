<template>
  <button>
    <span class="text-lg font-medium">{{ title }}</span>
    <Arrow-Icon :color = "color" />
  </button>
</template>

<script>
import ArrowIcon from '@/components/Icons/ArrowIcon.vue';
export default {
  name: "BotonContact",
  components: {
    ArrowIcon
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "whithe"
    }
  }
}
</script>
