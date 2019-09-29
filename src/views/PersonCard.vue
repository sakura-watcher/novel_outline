<template>
    <div>
        <el-container>
            <el-header>人物卡片集</el-header>
            <el-container >
                <!-- is="HeadImg" v-for="value in values" :key="value.id" :headValue="value.value" -->
                <el-aside width="300px" >
                    <el-carousel :interval="5000" type="card" height="200px" @change="changeHeadImg" :autoplay="false">
                        <el-carousel-item v-for="item in carouselItems" :key="item.id">
                            <!-- <h3 class="medium">{{ item }}</h3> -->
                            <el-image
                                style="width: 150px; height: 200px"
                                :src="item.src"
                                fit="fill"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                    <el-container>
                        <el-header>head</el-header>
                        <el-main>
                            <div>
                                main
                            </div>
                        </el-main>
                        <el-footer>
                            <el-button type="primary" @click="addOneMore">再整一个</el-button>
                        </el-footer>
                    </el-container>
                </el-aside>
                
                <el-container style="width:100%;">
                    
                    <!-- 基本信息 -->
                    <el-header style="width: 100%; height: 200px">
                        <el-container>
                            <!-- <el-header style="height: 10px">基本信息</el-header>
                            <el-divider></el-divider> -->
                            <el-aside style="width: 200px; height: 200px">
                                <!-- 头像 -->
                                <el-image
                                        style="width: 195px; height: 195px"
                                        :src="mainImg"
                                        fit="fill"></el-image>
                            </el-aside>
                            <el-main>
                                <!-- 基本信息 -->
                                <el-row class="basic-person-info">
                                    <el-col :span="8"><span>名字：</span><span>{{personCard.name}}</span></el-col>
                                    <el-col :span="8"><span>别名：</span><span>{{personCard.otherName}}</span></el-col>
                                    <el-col :span="8"></el-col>
                                </el-row>
                                <el-divider></el-divider>
                                <el-row class="basic-person-info">
                                    <el-col :span="8"><span>出生地：</span><span>{{personCard.hometown}}</span></el-col>
                                    <el-col :span="8"><span>家族：</span><span>{{personCard.family}}</span></el-col>
                                    <el-col :span="8"></el-col>
                                </el-row>
                                <el-divider></el-divider>
                                <el-row class="basic-person-info">
                                    <el-col ><span>座右铭：</span><span>{{personCard.motto}}</span></el-col>
                                </el-row>
                                <el-divider></el-divider>
                                <el-row class="basic-person-info">
                                    <span>标签：</span>
                                    <el-tag v-for="tag in tags" :key="tag.id" :type="tag.type">{{tag.name}}</el-tag>
                                </el-row>
                            </el-main>
                        </el-container>
                    </el-header>
                    <el-container class="word-container">
                        <el-header style="height: 30px;line-height:30px">
                            原话
                            <el-button type="primary" icon="el-icon-plus" circle size="mini"></el-button>
                        </el-header>
                        
                        <el-main>
                            <!-- 基本信息 -->
                            <el-collapse>
                                <el-collapse-item v-for="word in words" :key="word.id" :title="word.title" >
                                    <div>{{word.detail}}</div>
                                </el-collapse-item>
                            </el-collapse>
                        </el-main>
                    </el-container>
                    <el-container class="event-container">
                        <el-main>
                            <el-header style="height: 30px;line-height:30px">
                                经历
                                <el-button type="primary" icon="el-icon-plus" circle size="mini"></el-button>
                            </el-header>
                            <el-divider></el-divider>
                            
                            <el-timeline >
                                <el-timeline-item :hide-timestamp="true" v-for="event in events" :key="event.id" :timestamp="event.sequen" placement="top">
                                    <el-card class="event-card">
                                        <h4>{{event.name}}</h4>
                                        <p>{{event.detail}}</p>
                                    </el-card>
                                </el-timeline-item>
                            </el-timeline>
                        </el-main>
                    </el-container>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>


<script>
import HeadImg from "@/components/HeadImg.vue"

