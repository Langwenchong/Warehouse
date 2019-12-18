<template>
    <div id="Bookdetail">
        <div class="main">
            <div class="base">
                <div class="titleone"> 
                    <img src="../assets/icon-basicinfo.svg" width="40px" height="40px">
                    <p>基本信息|BASE INFORMATION</p>
                </div>
                <div class="fav" @click="faver"></div>
               
                <div class="more" title="快点击人家查看书友们的新鲜评论呀~" @click="comment"></div>
                <div class="picture" :style="picture"></div>
                <div class="content"> 
                 <div class="point">
                    <div class="star" @click="givepoint(0)" @mouseover="change(0)" @mouseout="back(0)"></div>
                    <div class="star" @click="givepoint(1)" @mouseover="change(1)" @mouseout="back(1)"></div>
                    <div class="star" @click="givepoint(2)" @mouseover="change(2)" @mouseout="back(2)"></div>
                    <div class="star" @click="givepoint(3)" @mouseover="change(3)" @mouseout="back(3)"></div>
                    <div id="point">{{point}}.0分</div>
                </div>
                    <span><strong>&nbsp;{{content.title}}</strong></span>
                    <p><b>作者：</b>{{content.author}}</p>
                    <p><b>出版社：</b>{{content.publisher}}</p>
                    <p><b>ISBN：</b>别问，问就是不知道……</p>
                    <p><b>简介：</b>{{content.introduce}}</p>
                </div>
                <div class="tag"></div>
                <div class="tagc">外酥里嫩</div>
                <hr>
            </div>
            <div class="detail">
                <div class="titletwo">
                    <img src="/static/icon-location.svg" width="35px" height="35px">
                    <p>在馆信息|LOCATION</p>
                </div>
                <div class="location">
                    <table border="0">
                        <tr>
                            <td><strong>索书位</strong></td>
                            <td><strong>所在藏馆地点</strong></td>
                            <td><strong>在馆状态</strong></td>
                        </tr>
                        <tr>
                            <td>F0/F75(2)</td>
                            <td>卫津路人文社科阅览区</td>
                            <td>借出|<p>逾期未还</p></td>
                        </tr>
                        <tr>
                             <td>F0/F75(2)</td>
                            <td>北洋园文理阅览区</td>
                            <td>借出|<p>21天内归还</p></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Zaicichuandi from '../Zaicichuandi.js'
export default {
    name:"Bookdetail",
    mounted:function(){
        var _this=this;
        Zaicichuandi.$on('display',function(content){
           _this.content=content;
        })
    },
    data(){
        return{
            content:[],
            isPoint:false,
            picture:{
                 backgroundImage:"url("+require('../../src/assets/image-error.png')+")"
                },
            point:0,
        }
    },
    methods:{
        faver(){
            document.getElementsByClassName('fav')[0].style.backgroundImage="url('/static/fav.png')";
    },
        givepoint(i){
            if(!this.isPoint){
            var star = document.getElementsByClassName('star');
            for(let k=0;k<=i;k++){
            star[k].style.backgroundImage="url('/static/redstar.png')";
        }
        this.point=i+1;
        alert(`感谢您对我们打出了${i+1}分好评！^_^`)
        }
        this.isPoint=true;
    },
    change(j){
         if(!this.isPoint){
        var star = document.getElementsByClassName('star');
        for(let l=0;l<=j;l++){
            star[l].style.backgroundImage="url('/static/redstar.png')";
            this.point=j+1;
        }
         }
    },
    back(j){
        if(!this.isPoint){
         var star = document.getElementsByClassName('star');
        for(let l=0;l<=j;l++){
            star[l].style.backgroundImage="url('/static/greystar.png')";
            this.point=j+1;
        }
        }
    },
    comment(){
        this.$router.push('/Bookcomment');
    }
}
}
</script>

<style>
#Bookdetail{
    height:100%;
    width:80%;
    background-color:rgb(240, 240, 240);
    margin:0 auto;
}
#point{
    position:absolute;
    height:20%;
    width:30%;
    right:-17%;
    top:12%;
}
.main{
    padding-top: 1%;
    margin:0 auto;
    height:98%;
    width:70%;
}
.base{
    height:60%;
    width:100%;
    background-color: white;
     filter:drop-shadow(2px 2px 2px rgb(207, 204, 204));
}
.detail{
    margin-top:3%;
    height:33%;
    width:100%;
    background-color: white;
     filter:drop-shadow(2px 2px 2px rgb(207, 204, 204));
}
.titleone{
    position: absolute;
    top:3%;
    left:3%;
    width:40%;
    height:18%;
    opacity: 0.6;
    font-size: 15px;
}
.titleone p{
    position:absolute;
    top:23%;
    left:20%;
}
.fav{
    position:absolute;
    width:8%;
    height:15%;
    right:10%;
    top:-2%;
    background-image:url('/static/unfav.png');
    background-size: 100%;
    background-repeat: no-repeat;
    cursor:pointer
}
.picture{
    position: relative;
    left:11%;
    top:20%;
    height:40%;
    width:17%;
    background-size:105.9%;
}
.content p{
    margin:2%;
    opacity: 0.4;
    width:400px;
    font-size:10px;
}
.content span{
    font-size:15px;
    color:black;
}
.content{
    position: absolute;
    right:30%;
    top:20%;
    height:60%;
    width:40%;
    font-size:10px;
    
}
.more{
    position:absolute;
    width:3%;
    height:6%;
    right:10%;
    top:70%;
    background-image: url('/static/greylaugh.png');
    background-repeat:no-repeat;
    background-size:100%;
    cursor:pointer;
}
.more:hover{
  width:3%;
  height:6%;
  background-image: url('/static/redlaugh.png');
  animation:more 0.1s infinite;
}
@keyframes more {
    25%{
        top:68%;
    }
    75%{
        top:72%;
    }
}
hr{
    position: relative;
    top:43%;
    width:80%;
    left:10%;
    opacity: 0.5;
    border:none;
    border-top:0.8px dashed grey;

}
.tag{
    background-image: url('/static/tag.svg');
    background-repeat:no-repeat;
    background-size:85%;
    width:30px;
    height:30px;
    position:absolute;
    top:85%;
    left:10%;
    opacity: 0.5;
}
.tagc{
    width:37px;
    height:13px;
    position: absolute;
    top:87%;
    left:15%;
    background-color:rgb(216, 209, 209);
    font-size:1px;
}
.point{
    position:absolute;
    width:50%;
    top:-22%;
    height:15%;
    left:50%;
}
.star{
    cursor:pointer;
    margin-right:5%;
    display: inline-block;
    background-image:url('/static/greystar.png');
    background-repeat: no-repeat;
    background-size:100%;
    width:15%;
    height:80%;
}
.titletwo{
    width:40%;
    height:20%;
    position:absolute;
    top:3%;
    left:3%;
    opacity: 0.6;
}
.titletwo p{
     position:absolute;
    top:23%;
    left:20%;
}
.location{
    width:100%;
    height:80%;
    position: relative;
    top:20%;
    margin:0 auto
}
table{
    margin:0 auto;
    width:80%;
    height:90%;
    font-size: 13px;
    text-align: center;
}
table p{
    color:7px;
    color:silver;
}
</style>