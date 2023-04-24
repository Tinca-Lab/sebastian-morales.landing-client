<template>
    <div class="xs:max-w-xs supersm:max-w-screen-supersm sm:max-w-screen-sm md:max-w-md m-auto ">
      <carousel class="xs:max-w-xs supersm:max-w-screen-supersm sm:max-w-screen-sm md:max-w-md" :per-page="1" :pagination-active-color="'#FFEC42'" :pagination-color="'#FFF'" :pagination-size="20">
        <slide  v-for="(item, index) in blog" :key="index" class="px-2">
            <CardBlog :blog="item" class="flex flex-col supersm:h-full  justify-between"/>
        </slide>
      </carousel>
    </div>
</template>
  
<script>
import CardBlog from './CardBlogComponents/CardBlog.vue';
  export default {
    name:'BlogCarrousel',
    components: {CardBlog},
    props:{
      blog:{type:Array,default:()=>[]}
    }
  };
  
</script>