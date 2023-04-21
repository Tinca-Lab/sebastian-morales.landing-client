<template>
    <div >
      <carousel class="border-solid border-blue-500 border-2 w-6/12">
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