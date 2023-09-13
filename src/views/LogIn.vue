<template>
    <div class="login-area">
        <h2>會員登入</h2>
        
        <div class="login-group">
           
            <div class="input-box">
                <input type="text" class="email" placeholder="電子郵件">
                <n-icon class="icon" :depth="3">
                    <person/>
                </n-icon>
            </div>

            <div class="input-box">
                <input type="password" class="password" placeholder="密碼">
                <n-icon class="icon" :depth="3">
                    <lock-closed/>
                </n-icon>
            </div>
            
            <div class="remenber-me">
                <label for="checkbox"><input type="checkbox" id="checkbox"> 記住我</label>
            </div>
            
            <button  id="login-btn">登入</button>
            <div class="forgot-passeord">
                <a href="#" id="forgot">忘記帳號或密碼?</a>
            </div>
        
        </div>
    </div>
</template>

<style>
.login-area{
    
    min-width: 400px;
    margin: auto;
    padding: 40px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 0px 1px 6px rgb(85, 85, 85);
  
}
.login-area h2{
    
    padding: 0 0 20px 0;
    font-size: 30px;
    text-align: center;
}
.login-title{
    margin: 20px;
}
.login-group{
    display: flex;
    flex-direction: column;
    
    align-items:center;
}
.input-box{
    position: relative;
}
.icon{
    position: absolute;
    top: 55%;
    right: 10px;
}
.email,.password{
    height: 40px;
    margin:20px 0 0 0 ;
    width: 270px;
    font-size: 1.2em;
    color: #114736;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: rgb(223, 233, 228);
    padding: 0 15px;
}
.remenber-me{
    align-self: start;
    margin: 10px 0 10px 15px;
}
#checkbox:checked{
   accent-color: rgb(44, 135, 73);
}
#login-btn{
    width: 200px;
    height: 40px;
    background-color: rgb(167, 212, 171);
    border: none;
    border-radius: 10px;
    margin: 20px 0 10px 0 ;
    cursor: pointer;
    font-size: 20px;
}
#forgot:hover{
    color: #30985c;
    text-decoration: underline;
}
</style>

<script setup>
import {NButton,NIcon} from 'naive-ui'
import { Person ,LockClosed } from '@vicons/ionicons5'

</script>