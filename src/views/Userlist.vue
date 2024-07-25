<template>
    <div class="all">
        <el-table :data="tableData.users" height="500" style="width: 100%">
        <el-table-column prop="id" label="id" width="50" />
        <el-table-column prop="username" label="用户名" width="200" />
        <el-table-column prop="email" label="电子邮箱" width="200"/>
        <el-table-column prop="fullname" label="全名" width="200" />
        <el-table-column prop="character" label="用户等级" width="200"/>
    </el-table>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'
  import { ref,onMounted, reactive } from 'vue'
  onMounted(
    ()=>{
    axios.get("http://localhost:8080/findall")
    .then(res =>{
      tableData.users = res.data
      
    }).catch(err =>{
      console.log(err);
    })

    tableData.users.forEach(item=>{
      if(item.character=== "Stuff"){
        item.character = "普通用户"
      }
      else if(item.character === "Admin"){
        item.character = "管理员"
      }
    })
    console.log(tableData.users)
  }
)
  
  let tableData = reactive({
    users:[]
  })
  </script>
  


<style>
/* Your styles go here */
body{
    background-color: #437b92;
}
.all{
    width: 100%;
    height: 100%;
    background-color: #437b92;
    
}
</style>