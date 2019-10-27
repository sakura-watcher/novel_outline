<template>
    <div>
        <el-tabs type="border-card" class="out-tab">
            <el-tab-pane label="魔物">
                <el-card class="set-card" v-for="card in cardList" :key="card.id">
                    <el-image @click="showCardDetail(card.id)"
                        class="card-image"
                        :src="card.src" 
                        fit="fit">
                    </el-image>
                    <div class="card-name">{{card.name}}</div>
                </el-card>
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

        <el-dialog :title="cardDetailDialog.title" :visible.sync="showCardDetailFlag" custom-class="card-dialog" >
            <el-form :model="cardDetailDialog" class="card-detail-form">
                <el-row>
                    <el-col :span="8">
                        <el-image
                            class="card-detail-image"
                            :src="cardDetailDialog.backImg" 
                            fit="fit">
                        </el-image>
                    </el-col>
                    <el-col :span="16">
                        <el-form-item label="评分" class="form-label" :label-width="lableWidth">
                            <el-rate class="form-star"
                                :colors="colors"
                                disabled
                                show-score
                                v-model="cardDetailDialog.value"
                                score-template="{value}">
                            </el-rate>
                        </el-form-item>
                        <el-form-item label="进度" class="form-label" :label-width="lableWidth">
                            <el-progress class="card-progress" :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
                        </el-form-item>
                        <el-form-item label="灵术" class="form-label" :label-width="lableWidth">
                            <el-tag class="mana-tag" v-for="(tag,index) in cardDetailDialog.mana" :key="tag" :type="tagStyle[index%5]">{{tag}}</el-tag>
                        </el-form-item>
                        <el-form-item label="史记" class="form-label" :label-width="lableWidth">
                            <!-- <el-input v-model="cardDetailDialog.record" autocomplete="off" class="title-input"></el-input> -->
                            <el-popover class="form-popover"
                                placement="right"
                                width="200"
                                trigger="hover"
                                :content="cardDetailDialog.record">
                                <el-button slot="reference">{{cardDetailDialog.recordSub}}</el-button>
                            </el-popover>
                        </el-form-item>
                        <el-form-item label="简介" class="form-label" :label-width="lableWidth">
                            <el-popover class="form-popover"
                                placement="right"
                                width="200"
                                trigger="hover"
                                :content="cardDetailDialog.intro">
                                <el-button slot="reference">{{cardDetailDialog.introSub}}</el-button>
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
export default {
    data(){
        return {
            cardList:[
                {id:1,name:"寒冰领主",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146140696&di=6bf3600b88fbbc30cccdcb7c8973785c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f895554b4943000001bf724db0fa.jpg%401280w_1l_2o_100sh.jpg"},
                {id:2,name:"烈焰领主",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146323890&di=08468fd2f542d352af5f42eb4c1ecafe&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Fcrop.0.0.544.305.1000.562%2F006c4dTzgw1f8ofwrusj6j30f40bfgoe.jpg"},
                {id:3,name:"九头龙",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146368093&di=0128bb39fa7ca0c40bf9367f282fc4ae&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_70%2Cc_zoom%2Cw_640%2Fupload%2F20170123%2F9d269c6bfc7c49ecae3dfbac5f9b6da4_th.jpg"},
                {id:4,name:"恶魔",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146702867&di=cca39d457cf2e7d2157b63f6d37cd3ca&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F016710554c0dce000001bf72909b32.jpg%401280w_1l_2o_100sh.png"},
                {id:5,name:"魔龙",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146904469&di=0c705c0cba39a09df9438a4503992d91&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fc26ba0ec60b3409f0bda71385c8f6715bef4fc4e.jpg"},
            ],
            showCardDetailFlag:false,
            cardDetailDialog:{
                title:"怪物",value:5,evoProgress:50,mana:["冰风暴","无尽寒潮"],
                recordSub:"没有留下任何有关的记录，可能无法描述...",
                record:"没有留下任何有关的记录，可能无法描述，也可能见过的人都没能活下来",
                introSub:"黎明之后的极夜诞生的魔物，居住在万妖...",
                intro:"黎明之后的极夜诞生的魔物，居住在万妖塔最顶层，是极北之地绝对的领主",
                backImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572146140696&di=6bf3600b88fbbc30cccdcb7c8973785c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f895554b4943000001bf724db0fa.jpg%401280w_1l_2o_100sh.jpg"
            },
            colors:['#99A9BF', '#F7BA2A', '#FF9900'],
            lableWidth:"50px",
            indexImg:0,
            tagStyle:["","success","info","warning","danger"],
        }
    },
    methods: {
        showCardDetail:function(id){
            console.log(id)
            this.indexImg = id-1
            this.showCardDetailFlag = true
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
    }
    .form-popover{

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
</style>