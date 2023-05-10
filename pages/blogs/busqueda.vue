<template>
  <div class="text-center flex flex-col gap-0 items-center w-full 2xl:w-[1440px] m-auto">
    <section class="relative bg-[#C6F1FF] xs:rounded-2xl md:rounded-3xl w-[100%] 2xl:w-[1440px] z-20 my-3">
      <div class="flex xs:flex-col flex-nowrap w-full xs:px-4 md:px-20 py-8">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(element1, i) in category" :key="i" class="w-full">
            <CardBlog :blog="element1" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardBlog from "@/components/Blog/CardBlogComponents/CardBlog.vue";
export default {
  name: "NotFound",
  components: {
    CardBlog
  },
  computed: {
    category() {
      return this.$store.state.SearchFilteredItems;
    }
  },
};
</script>
