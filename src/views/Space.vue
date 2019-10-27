<template>
    <div class="out-div">
        <el-tabs type="border-card" class="out-tab">
            <el-tab-pane label="影视">
                <el-row class="qh-row" v-for="cate in category" :key="cate.id" 
                :style="{backgroundImage: 'url(' + cate.backImg + ')'}">
                    <el-col :span="3" v-for="qh in cate.movieList" :key="qh.id" class="qh-co">
                        <el-card class="qh-card" body-style="padding: 0px;height:230px  ;background-color: #393979e0">
                            <el-image @click="showSpaceDetail(qh.id)"
                                class="qh-image"
                                :src="qh.headImg" 
                                fit="fit">
                            </el-image>
                            <div class="qh-name" @click="showSpaceDetail">
                                {{qh.name}}
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <!-- <el-row>
                    <el-col :span="3" v-for="qh in qhList" :key="qh.id" class="qh-co">
                        <el-card class="qh-card" body-style="padding: 0px;height:230px  ;background-color: #393979e0">
                            <img :src="qh.src" class="qh-image">
                            <div class="qh-name">
                                {{qh.name}}
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
                </el-row> -->
            </el-tab-pane>
            <el-tab-pane label="小说">小说</el-tab-pane>
            <el-tab-pane label="网易云音乐">网易云音乐</el-tab-pane>
            <el-tab-pane label="推荐">推荐</el-tab-pane>
            <el-tab-pane label="灵感">灵感</el-tab-pane>
            <el-tab-pane label="心情">心情</el-tab-pane>
            <el-tab-pane label="其他">其他</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { findMovieTypeList } from "@/api/getData";
export default {
    data(){
        return{
            category:[
                {id:1,name:"奇幻",backImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571487232185&di=94ab8cd32dc6dec9672b9a523bdd1a0d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F24%2F20160324233946_fLdxH.png",
                    movieList:[
                    {id:1,name:"千与千寻",src:"https://pic2.zhimg.com/v2-0cc4d3b291d298d61380745fc449f95d_b.jpg"},
                    {id:2,name:"魔戒",src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=148000342,1540419793&fm=26&gp=0.jpg"},
                    {id:3,name:"巫师",src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=171766956,1420758961&fm=26&gp=0.jpg"},
                    {id:4,name:"冰与火之歌",src:"https://pic4.zhimg.com/80/v2-9d84e236dc8cfd56b5b1317819366fe7_hd.jpg"}
                     ]
                },
                {id:2,name:"动漫",backImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571486855354&di=3a58d3d584d62c6b2ad39099c99e1fe7&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-4o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc83d70cf3bc79f3dccde5a0ab8a1cd11728b29c8.jpg",
                    movieList:[
                    {id:1,name:"千与千寻",src:"https://pic2.zhimg.com/v2-0cc4d3b291d298d61380745fc449f95d_b.jpg"},
                    {id:2,name:"魔戒",src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=148000342,1540419793&fm=26&gp=0.jpg"},
                    {id:3,name:"巫师",src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=171766956,1420758961&fm=26&gp=0.jpg"},
                    {id:4,name:"冰与火之歌",src:"https://pic4.zhimg.com/80/v2-9d84e236dc8cfd56b5b1317819366fe7_hd.jpg"}
                     ]
                },
                {id:3,name:"经典",backImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571488251649&di=a1159310859ca76c4e26697573ed7bc5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F19%2F20150619232038_HKQhk.jpeg",
                    movieList:[
                    {id:1,name:"千与千寻",src:"https://pic2.zhimg.com/v2-0cc4d3b291d298d61380745fc449f95d_b.jpg"},
                    {id:2,name:"魔戒",src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=148000342,1540419793&fm=26&gp=0.jpg"},
                    {id:3,name:"巫师",src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=171766956,1420758961&fm=26&gp=0.jpg"},
                    {id:4,name:"冰与火之歌",src:"https://pic4.zhimg.com/80/v2-9d84e236dc8cfd56b5b1317819366fe7_hd.jpg"}
                     ]
                },
                {id:4,name:"科幻",backImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571488131983&di=dd36ee6ed6552eeef8f07d742626404b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F3facf0a337d6e1f9e6595f018484bcf34189eff2.jpg",
                    movieList:[
                    {id:1,name:"千与千寻",src:"https://pic2.zhimg.com/v2-0cc4d3b291d298d61380745fc449f95d_b.jpg"},
                    {id:2,name:"魔戒",src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=148000342,1540419793&fm=26&gp=0.jpg"},
                    {id:3,name:"巫师",src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=171766956,1420758961&fm=26&gp=0.jpg"},
                    {id:4,name:"冰与火之歌",src:"https://pic4.zhimg.com/80/v2-9d84e236dc8cfd56b5b1317819366fe7_hd.jpg"}
                     ]
                },
                {id:5,name:"奇幻",backImg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571488587423&di=a49ef1624b183470059e74b7bc96bda8&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb999a9014c086e065c19d1d301087bf40bd1cbf1.jpg",
                    movieList:[
                    {id:1,name:"千与千寻",src:"https://pic2.zhimg.com/v2-0cc4d3b291d298d61380745fc449f95d_b.jpg"},
                    {id:2,name:"魔戒",src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=148000342,1540419793&fm=26&gp=0.jpg"},
                    {id:3,name:"巫师",src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=171766956,1420758961&fm=26&gp=0.jpg"},
                    {id:4,name:"冰与火之歌",src:"https://pic4.zhimg.com/80/v2-9d84e236dc8cfd56b5b1317819366fe7_hd.jpg"}
                     ]
                },
            ]
            
        }
    },
    created(){
        this.findMovieTypeList()
    },
    methods: {
        async findMovieTypeList(){
            const movieTypeList = await findMovieTypeList()
            console.log("movieTypeList")
            console.log(movieTypeList)
            this.category = movieTypeList

        },
        showSpaceDetail:function(id){
            console.log("go to space detail ....")
            this.$router.push({name:"spaceDetail",params:{id:id}})
        }
    },
}
</script>

<style scoped>
    .out-div{
        background-color: #232752
    }
    .out-tab{
        background-color: #232752
    }
    .qh-row{
        height: 270px;
        background-repeat: no-repeat;
        background-size:100%;
    }
    .qh-co{
        margin-top: 20px;
        margin-left: 20px;
    }
    .qh-image{
        width: 150.57px;
        height: 200px;
        background-color: grey;
        
    }
    .qh-name{
        color: #e2710df0;
        font-family:"楷体";
    }
    .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
        background: #172f47;
    }
</style>