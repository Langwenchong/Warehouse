<template>
    <div id="Homepage">
        <div class="red header">
            <div class="title" :style="title"></div>
            <div class="visitor" :style="visitor"></div>
        </div>
        <div class="main" :style="backgroundDive">
            <div class="search">
                <input style="text" id="input" @focus="focus" @blur="losefocus" placeholder="请输入关键字检索">
                <button class="red" @click="submit" >检索</button>
            </div>
        </div>
        <div class="red footer">
            <p>加入我们-联系方式-意见反馈<br>POWERED BY TWT STUDIO @ 2000-2019</p>
        </div>
    </div>
</template>

<script>
import Chuandi from '../Chuandi.js'
export default {
        name:'Homepage',
        data(){
            return{
                backgroundDive:{
                    backgroundImage:"url("+require('../../src/assets/background.png')+")"
                },
                title:{
                    backgroundImage:"url("+require('../../src/assets/headerlogo.svg')+")"
                },
                visitor:{
                    backgroundImage:"url("+require('../../src/assets/account.svg')+")",
                },
                content:[],
                num:0,
            }
        },
        methods:{
           submit(){
            var _this=this;
            var key=document.getElementById('input').value;
            if(key===''){
                alert('请输入关键词！');
                return;
            }
            this.$router.push('/Searchresult');
            var url=`http://library.justinxiao.cn/api/search?key=${key}`;
            fetch(url,{
                method:'POST',
                mode:'cors',
                headers:{
                    'content-type':'application/x-www-form-urlencoded'
                },
            })
            .then(response=>response.json())
            .then(function(res){
                var content=res.data;
                var num=res.data.length;
                Chuandi.$emit('output',content,num);
                
         })
        },
        focus(){
            var div = document.getElementById('Homepage');
            div.style.backgroundColor="rgba(192,192,192,0.3)";
            var color = document.getElementsByClassName('red');
            color[0].style.backgroundColor="rgba(166,0,0.7)";
            color[2].style.backgroundColor="rgba(166,0,0.7)";
        },
        losefocus(){
            var div = document.getElementById('Homepage');
            div.style.backgroundColor="";
            var color = document.getElementsByClassName('red');
            color[0].style.backgroundColor="rgba(255,0,0)";
            color[2].style.backgroundColor="rgba(255,0,0)";
        }
        },
    }
</script>

<style scoped>
#Homepage{
    height:100%;
}
.red{
    background-color:rgb(233, 62, 62);
}
.header{
    width:100%;
    height:10%;
}
.title{
    position:absolute;
    left:5%;
    height:10%;
    width:20%;
    background-position-y: 60%;
    background-repeat:no-repeat;
    background-size:100%;
}
.visitor{
    position:absolute;
    right:5%;
    height:10%;
    width:5%;
    background-position-y: 60%;
    background-repeat:no-repeat;
    background-size:95%;
}
.main{
    position: static;
    margin:0 auto;
    height:70%;
    width:60%;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size:100%;
}
.footer{
    position:fixed;
    bottom:0%;
    height:13%;
    width:100%;
}
.search{
    position: absolute;
    top:57%;
    width:50%;
    left:25%;
    height:8%;
}
input{
    position: absolute;
    border:0;
    width:61%;
    height:63%;
    left:10%;
    background-color:rgb(255, 255,255);
    filter:drop-shadow(1px 1px 4px grey);
    padding:0.3%;
}
button{
    position: absolute;
    border:0;
    width:14%;
    height:69%;
    right:13%;
    filter:drop-shadow(1px 1px 4px grey);
    padding:0.3%;
    color:white;
    cursor:pointer;
}
p{
    text-align:center;
    font-size:5px;
    color:silver;
    margin-top:2%;
}
</style>