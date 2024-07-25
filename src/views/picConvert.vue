<template>
  <div>
    <h1>图片转换</h1>
    <h2>当前图片：{{number}}</h2>
    <img :src=getImageUrl(number) width="500px" height="500px" alt="暂时无法显示">
    <button @click="next">下一张</button>
    <button @click="prev">上一张</button>
  </div>
</template>

<script setup>
// Your script setup code goes here
import{ ref} from 'vue'
import pic1 from '@/assets/1.jpg'
import { ElMessage } from 'element-plus';
let number = ref(1)
function next(){
    if(number.value==5){
        ElMessage.error("已经是最后一张了")
    }
    else{
        number.value++
    }
  
}
function prev(){
    if(number.value==1){
        ElMessage.error("已经是第一张了")
    }
    else{
        number.value--
    }
  
}
function getImageUrl(name) {
    return new URL(`../assets/${name}.jpg`, import.meta.url).href;
}

</script>

<style>
/* Your styles go here */
</style>