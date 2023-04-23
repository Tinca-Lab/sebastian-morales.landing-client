<template>
    <div class="xs:max-w-xs supersm:max-w-screen-supersm sm:max-w-screen-sm md:max-w-md m-auto ">
      <carousel class="xs:max-w-xs supersm:max-w-screen-supersm sm:max-w-screen-sm md:max-w-md  border-solid" :per-page="1">
        <slide v-for="(item, index) in blog" :key="index">
            <CardBlog :blog="item" />
        </slide>
      </carousel>
    </div>
</template>
  
<script>
import CardBlog from './CardBlog.vue';
  export default {
    name:'BlogCarrousel',
    components: {CardBlog},
    props:{
      blog:{type:Array,default:()=>[]}
    }
  };
  
</script>