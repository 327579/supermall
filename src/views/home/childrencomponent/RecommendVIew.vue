<template>
  <div class="recommend">
    <div v-for="v in recommends" class="recommend-item" >
      <a :href="v.link">
        <img :src="v.image" alt="">
        <div>{{v.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendVIew",
    props:{
      recommends:{
        type:Array,
        default(){

        }
      }
    }
  }
</script>

<style >
  .recommend{
    display: flex;
  }
  .recommend-item{
    flex: 1;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
    text-align: center;
    font-size: 12px;
  }
  .recommend-item img{
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }

</style>
