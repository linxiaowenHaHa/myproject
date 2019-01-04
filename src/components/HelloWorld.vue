<template>
  <div>
    <!-- <text class="message">Now, let's use Vue.js to build your Weex app.</text>
    <video class="video" :src="src" autoplay controls
      @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
    <text class="info">state: {{state}}</text>-->
    <!-- <list>
      <refresh @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing">
        <text class="indicator-text">Refreshing...</text>
        <loading-indicator class="indicator"></loading-indicator>
      </refresh>
      <cell v-for="(item, index) in lists" :key="index">
        <div class="div">
          <text class="text">{{item}}</text>
          <text class="content">{{item.content}}</text>
        </div>
      </cell>
      <loading @loading="onloading" :display="loadinging">
        <text class="indicator-text">Loading...</text>
      </loading>
    </list> -->
    <!-- <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
    <a class="button" href="http://192.168.27.106:8081/src/test.js">
      <text class="text">jump</text>
    </a>
    <web class="webstyle" src="https://www.baidu.com" @pagestart="start" @pagefinish="finish"></web> -->
    <div ref="test" @click="move" class="box"></div>
    <text class="button" @click="jump">Jump</text>
  </div>
</template>

<style scoped>
.video {
  width: 630px;
  height: 350px;
  margin-top: 60px;
  margin-left: 60px;
}
.info {
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
}
.div {
  width: 600px;
  height: 300px;
  margin-top: 50px;
  margin-left: 75px;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
  justify-content: center;
}
.text {
  text-align: center;
  color: #41b883;
  font-size: 88px;
}
.indicator-text{
  font-size: 88px;
  text-align: center;
}
.image{
  width: 700px;
  height: 700px;
}
/* .frame {
  width: 700px;
  height: 700px;
} */
.slider {
  margin-top: 25px;
  margin-left: 25px;
  width: 700px;
  height: 700px;
  /* border-width: 2px;
  border-style: solid;
  border-color: #41B883; */
}
.indicator{
  width: 700px;
  height: 700px;
  item-color: #008000;
  item-selected-color: #FF0000;
  position: absolute;
  top: 200px;
  left: 0px;
}
.button{
  font-size: 60px;
    width: 450px;
    text-align: center;
    margin-top: 30px;
    margin-left: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    color: #666666;
    border-color: #DDDDDD;
    background-color: #F5F5F5
}
.text{
  font-size: 60px;
  color: #666666;
  text-align: center;
}
.webstyle{
  width: 500px;
  height: 500px;
  margin-left: 125px;
  margin-top: 50px;
}
.box{
  width: 150px;
  height: 150px;
  background-color: #DDDDDD;
}
</style>

<script>
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
const animation = weex.requireModule('animation');
const navigator = weex.requireModule('navigator');
export default {
  data() {
    return {
      state: "----",
      src:
        "http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4",
      lists: [1,2,3,4,5,6],
      loadinging: 'hide',
      refreshing: 'hide',
      imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
    }
  },
  mounted(){
    // let url = 'http://www.jspang.com/DemoApi/newsApi.php';
    // this.getList(url,res =>{
    //   modal.toast({message:'请求成功',duration:1});
    //   this.lists = res.data;
    //   console.log(res.data);
    // })
  },
  methods: {
    start(event){
      modal.toast({message: '初始url'+event.url,duration: 1});
    },
    finish(event){
      modal.toast({message: '结束url'+event.url,duration: 1});
    },
    onloading(event){
      modal.toast({message: '加载中...',duration: 1});
      this.loadinging = 'show';
      setTimeout(() => {
        this.loadinging = 'hide';
        let length = this.lists.length;
        for(let i=length;i<length+2;i++){
          this.lists.push(i+1);
        }
      }, 2000);
    },
    onrefresh(event){
      modal.toast({message: 'refreshing...',duration: 1});
      this.refreshing = 'show';
      setTimeout(() => {
        this.refreshing = 'hide';
        this.lists = [1,2,3];
      }, 2000);
    },
    onpullingdown(event){
      modal.toast({message: 'pulling...',duration: 1});     
    },
    move(){
      let testEl = this.$refs.test;
      animation.transition(testEl,{
        styles: {
          backgroundColor: '#FF0000',
          opacity: '1',
          transform: 'translate(250px, 250px) scale(1.5)',
          transformOrigin: 'center center'
        },
        duration: 800,
        timingFunction: 'ease',
        delay: 0
      },function(){
        modal.toast({message: 'animation加载完成'});
      });
    },
    jump(event){
      navigator.push({
          url: 'http://192.168.27.106:8081/src/test.js',
          animated: "true"
        }, event => {
          modal.toast({ message: 'callback: ' + event })
        })
    },
    // onstart(event) {
    //   this.state = "onstart";
    // },
    // onpause(event) {
    //   this.state = "onpause";
    // },
    // onfinish(event) {
    //   this.state = "onfinish";
    // },
    // onfail(event) {
    //   this.state = "onfinish";
    // }
  }
};
</script>