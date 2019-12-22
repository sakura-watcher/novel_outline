<template>
    <div class="card">
        <el-tabs type="border-card" class="out-tab">
            <el-tab-pane label="魔物">
                <!-- <el-card class="set-card" v-for="card in cardList" :key="card.id">
                    <el-image @click="showCardDetail(card.id)"
                        class="card-image"
                        :src="card.src" 
                        fit="fit">
                    </el-image>
                    <div class="card-name">{{card.name}}</div>
                </el-card> -->
                <el-row>
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
                    <el-col :span="8" class="detail">
                        <el-form :model="cardDetail" class="card-detail-form">
                            <el-row>
                               
                                <el-col :span="24">
                                    <el-form-item label="评分" class="form-label" :label-width="lableWidth">
                                        <el-rate class="form-star"
                                            :colors="colors"
                                            disabled
                                            show-score
                                            v-model="cardDetail.value"
                                            score-template="{value}">
                                        </el-rate>
                                    </el-form-item>
                                    <el-form-item label="进度" class="form-label" :label-width="lableWidth">
                                        <el-progress class="card-progress" :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
                                    </el-form-item>
                                    <el-form-item label="灵术" class="form-label" :label-width="lableWidth">
                                        <!-- :type="tagStyle[index%5]" -->
                                        <el-tag class="mana-tag" v-for="tag in cardDetail.mana" :key="tag" >{{tag}}</el-tag>
                                    </el-form-item>
                                    <el-form-item label="简介" class="form-label" :label-width="lableWidth">
                                        <!-- <el-popover class="form-popover"
                                            placement="right"
                                            width="200"
                                            trigger="hover"
                                            :content="cardDetail.intro">
                                            <el-button slot="reference">{{cardDetail.introSub}}</el-button>
                                        </el-popover> -->
                                        
                                        <el-collapse accordion class="card-intro">
                                            <el-collapse-item v-for="intro in cardDetail.intros" :key="intro.id"  :title="intro.name">
                                                <div class="history-content">{{intro.content}}</div>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </el-form-item>
                                    <el-form-item label="史记" class="form-label" :label-width="lableWidth">
                                        <!-- <el-input v-model="cardDetail.record" autocomplete="off" class="title-input"></el-input> -->
                                        <!-- <el-popover class="form-popover"
                                            placement="right"
                                            width="200"
                                            trigger="hover"
                                            :content="cardDetail.record">
                                            <el-button slot="reference">{{cardDetail.recordSub}}</el-button>
                                        </el-popover> -->
                                        <el-timeline class="history-timeline">
                                            <el-timeline-item v-for="record in cardDetail.records" :key="record.id" 
                                            :timestamp="record.time" placement="top" :hide-timestamp="false">
                                                <div class="history-content">{{record.content}}</div>
                                            </el-timeline-item>
                                        </el-timeline>
                                    </el-form-item>
                                    
                                </el-col>
                            </el-row>
                            
                            
                        </el-form>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="场景">
                <el-card class="set-card" v-for="card in cardList" :key="card.id">
                    <el-image @click="showCardDetail(card.id)"
                        class="card-image"
                        :src="card.src" 
                        fit="fit">
                    </el-image>
                    <div class="card-name">{{card.name}}</div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="种族">
                <el-card class="set-card" v-for="card in cardList" :key="card.id">
                    <el-image @click="showCardDetail(card.id)"
                        class="card-image"
                        :src="card.src" 
                        fit="fit">
                    </el-image>
                    <div class="card-name">{{card.name}}</div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="家族">
                <el-card class="set-card" v-for="card in cardList" :key="card.id">
                    <el-image @click="showCardDetail(card.id)"
                        class="card-image"
                        :src="card.src" 
                        fit="fit">
                    </el-image>
                    <div class="card-name">{{card.name}}</div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="神器">
                <el-card class="set-card" v-for="card in cardList" :key="card.id">
                    <el-image @click="showCardDetail(card.id)"
                        class="card-image"
                        :src="card.src" 
                        fit="fit">
                    </el-image>
                    <div class="card-name">{{card.name}}</div>
                </el-card>
            </el-tab-pane>
        </el-tabs>

        <el-dialog :title="cardDetail.title" :visible.sync="showCardDetailFlag" custom-class="card-dialog" >
            <el-form :model="cardDetail" class="card-detail-form">
                <el-row>
                    <el-col :span="8">
                        <el-image
                            class="card-detail-image"
                            :src="cardDetail.backImg" 
                            fit="fit">
                        </el-image>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="评分" class="form-label" :label-width="lableWidth">
                            <el-rate class="form-star"
                                :colors="colors"
                                disabled
                                show-score
                                v-model="cardDetail.value"
                                score-template="{value}">
                            </el-rate>
                        </el-form-item>
                        <el-form-item label="进度" class="form-label" :label-width="lableWidth">
                            <el-progress class="card-progress" :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
                        </el-form-item>
                        <el-form-item label="灵术" class="form-label" :label-width="lableWidth">
                            <el-tag class="mana-tag" v-for="(tag,index) in cardDetail.mana" :key="tag" :type="tagStyle[index%5]">{{tag}}</el-tag>
                        </el-form-item>
                        <el-form-item label="史记" class="form-label" :label-width="lableWidth">
                            <!-- <el-input v-model="cardDetail.record" autocomplete="off" class="title-input"></el-input> -->
                            <el-popover class="form-popover"
                                placement="right"
                                width="200"
                                trigger="hover"
                                :content="cardDetail.record">
                                <el-button slot="reference">{{cardDetail.recordSub}}</el-button>
                            </el-popover>
                        </el-form-item>
                        <el-form-item label="简介" class="form-label" :label-width="lableWidth">
                            <el-popover class="form-popover"
                                placement="right"
                                width="200"
                                trigger="hover"
                                :content="cardDetail.intro">
                                <el-button slot="reference">{{cardDetail.introSub}}</el-button>
                            </el-popover>
                        </el-form-item>
                    </el-col>
                </el-row>
                
                 
            </el-form>
            <!-- <el-image
                class="card-detail-back-image"
                :src="cardList[indexImg].src" 
                fit="fit">
            </el-image> -->
            
            <!-- <div slot="footer" class="dialog-footer">
                <el-button @click="dialogBiographyVisible = false">取 消</el-button>
                <el-button type="primary" @click="cardDetailInfo">确 定</el-button>
            </div> -->
        </el-dialog>

    </div>
