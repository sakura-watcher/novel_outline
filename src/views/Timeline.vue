<template>
  <el-container>
    <el-header >
      <div class="little-timeline">
        <div class="little-timeline-epoch" >
          <table>
            <tr>
              <td v-for="(timeline,index) in timelines" :key="timeline.id">
                <el-popover placement="bottom-start" 
                    title="事件"
                    width="200"
                    trigger="click">
                    <div class="block">
                      <el-timeline>
                        <el-timeline-item v-for="event in events" :key="event.id" :hide-timestamp="true">
                          {{event.title}}
                        </el-timeline-item>
                      </el-timeline>
                    </div>
                  <div class="timeline-head" slot="reference" :style="{background:colorList[index]}" ></div>
                </el-popover>
              </td>
            </tr>
            <tr>
              <td v-for="(timeline,index) in timelines" :key="timeline.id">
                <div class="timeline-period" :style="{color:colorList[index]}">{{timeline.occurPeriod}}</div>
              </td>
            </tr>
          </table>
        </div>
        <div class="little-timeline-event" >
          <table>
            <tr>
              <td v-for="(timeline,index) in timelines" :key="timeline.id">
                <el-popover placement="bottom-start" 
                    title="事件"
                    width="200"
                    trigger="click">
                    <div class="block">
                      <el-timeline>
                        <el-timeline-item v-for="event in events" :key="event.id" :hide-timestamp="true">
                          {{event.title}}
                        </el-timeline-item>
                      </el-timeline>
                    </div>
                  <div class="timeline-head" slot="reference" :style="{background:colorList[index]}" ></div>
                </el-popover>
              </td>
            </tr>
            <tr>
              <td v-for="(timeline,index) in timelines" :key="timeline.id">
                <div class="timeline-period" :style="{color:colorList[index]}">{{timeline.occurPeriod}}</div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      
    </el-header>
    <el-main>
      <div class="block">
        <el-timeline>
          <el-timeline-item v-for="timeline in timelines" :timestamp="timeline.sequen" placement="top"  :key="timeline.id">
            <el-card >
              <el-row>
                <el-col :span="16" class="event-into-scpoe">
                  <el-row class="event-into">
                    <el-col :span="8"><span>事件：</span><span>{{timeline.event}}</span></el-col>
                    <el-col :span="8"><span>时期：</span><span>{{timeline.occurPeriod}}</span></el-col>
                    <el-col :span="8"></el-col>
                  </el-row>
                  <el-row class="event-into">
                    <el-col>
                      <el-col :span="24"><span>参与人：</span>
                      <span>
                        <el-tag v-for="tag in timeline.players" :key="tag" :type="tag" style="margin-right:10px">{{tag}}</el-tag>
                      </span>
                    </el-col>
                    </el-col>
                  </el-row>
                  <el-row class="event-into">
                    <el-col>
                      <el-col :span="24"><span>概述：</span><span>{{timeline.briefIntro}}</span></el-col>
                    </el-col>
                  </el-row>
                  <el-row class="event-into">
                    <el-col>
                      <el-col :span="24"><span>详情：</span><span>{{timeline.detailIntro}}</span></el-col>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="8">
                  <el-image :src="timeline.eventPic" class="event-img"></el-image>
                </el-col>
              </el-row>
            </el-card>
          </el-timeline-item>
        </el-timeline>
        <el-button type="primary" icon="el-icon-plus" circle size="mini" @click="dialogEventVisible=true"></el-button>
      </div>
    </el-main>
    <el-dialog title="新增对话" :visible.sync="dialogEventVisible" custom-class="add-dialog">
            <el-form :model="eventModel" ref="eventModel" class="event-form" label-position="left">
                <el-form-item label="事件" class="title-label" >
                    <el-input v-model="eventModel.event" autocomplete="off" class="title-input"></el-input>
                </el-form-item>
                <el-form-item label="事件序列" class="title-label" >
                    <el-input v-model="eventModel.occurSequence" autocomplete="off" class="title-input"></el-input>
                </el-form-item>
                <el-form-item label="时期" class="title-label" >
                    <el-input v-model="eventModel.occurPeriod" autocomplete="off" class="title-input"></el-input>
                </el-form-item>
                <el-form-item label="参与人" class="content-label" >
                    <el-input v-model="eventModel.players" autocomplete="off" class="content-input"></el-input>
                </el-form-item>
                <el-form-item label="简介" class="content-label" >
                    <el-input type="textarea" autosize v-model="eventModel.briefIntro" autocomplete="off" class="content-input"></el-input>
                </el-form-item>
                <el-form-item label="详情" class="content-label" >
                    <el-input type="textarea" autosize v-model="eventModel.detailIntro" autocomplete="off" class="content-input"></el-input>
                </el-form-item>
                <el-form-item label="图片" class="content-label" >
                    <el-input v-model="eventModel.eventPic" autocomplete="off" @blur="showHeadImg(eventModel.eventPic)" class="content-input"></el-input>
                    <el-image v-if="eventModel.eventPicShow" :src="eventModel.eventPicShow" class="avatar"></el-image>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogSpeechVisible = false">取 消</el-button>
                <el-button type="primary" @click="addEvent">确 定</el-button>
            </div>
        </el-dialog>
  </el-container>
