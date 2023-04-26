<template>
  <button>
    <span class="text-lg font-medium">{{ title }}</span>
    <Arrow-Icon />
  </button>
</template>

<script>
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
export default {
  name: "BotonContact",
  components: {
    ArrowIcon
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>
