<template>
    <div>
        <!-- <el-image 
            class="back-image"
            :src= outBackImg
            fit="fit">
        </el-image> -->
        <el-tabs type="border-card" class="out-tab">
            <el-tab-pane label="摘记">
                <el-row>
                    <el-row>
                        <el-col :span="8" :offset="8" style="height:25px"><el-divider><i class="el-icon-mobile-phone"></i></el-divider></el-col>
                    </el-row>
                    <el-row>
                        <el-col >
                            <table style="margin:10px auto">

                            <tr>
                                <td rowspan="2" style="vertical-align: top;font: 200% Trebuchet MS,Georgia,sans-serif;">“</td>
                                <td style="font-family: 標楷體,楷体,Hiragino Sans GB,微软雅黑;">别把湖中的倒影，错当成夜空的繁星</td>
                                <td rowspan="2" style="vertical-align: bottom;font: 200% Trebuchet MS,Georgia,sans-serif;">”</td>
                            </tr>
                            <tr>
                                <!-- <td></td> -->
                                <td style="font-family: 標楷體,楷体,Hiragino Sans GB,微软雅黑;font-weight: bold;text-align:right"><i class="el-icon-edit" ></i>杰洛特</td>
                                <!-- <td></td> -->
                            </tr>
                            </table>
                        </el-col>
                    </el-row>
                </el-row>

                <el-row style="margin-top:20px">
                    <el-col :span="5" class="category">
                        <el-collapse accordion>
                            <el-collapse-item v-for="cardList in cardCategoryList" :key="cardList.id"  :title="cardList.name">
                                <el-row v-for="card in cardList.cardList" :key="card.id" >
                                    <el-col :span="6">
                                        <el-image class="card-head-img" @click="showCardDetailPro(cardList.id,card.id)"
                                            :src="card.src" 
                                            fit="fit">
                                        </el-image>
                                    </el-col>
                                    <el-col :span="12" class="card-head-name">
                                        {{card.name}}
                                    </el-col>
                                </el-row>
                            </el-collapse-item>
                        </el-collapse>
                    </el-col>
                    <el-col :span="11" class="big-img">
                        <el-image class="card-big-img"
                            :src="cardDetail.bigImg" 
                            fit="fit">
                        </el-image>
                    </el-col>
                </el-row>
                <!-- <el-row v-for="note in notes" :key="note.id" class="note-row">
                    <el-row class="title-row">
                        <div>{{note.title}}</div>
                    </el-row>
                    <el-card class="word-card" v-for="(word,index) in note.words" :key="word.id" :style='{"background-color":randomColor[index%20]}'>
                        <el-col :span="16" class="content-col">
                            <div>{{word.content}}</div>
                        </el-col>
                        <el-col :span="6" class="intro-col">
                            <div>{{word.intro}}</div>
                        </el-col>
                    </el-card>
                </el-row> -->
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
            cardDetail:{
                title:"怪物",value:5,evoProgress:50,mana:["冰风暴","无尽寒潮"],
                bigImg:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3675646884,1185598338&fm=26&gp=0.jpg",
                records:[
                    {id:1,time:"灾变纪元",content:"诞生于古老的灾变纪元的无尽寒冰之中，后无故消失"},    
                    {id:2,time:"众神纪元",content:"在众神纪元中出现，追随混沌领主，决战古神"}
                ],
                intros:[
                    {id:1,name:"领地",content:"黎明之后的极夜诞生的魔物，居住在万妖塔最顶层，是极北之地绝对的领主"},
                    {id:2,name:"战斗方式",content:"擅长冰雪相关元素的掌控与调遣，发怒时，会召唤可以冰冻一切的极寒领域"},
                ],
                backImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146140696&di=6bf3600b88fbbc30cccdcb7c8973785c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f895554b4943000001bf724db0fa.jpg%401280w_1l_2o_100sh.jpg"
            },
            cardCategoryList:[
                {
                    id:1,
                    name:"领主",
                    cardList:[
                        {id:1,name:"寒冰领主",src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1336848143,3005937614&fm=26&gp=0.jpg"},
                        {id:2,name:"烈焰领主",src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=250701758,2446214639&fm=26&gp=0.jpg"},
                        {id:3,name:"恶魔领主",src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3325983907,3553279942&fm=26&gp=0.jpg"},
                    ]
                },
                {
                    id:2,
                    name:"hehe",
                    cardListPro:[
                        {id:1,name:"寒冰领主",src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1336848143,3005937614&fm=26&gp=0.jpg"},
                        {id:2,name:"烈焰领主",src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=250701758,2446214639&fm=26&gp=0.jpg"},
                        {id:3,name:"恶魔领主",src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3325983907,3553279942&fm=26&gp=0.jpg"},
                    ]  
                }
                
            ],
            cardBigImg:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3675646884,1185598338&fm=26&gp=0.jpg",
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
    /* .back-image{
        width: 100%;
        height: 1335px;
    } */
    /* .out-tab{
        margin-top: -1340px;
        height: 1340px;
    } */
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