<template>
    <div id="Bookcomment">
        <div class="main"> 
        <div class="logo">
            <img src="/static/icon-comments.svg" width=60px height="40px">
            <span><b>全部书评</b>|COMMENTS</span>
        </div>
            <div class="comment" v-for="(comment,index) in comments">
                <div class="pic" :style="comment.pic"></div>
                <div class="content">
                    <div class="time">{{comment.time}}</div>
                    <div class="commentdetail">
                        <p><b>{{comment.name}}</b></p>
                        <p id="index"><small>{{comment.comment}}</small></p>
                    </div>
                </div>
                <hr>
            </div>
            <div class="givecomment">
                <div class="me">
                    <img src="/static/green.jpg" width="60px" height="70px">
                </div>
                <textarea placeholder="快把你对本书的看法分享出来与书友们一起探讨!(限制25字以内哦)"></textarea>
                <button @click="submit">提交</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Bookcomment',
    data(){
        return{
            comments:[
                {
                    name:'Mr.茂密森林',
                    pic:{backgroundImage:"url("+require('../../static/tutou.jpg')+")"},
                    comment:'嗯，东西很好吃，外酥里嫩，爽口而不腻，下次还来！',
                    time:'2016-11-10'
                },
                {
                    name:'人家不是机器人哦~',
                    pic:{backgroundImage:"url("+require('../../static/robot.jpg')+")"},
                    comment:'→書很好看！γūの是桱敟γūの是囹仒迴菋~←',
                    time:'2018-2-30'
                },
                {
                    name:'评论区最丑男',
                    pic:{backgroundImage:"url("+require('../../static/uglyboy.jpg')+")"},
                    comment:'楼上的那位是机器人吗？',
                    time:'刚刚'
                },
            ]
        }
    },
    methods:{
        submit(){
            var _this = this;
            var content = document.getElementsByTagName('textarea')[0].value;
            var gc = document.getElementsByClassName('givecomment')[0];
            if(content!==''&&content.length<=25){
                var mydate = new Date();
            var obj={
                name:'全群小可爱',
                pic:{backgroundImage:"url("+require('../../static/green.jpg')+")"},
                comment:content,
                time:mydate.toLocaleString(),
            }
            _this.comments.push(obj);
            gc.style.display="none";
            alert('感谢大大的评价~');
            window.setTimeout(function(){
                var dateone = new Date();
                var greetone={
                name:'Mr.茂密森林',
                pic:{backgroundImage:"url("+require('../../static/tutou.jpg')+")"},
                comment:'呕吼，欢迎小可爱加入世上最正经的评论区！有什么看法一定要记得与我们分享哦~',
                time:dateone.toLocaleString(),
            };
               _this.comments.push(greetone);
               _this.comments[3].time="5秒前";
            },5000);
            window.setTimeout(function(){
                 var datetwo = new Date();
                var greettwo={
                name:'评论区最丑男   回复   全群小可爱',
                pic:{backgroundImage:"url("+require('../../static/uglyboy.jpg')+")"},
                comment:'欢迎@小可爱同学！楼上那只不太正常(单身太久了)，强烈建议远离~，加个微信吧!',
                time:datetwo.toLocaleString(),
            };
            _this.comments.push(greettwo);
            _this.comments[3].time="刚刚";
            _this.comments[4].time="刚刚";
            },15000);
            }
            else if(content===''){
                alert('大大，你总得写点东西再提交呀');
            }
            else if(content.length>25){
                alert('嘤嘤嘤，大大写的太多啦，简洁一点好不^_^?');
            }
            
        }
    }
}
</script>

<style scoped>
#Bookcomment{
    height:100%;
    width:100%;
    overflow: hidden;
}
.main{
    position: relative;
    margin:0 auto;
    top:1.5%;
    width:760px;
    height:97%;
    background-color:white;
    filter:drop-shadow(2px 2px 2px rgb(207, 204, 204));
}
.logo{
    opacity: 0.4;
    position: relative;
    top:2%;
    left:2%;
    background-size: 100%;
    width:300px;
    height:50px;
    z-index:1;
}
span{
    position: absolute;
    top:20%;
    font-size:20px;
}
button{
    position: absolute;
    border:0;
    width:12%;
    height:20%;
    bottom:10%;
    right:10%;
    filter:drop-shadow(1px 1px 4px grey);
    padding:0.3%;
    color:white;
    cursor:pointer;
    background-color: rgb(202, 5, 5);
}
.comment{
    position:relative;
    width:600px;
    height:70px;
    margin:0 auto;
    margin-top:1%;
}
.pic{
    position: absolute;
    top:13%;
    width:50px;
    height:50px;
    background-size:100%;
    background-repeat: no-repeat;
}
.time{
    position: absolute;
    right:8%;
    top:66%;
    width:100px;
    height:20px;
    font-size:7px;
}
.content{
    position: absolute;
    width:600px;
    height:60px;
    left:10%;
    opacity: 0.8;
}
.commentdetail{
    position: absolute;
    width:470px;
    top:4%;
}
.givecomment{
    position: relative;
    width:700px;
    height:180px;
    margin:0 auto;
}
.me{
    position: absolute;
    width:60px;
    height:60px;
    top:10%;
    left:6%;
}
hr{
    position: relative;
    top:90%;
    width:100%;
    left:-4%;
    opacity: 0.5;
    border:none;
    border-top:0.8px dashed grey;
}
p{
    margin:4px;
    font-size:13px;
}
textarea{
    width:500px;
    height:100px;
    position: absolute;
    top:10%;
    right:10%;
    overflow:hidden;
    font-size:17px;
}
</style>