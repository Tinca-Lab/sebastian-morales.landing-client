<template>
  <div>
    <BlogView :metadata="blogSection" :data="blogData"/>
  </div>
</template>

<script>
import BlogView from "@/components/BlogView/AppBlogView.vue";

export default {
  name: "BlogViewPage",
  components: {
      // LottieAnimation,
      BlogView
    },
    data: () => ({
      blogSection: [],
      blogData: {},
    }),
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },

  },
  watch: {
    blogs() {
      this.blogSection = this.blogs.attributes.sections.data.filter(section => section.attributes.type === 'blog')[0];
      this.blogData = this.blogSection.attributes;
      this.blogSection = this.blogSection.attributes.blogs.data;
    }
  },
  async beforeCreate() {
    if (process.client)
      await this.$store.dispatch('fetchBlog');
  },
};
</script>
