<template>
  <el-container>
    <el-header style="height:10px">时光轴</el-header>
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
                        <el-tag v-for="tag in timeline.persons" :key="tag" :type="tag" style="margin-right:10px">{{tag}}</el-tag>
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
                      <el-col :span="24"><span>详情：</span><span>heh </span></el-col>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="8">
                  <el-image
                          style="width:250px;height:250px"
                          :src="timeline.src"
                          fit="fill"></el-image>
                </el-col>
              </el-row>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-main>
  </el-container>
</template>



<script>
export default {
  data(){
    return{
      timelines:[
        {id:1,event:"万寿庆典",occurPeriod:"黎明纪元",persons:["耀","夜","冰","璃"],
        briefIntro:"弑神者-影在庆典上用莫忘将神杀死在王座",
        src:"https://pic3.zhimg.com/80/v2-e93e9ef44ac088e90a0baa3d4e635303_hd.jpg"},
        {id:1,event:"万寿庆典",occurPeriod:"黎明纪元",persons:["耀","夜","冰","璃"],
        briefIntro:"弑神者-影在庆典上用莫忘将神杀死在王座",
        src:"https://pic3.zhimg.com/80/v2-e93e9ef44ac088e90a0baa3d4e635303_hd.jpg"},
        {id:1,event:"万寿庆典",occurPeriod:"黎明纪元",persons:["耀","夜","冰","璃"],
        briefIntro:"弑神者-影在庆典上用莫忘将神杀死在王座",
        src:"https://pic3.zhimg.com/80/v2-e93e9ef44ac088e90a0baa3d4e635303_hd.jpg"}
      ]
    }
  }
}
</script>

<style scoped>
  .event-into-scpoe{
    text-align: left
  }
  .event-into{
    margin: 15px
  }
</style>

