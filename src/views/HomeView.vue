<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref,reactive ,computed} from 'vue'
let name = ref("香蕉")
let price = ref("5")
let count = ref("5")
let list = reactive([{
  name:"苹果",
  price:5,
  count:5
},

])
function insert(){
  const fruit = reactive({
    name:name.value,
    price:price.value,
    count:count.value
  })
  console.log(fruit);
  list.push(fruit)
}
function increase(i){
  list[i].count++
}
function decrease(i){
  list[i].count--
  if(list[i].count==0){
    alert("数量已经为0,自动帮你删除")
    list.splice(i,1)
  }
  
}


const totalprice = computed(()=>{
  let sum = 0;
  list.forEach((item)=>{
    sum+=item.price*item.count
  })
  return sum;
})
</script>

<template>
  <h1>水果列表</h1>
  <form @submit.prevent="insert">
    <div class="1">
      <label>名称:</label>
      <input type ="text" v-model="name">

    </div>

    <div class="2">
      <label>价格:</label>
      <input type="text" v-model=" price">
    </div>

    <div class="3">
      <label>数量:</label>
      <input type="text" v-model="count">
    </div>
    <button>添加</button>
  </form>

  <ul>
    <li v-for="item,index in list" :key="item.name" >
      名称:{{ item.name }},
      价格:{{ item.price }},
      数量:
      <button @click="decrease(index)">-</button>
      <span>{{ item.count }}</span>
      <button @click="increase(index)">+</button>
    </li>
  </ul>
  <h1>总价格为:{{ totalprice }}</h1>
</template>
