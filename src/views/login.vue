<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {onMounted, ref} from 'vue'
import router from '@/router'
const usn = ref('')
const pwd = ref('')
const time = ref(new Date().toLocaleString())
onMounted(()=>{
  setInterval(()=>{
    time.value = new Date().toLocaleString()
  })
})
function register(){
  router.push('/register')
}
</script>

<template>
  <div id="login-all">
    <div id="title">
      <h1>登录</h1>
    </div>
    <div id="login">
      <el-card >
        <div id="form">
          <el-input
            v-model="usn"
            style="width: 300px; height: 50px;"
            placeholder="Please input"
            clearable
          />
          <el-input
            v-model="pwd"
            style="width: 300px; height: 50px;"
            type="pwd"
            placeholder="Please input password"
            show-password
          />
          <br>
          <el-button size ='large' type="primary" >登录</el-button>
          <el-button size='large' @click="register" type="primary">注册</el-button>
        </div>
      </el-card>
    </div>
    <div id="clock" style="font-size: 30px; position:absolute;top:75%;left: 20%;">当前时间：{{ time }}</div>
    <!-- <RouterView /> -->
  </div>
</template>

<style scoped>
#title{
  font-size:30px;
  left: 20px;
  position: absolute;
  left: 20%;
  top: 10%;
}
#form{
  line-height: 75px;
  padding-left: 25px;
  padding-right:25px;
  border-radius: 0%;
  text-align: center;
}
#login{
  position: absolute;
  top: 30%;
  left: 35%;
  /* transform: translate(-50%,-50%); */
  /* padding: 20px; */
  border-radius: 0%;
}
.el-card {
  width: 450px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15%;
  
}
#login-all{
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0%;
  left: 0%;
  background-image: linear-gradient(
    90deg,
    cyan,
    purple
  );
  background-size: 400%;
  animation: myanimation 5s infinite;
}
@keyframes myanimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
