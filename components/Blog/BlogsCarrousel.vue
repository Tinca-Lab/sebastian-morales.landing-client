<template>
    <div class="max-w-xs mx-auto">
      <carousel class="border-solid w-10/12 mx-auto">
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