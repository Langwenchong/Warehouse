<template>
    <div id="Searchresult">
        <div class="search">
                <input style="text" id="input" placeholder="请输入关键字检索">
                <button class="red" @click="submit">检索</button>
        </div>
        <div class="sum">共检测到<span>{{num}}</span>本书籍</div>
        <div class="main">
            <div class="bg" v-for="(item,index) in content" @click="look(index)">
                <div class="picture" :style="picture"></div>
                <div class="name">{{item.title}}</div>
                <div class="content">
                    <div class="text" :id="index">
                    <p><b>书籍作者</b>：{{item.author}}</p>
                    <p><b>出版商</b>：{{item.publisher}}</p>
                    <p><b>入馆日期</b>：{{item.created_at}}</p>
                    <p><b>书籍序号</b>：{{item.id}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chuandi from '../Chuandi.js'
import Zaicichuandi from '../Zaicichuandi.js'
export default {
    name: 'Searchresult',
    mounted:function(){
        var _this=this;
        Chuandi.$on('output',function(content,num){
            _this.content=content;
            _this.num=num;
        })
    },
    data(){
        return{
        content:[],
        num:0,
        picture:{
                    backgroundImage:"url("+require('../../src/assets/image-error.png')+")"
                },
        }
    },
    methods:{
    submit(){
            this.$router.push('/Searchresult');
            var _this=this;
            var key=document.getElementById('input').value;
            if(key===''){
                alert('请输入关键词！');
                return;
            }
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
                _this.content=res.data;
                _this.num=_this.content.length;
         })
        },
        look(index){
            this.$router.push('/Bookdetail');
            var id = document.getElementById(index).getElementsByTagName('p')[3].innerText.slice(5);
            const settings={
                method:'GET',
                mode:'cors'
            }
            var URL = `http://library.justinxiao.cn/api/bookDetail/${id}`
            fetch(URL,settings)
            .then(reponse=>reponse.json())
            .then(function(res){
                var content=res.data;
                Zaicichuandi.$emit('display',content);
            })
        }
    }
}
</script>

<style scoped>
#Searchresult{
    height:100%;
    width:80%;
    background-color:rgb(240, 240, 240);
    margin:0 auto;
}
.main{
    position: relative;
    height:70%;
    top:20%;
    width:80%;
    margin:0 auto;
}
.bg{
    filter:drop-shadow(2px 2px 2px rgb(207, 204, 204));
    height:32%;
    width:70%;
    margin:0 auto;
    margin-block-end: 3%;
    background-color:white;
    cursor: pointer;
}
.bg:hover{
    height:32.3%;
    width:72%;
    filter:drop-shadow(2px 2px 5px black);
}
.picture{
    position: relative;
    left:5%;
    top:10%;
    float:left;
    height:83%;
    width:15%;
    background-size:105.9%;
}
.name{
    position:relative;
    font-size:17px;
    top:10%;
    left:25%;
    width:70%;
    height:25%;
    background-color:grey;
}
.content{
    position:relative;
    top:3%;
    left:25%;
    width:70%;
    height:65%;
    font-size:10px;
    color:grey;
    background-color:whitesmoke;
}
.red{
    background-color:rgb(233, 62, 62);
}
.search{
    position: absolute;;
    top:5%;
    left:30%;
    width:40%;
    height:8%;
}
.text{
    position: relative;
    top:30%;
    left:-15%;
}
span{
    color:red;
}
.sum{
    position:absolute;
    left:28%;
    top:15%;
    font-size:small;
    color:silver;
}
li{
    color:silver;
    font-size: 10px;
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
    text-align: left;
}
</style>