</template>



<script>
import { getCategoryList ,getCardDetail} from "@/api/getData";
export default {
    data(){
        return {
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
            cardList:[
                {id:1,name:"寒冰领主",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146140696&di=6bf3600b88fbbc30cccdcb7c8973785c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f895554b4943000001bf724db0fa.jpg%401280w_1l_2o_100sh.jpg"},
                {id:2,name:"烈焰领主",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146323890&di=08468fd2f542d352af5f42eb4c1ecafe&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Fcrop.0.0.544.305.1000.562%2F006c4dTzgw1f8ofwrusj6j30f40bfgoe.jpg"},
                {id:3,name:"九头龙",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146368093&di=0128bb39fa7ca0c40bf9367f282fc4ae&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_70%2Cc_zoom%2Cw_640%2Fupload%2F20170123%2F9d269c6bfc7c49ecae3dfbac5f9b6da4_th.jpg"},
                {id:4,name:"恶魔",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146702867&di=cca39d457cf2e7d2157b63f6d37cd3ca&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F016710554c0dce000001bf72909b32.jpg%401280w_1l_2o_100sh.png"},
                {id:5,name:"魔龙",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146904469&di=0c705c0cba39a09df9438a4503992d91&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fc26ba0ec60b3409f0bda71385c8f6715bef4fc4e.jpg"},
            ],
            showCardDetailFlag:false,
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
            colors:['#99A9BF', '#F7BA2A', '#FF9900'],
            lableWidth:"50px",
            indexImg:0,
            tagStyle:["","success","info","warning","danger"],
        }
    },
    created(){
        console.log("create")
        this.getCategoryList()
    },
    methods: {
        async getCategoryList(){
            const categoryList = await getCategoryList({type:"1"});
            console.log(categoryList)
            this.cardCategoryList = categoryList
        },
        async showCardDetail(id){
            console.log(id)
            this.indexImg = id-1
            this.showCardDetailFlag = true
        },
        async showCardDetailPro(id){
            console.log(id)
            const cardDetail = await getCardDetail({id:id})
            console.log(cardDetail)
            this.cardDetail = cardDetail
            // this.cardBigImg = this.cardCategoryList[categoryId-1].cardList[id-1].src
        },
        cardDetailInfo:function(){
            console.log("change")
        }
    },
}
</script>


<style scoped>
    .set-card{
        margin-left: 10px;
        height: 200px;
        float: left;
    }
    .card-image{
        height: 200px;
        position: inherit
    }
    .card-name{
        margin-top: -200px;
        text-align: right;
        color: #00ffde;
        font-weight: bold;
        font-family: "楷体";
        font-size: 120%
    }
    .card-detail-image{
        width: 240px;
    }
    .card-detail-back-image{
        opacity: 0.5;
        margin-top: -54px;
    }
    .card-detail-form{
    }
    .form-star{
        text-align: left;
        margin-top: 10px;
    }
    .card-progress{
        margin-top: 8px;
        width: 80%;
    }
    .mana-tag{
        margin-left: 10px;
        background-color: #001c3a;
        border-color: #806500;
        color: #ff7800;
    }
    
    .form-popover{

    }
    .card-head-img{
        width: 57px;
        height: auto;
    }
    .card-big-img{
        width: 500px;
        height: auto;
    }
    .card-head-name{
        color: #b26f00;
        height: 60px;
        line-height: 60px;
        text-align: left;
    }
    .history-content{
        color: grey;
        line-height: 23px;
    }
    .card-intro{
        border-top: 0px solid #665900;
    }
</style>

<style>
    .card-image .el-image__inner{
        height: 200px;
        width: auto;
    }
    .set-card .el-card__body{
        padding: 0px;
    }
    .card-detail-image .el-image__inner{
        width: 240px;
        height: auto;
    }
    .card-dialog .el-dialog__body{
        padding: 0px;
    }
    .card-detail-back-image .el-image__inner{
        width: 760px;
        height: auto;
    }
    .card-detail-form .el-form-item{
        margin-bottom: 0px;
    }
    .form-label .el-form-item__content{
        text-align: left
    }
    .el-popover__reference{
        border: 0px;
    }
    .el-tabs__content{
        background-color: #000000e8;
    }
    .el-tabs__content{
        height: 1000px;
    }
    .category .el-collapse{
        border-top: 1px solid #665900;
    }
    .category .el-collapse-item__header{
        color: #efcf27;
        background-color: #fff0;
        border-bottom: 1px solid #665900;
    }
    .category .el-collapse-item__wrap{
        background-color: black
    }
    .card .el-tabs--border-card>.el-tabs__header {
        background-color: black;
        border-bottom: 1px solid #452c00;
        margin: 0;
    }
    .card .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
        color: #f2ff40;
        background-color: #060951;
        border-right-color: #DCDFE6;
        border-left-color: #DCDFE6;
    }
    .history-timeline{
        margin-left: -12%;
        margin-top: 10px;
        overflow: auto;
        height: 300px;
    }
    .history-timeline .el-timeline-item__node{
        background-color: #746000;
    }
    .history-timeline .el-timeline-item__tail{
        border-left: 2px solid #957c02;
    }
    .history-timeline .el-card{
        border: 1px solid #867d06;
        background-color: #2e2901;
        color: #ffffff;
    }
    .history-timeline .el-timeline-item{
        margin-right: 10px;
    }
    .history-timeline .el-timeline-item__timestamp{
        color: #ffffff
    }
    .card-intro .el-collapse-item__header{
        color: #fffefe;
        border-bottom: 1px solid #847402;
        height: 32px;
        line-height: 32px;
    } 
    .card-intro .el-collapse-item__content{
        padding-bottom: 10px;
    }
    .card-intro .el-collapse-item__header{
        background-color:black; 
    }
    .card-intro .el-collapse-item__wrap{
        background-color: black
    }
    .card-intro .el-tabs--border-card>.el-tabs__header {
        background-color: black;
        border-bottom: 1px solid #452c00;
        margin: 0;
    }
</style>