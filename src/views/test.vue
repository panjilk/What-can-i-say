<template>
  <div>
    <h1>Welcome to Your Vue 3 App!</h1>
  </div>
</template>

<script lang="ts"setup>
// Your script setup code goes here

import { ref,reactive } from 'vue'
interface Person{
    name:string;
    age:number;
    gender:string;
}
let persons = reactive<Person[]>([
    {name:"张三",age:12,gender:"123"},
    {name:"李白",age:114514,gender:"123"}
])
</script>

<style>
/* Your styles go here */
</style>