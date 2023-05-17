<template>
  <div class="w-full">
    <carousel :per-page-custom="[[320, 1], [1199, 3]]" class="w-full" :pagination-active-color="'#FFEC42'"
      :pagination-color="'#FFF'" :pagination-size="15">
      <slide v-for="( item, index ) in  blogs" :key="index" class="px-2">
        <CardBlog :blog="item" background="true" class="flex flex-col supersm:h-full justify-between" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import CardBlog from '@/components/Blog/CardBlogComponents/CardBlog.vue';
export default {
  name: 'BlogCarrousel',
  components: { CardBlog },
  props: {
    blogs: { type: Array, default: () => [] }
  },
};

</script>