</template>



<script>
import { findTimeLineList,addTimeLineEvent } from "@/api/getData";
export default {
  inject:['reload'],
  data(){
    return{
      events:[{id:1,title:"凛冬将至"},{id:2,title:"国王大道"},{id:3,title:"雪诺大人"},
      {id:4,title:"残缺之躯"},{id:5,title:"狼狮之争"}],
      colorList:["#ed5f00","#f96b13","#e59d00","#e5d700","aae500","#23e500","#00e58f","#00cdde","#00a4de","#3c89ff","#6249ff",
                "#9349ff","#b649ff","#e340ff","#ff4082"],
      timelines:[
        {id:1,event:"万寿庆典",occurPeriod:"古神纪元",players:["耀","夜","冰","璃"],
        briefIntro:"弑神者-影在庆典上用莫忘将神杀死在王座",
        eventPic:"https://timgsa.baidu.com/timg?image#e5d700&quality=80&size=b9999_10000&sec=1573353680&di=72e6cf7e8a3a2d6b26edde6f88f7df78&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F26%2F20120526161530_k5CTS.jpeg"},
        {id:2,event:"万寿庆典",occurPeriod:"黎明纪元",players:["耀","夜","冰","璃"],
        briefIntro:"弑神者-影在庆典上用莫忘将神杀死在王座",
        eventPic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573353680&di=72e6cf7e8a3a2d6b26edde6f88f7df78&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F26%2F20120526161530_k5CTS.jpeg"},
        {id:3,event:"万寿庆典",occurPeriod:"黎明纪元",players:["耀","夜","冰","璃"],
        briefIntro:"弑神者-影在庆典上用莫忘将神杀死在王座",
        eventPic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573353680&di=72e6cf7e8a3a2d6b26edde6f88f7df78&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201205%2F26%2F20120526161530_k5CTS.jpeg"}
      ],
      dialogEventVisible:false,
      eventModel:{
        event:"",occurPeriod:"",occurSequence:"",players:"",briefIntro:"",detailIntro:"",eventPic:"",eventPicShow:""
      }
    }
  },
  created(){
      console.log("create")
      this.getList()
  },
  methods: {
      async getList(){
          const timeLineList= await findTimeLineList();
          console.log(timeLineList)
          this.timelines = timeLineList
      },
      showHeadImg:function(url) {
          console.log(url)
          this.eventModel.eventPicShow = url
      },
      async addEvent() {
        const response = await addTimeLineEvent(this.eventModel)
        console.log(response)
        if(response==1){
          this.$message({
            showClose: true,
            message: '添加成功',
            type: 'success'
          });
          this.dialogEventVisible = false
          this.reload()
        }else{
          this.$message({
            showClose: true,
            message: '添加失败',
            type: 'error'
          });
        }
      }
  },
}
</script>

<style scoped>
  .event-into-scpoe{
    text-align: left
  }
  .event-into{
    margin: 15px
  }
  .avatar{  
    width: 100px;
    height: 100px;
  }
  .event-img{
    width: 350px;

  }
  .little-timeline{
    background-color: black
  }
  .little-timeline-event{
    margin-top: 10px;
  }
  .timeline-head{
    width: 100px;
    height: 5px;
    background-color: aqua
  }
  .timeline-period{
    text-align: left;
    font-size: 12px;
    color:  aqua;
  }
</style>

<style>
  .event-form .el-form-item__content{
    float: left;
    width:500px
  }
  .title-lable .el-form-item__content{
    width: 40%
  }
  .content-label.el-form-item__content{
    width:500px
  }
</style>

