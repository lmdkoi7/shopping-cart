<template>
    <header>
      <div class="header-container">
        <ul class="nav">
          <li >
            <RouterLink to="/" class="a">首頁</RouterLink>
          </li>
  
          <li class="nav-item">
            <RouterLink to="/clothes">服飾</RouterLink>
            <ul class="drop-down">
              <li><RouterLink to="/clothes/dress">連身裙</RouterLink></li>
              <li><RouterLink to="/clothes/pants">褲子</RouterLink></li>
            </ul>
          </li>
          
          <div class="search-group">
            <n-icon class="icon" >
              <search/>
            </n-icon>
            <input class="search-bar" type="text" placeholder="想找什麼商品呢?">
          </div>
          

          <li>
            <RouterLink to="/login">會員登入</RouterLink>
          </li>
          
        </ul>
    </div>
    </header>
  
    
   
  </template>
<style scoped>
header{
  position: relative;
}
.header-container{
  box-shadow: 0px 1px 6px rgb(85, 85, 85);
  background-color: rgb(177, 218, 187);
}
.nav{
  display: flex;
  justify-content: space-between;
}
.nav a{
  padding: 10px;
  font-size: 1.5em;
  display: block;
}
.nav >li:hover {
  background-color: rgb(156, 204, 168);
}
.nav-item:hover .drop-down{
  display: block;
}
ul{
  list-style: none;
  padding: 0;
}
.drop-down {
  display: none;
  position: absolute;
  width: 200px;
  top: 100%;
  border-bottom: solid 1px rgb(156, 204, 168);
  border-left: solid 1px rgb(156, 204, 168);
  border-right: solid 1px rgb(156, 204, 168);
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 1px 6px rgb(85, 85, 85) ;
}
.drop-down li :hover{
  color: rgb(156, 204, 168);
}
.search-group{
  position: relative;
  padding: 0 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  height: 30px;
  width: 250px;
  align-self: center;
}
.search-group input{
  border: none;
  outline: none;
  height: 30px;
  width: 100%;
  padding: 0 10px;
}
.icon{
  position: absolute;
  right: 228px;
  top: 30%;
}
</style>

<script setup>
import { NButton,NIcon} from 'naive-ui'
import { Search } from '@vicons/ionicons5'
</script>