export default {
    data(){
        return{
            values:[
                {id:1,value:"耀"},
                {id:1,value:"耀"},
                {id:1,value:"耀"},
                {id:1,value:"耀"},
                {id:1,value:"耀"},
            ],
            carouselItems:[
                {id:1,src:"https://pic2.zhimg.com/80/v2-c4ad08a476b1bc9dcd614925fd46e176_hd.jpg"},
                {id:2,src:"https://pic1.zhimg.com/80/v2-84b0ae9d4178d5b7293c49cc7124ed77_hd.jpg"},
                {id:3,src:"https://pic3.zhimg.com/80/v2-54930e5a1afc9d3c1be849ee40a969fc_hd.jpg"},
                {id:4,src:"https://pic2.zhimg.com/80/v2-8ffbc421be5e0c520ce38c3b995f7a3d_hd.jpg"},
                {id:5,src:"https://pic4.zhimg.com/80/v2-9b7aae7827f51d79f16395582939c9a0_hd.jpg"},
                {id:6,src:"https://pic3.zhimg.com/80/v2-d80e3274b52548fda38716c96b16f94c_hd.jpg"},
                {id:7,src:"https://pic1.zhimg.com/80/v2-c8fa14f4a6108d420b58c1a6055035f3_hd.jpg"}
            ],
            headImgs:[
                "https://pic4.zhimg.com/80/v2-183bf4536c96480b6c56adb525671eac_hd.jpg",
                "https://pic4.zhimg.com/80/v2-ee27b8348633abe5892ea6489013fc16_hd.jpg",
                "https://pic2.zhimg.com/80/v2-4f46b6358bf5182916b3f1c5c39b1641_hd.jpg",
                "https://pic2.zhimg.com/80/v2-70f25ca5c443560839d2264f92b20c33_hd.jpg",
                "https://pic1.zhimg.com/80/v2-b508f6a801e9ef6b139a138fbe2156c7_hd.jpg",
                "https://pic2.zhimg.com/80/v2-20bd459a8c417057f0518bc79dbd426f_hd.jpg",
                "https://pic3.zhimg.com/80/v2-e93e9ef44ac088e90a0baa3d4e635303_hd.jpg"
            ],
            mainImg:"https://pic4.zhimg.com/80/v2-3509d1da4754ea7d7c64cab76f1b0937_hd.jpg",
            personCard:{name:"耀",otherName:"sakura",hometown:"纳斯金匙",family:"暂无",motto:"我只是一只小sakura",briefIntro:"是世界树本神了。。。"},
            tags:[
                {id:1,name:"tiny dog",type:""},
                {id:2,name:"tiny cat",type:"success"},
                {id:3,name:"tiny donkky",type:"info"},
                {id:4,name:"tiny bear",type:"warning"},
                {id:5,name:"tiny gaga",type:"danger"}
            ],
            words:[
                {id:1,title:"关于小熊我想说的话",detail:"小熊是这个世界杀的，男孩是他亲手杀的"},
                {id:2,title:"关于时间我想说的话",detail:"时间隧道的确存在，但目前没有人能亲自改写时间"},
                {id:3,title:"关于时代我想说的话",detail:"我犯了错，我错用了权柄，创造亦是毁灭，繁华终将杀伐"},
                {id:4,title:"关于时代我想说的话",detail:"我犯了错，我错用了权柄，创造亦是毁灭，繁华终将杀伐"},
                {id:5,title:"关于时代我想说的话",detail:"我犯了错，我错用了权柄，创造亦是毁灭，繁华终将杀伐"},
                {id:6,title:"关于时代我想说的话",detail:"我犯了错，我错用了权柄，创造亦是毁灭，繁华终将杀伐"},
                {id:7,title:"关于时代我想说的话",detail:"我犯了错，我错用了权柄，创造亦是毁灭，繁华终将杀伐"},
            ],
            events:[
                {id:1,sequen:"1",name:"关于小熊我想说的话",detail:"小熊是这个世界杀的，男孩是他亲手杀的"},
                {id:2,sequen:"2",name:"关于时间我想说的话",detail:"时间隧道的确存在，但目前没有人能亲自改写时间"},
                {id:3,sequen:"3",name:"关于时代我想说的话",detail:"我犯了错，我错用了权柄，创造亦是毁灭，繁华终将杀伐"},
            ],
            
        }
    },
    components:{
        HeadImg
    },
    methods:{
        changeHeadImg:function(index,preIndex){
            console.log("index:"+index+"   preIndex:"+preIndex)
            this.mainImg=this.headImgs[index]
        },
        addOneMore:function(){
            console.log("addOneMore......")
            this.$router.push("/personCardAdd")
        }
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #person-info-div{
      width: 100%;
      height: 100%;
      opacity: 0.5;
      background-image: url("https://pic3.zhimg.com/80/v2-be9659feb3e1ec31a4bba496369662ec_hd.jpg");
      background-repeat:no-repeat;
  }
  .basic-person-info{
      text-align: left;
  }
  .el-tag{
      margin-right: 10px
  }
  .el-divider--horizontal{
      margin: 12px 0;
      height: 1.5px;
  }
  .event-card{
      text-align: left
  }
  .word-container{
      margin-top: 30px;
      height: 300px
  }
  .event-container{
      margin-top: 30px;
      height: 530px;
  }
  
</style>