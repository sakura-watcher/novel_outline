<template>
    <div>
        <el-image 
            class="back-image"
            :src= outBackImg
            fit="fit">
        </el-image>
        <el-tabs type="border-card" class="out-tab">
            <el-tab-pane label="摘记">
                <el-row v-for="note in notes" :key="note.id" class="note-row">
                    <el-row class="title-row">
                        <div>{{note.title}}</div>
                    </el-row>
                    <el-card class="word-card" v-for="(word,index) in note.words" :key="word.id" :style='{"background-color":randomColor[index%20]}'>
                        <el-col :span="16" class="content-col">
                            <div>{{word.content}}</div>
                            <!-- <el-collapse v-model="activeNames" @change="handleChange">
                                <el-collapse-item title="一致性 Consistency" name="1">
                                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                </el-collapse-item>
                            </el-collapse> -->
                        </el-col>
                        <el-col :span="6" class="intro-col">
                            <div>{{word.intro}}</div>
                        </el-col>
                    </el-card>
                    <!-- <el-row class="word-row" v-for="word in note.words" :key="word.id">
                        <el-col :span="16" class="content-col">
                            <div>{{word.content}}</div>
                        </el-col>
                        <el-col :span="8" class="intro-col">
                            <div>{{word.intro}}</div>
                        </el-col>
                    </el-row> -->
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="故事线">故事线</el-tab-pane>
            <el-tab-pane label="人物网">人物网</el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
import { findNoteDetail } from "@/api/getData";
export default {
    data(){
        return {
            outBackImg:"https://images.unsplash.com/photo-1529912626516-e58b23f44f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            notes:[
                {id:1,title:"关于命运",words:[
                    {id:1,content:"她那时候还太年轻，不知道所有命运赠送的礼物，早已在暗中标好了价格。",intro:"命运的礼物"},
                    {id:2,content:"神可以安排人的命运，但神也有自己的命运",intro:"神的命运"},
                    {id:3,content:"神可以安排人的命运，但神也有自己的命运神可以安排人的命运，但神也有自己的命运神可以安排人的命运，但神也有自己的命运",intro:"神的命运神的命运神的命运神的命运"}
                ]},
                {id:2,title:"关于命运",words:[
                    {id:1,content:"她那时候还太年轻，不知道所有命运赠送的礼物，早已在暗中标好了价格。",intro:"命运的礼物"},
                    {id:2,content:"神可以安排人的命运，但神也有自己的命运",intro:"神的命运"},
                    {id:3,content:"神可以安排人的命运，但神也有自己的命运神可以安排人的命运，但神也有自己的命运神可以安排人的命运，但神也有自己的命运",intro:"神的命运神的命运神的命运神的命运"}
                ]},
                {id:3,title:"关于命运",words:[
                    {id:1,content:"她那时候还太年轻，不知道所有命运赠送的礼物，早已在暗中标好了价格。",intro:"命运的礼物"},
                    {id:2,content:"神可以安排人的命运，但神也有自己的命运",intro:"神的命运"},
                    {id:3,content:"神可以安排人的命运，但神也有自己的命运神可以安排人的命运，但神也有自己的命运神可以安排人的命运，但神也有自己的命运",intro:"神的命运神的命运神的命运神的命运"}
                ]}
            ],
            randomColor:["#FF008830","#FF000030","#FF551130","#FF880030","#FFBB00","#FFFF00","#BBFF00","#77FF00","#00FF00","#00FF99","#00FFCC",
                "#00FFFF","#00BBFF","#0066FF","#0000FF","#5500FF","#7700FF","#9900FF","#CC00FF","#FF00FF"
            ],
            cardBackStyle:{
                background:"#BBFF00"
            }
        }
    },
    created(){
        console.log("detail。。。")
        console.log(this.$route.params.id)
        this.initNoteDetail({id:this.$route.params.id})
    },
    methods: {
        async initNoteDetail(id){
            const noteDetail = await findNoteDetail(id)
            console.log(noteDetail)
            this.notes = noteDetail
        }
    },
}
</script>

<style scoped>
    .back-image{
        width: 100%;
        height: 1335px;
    }
    .out-tab{
        margin-top: -1340px;
        height: 1340px;
    }
    .note-row{
        margin-top: 20px;
        margin-left: 40px;
        background-color: rgba(197, 193, 220, 0.671);
    }
    .title-row{
        text-align: left;
        margin: 10px;
        margin-left: 50px;
        font-family:"楷体";
        font-weight: bold;
        font-size: 150%;

    }
    .word-card{
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0px;
        height: 100px;
        border-radius: 60px 
    }
    .content-col{
        margin-left: 20px;
        margin-right: 20px;
        text-align: left;
        font-size: 120%;
        font-weight: bold;
    }

    .intro-col{
        margin-left: 10px;
        text-align: left;
        font-size: 120%;
    }
</style>