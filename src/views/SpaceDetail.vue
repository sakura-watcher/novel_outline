<template>
    <div>
        <el-image 
            class="back-image"
            :src="movieInfo.backImg" 
            fit="fit">
        </el-image>
        <div class="main-content">
            <el-row class="movie-info-row">
                <el-col :span="3">  
                    <el-image 
                        class="movie-image"
                        :src="movieInfo.headImg" 
                        fit="fit">
                    </el-image>
                </el-col>
                <el-col :span="21" class="movie-info">
                    <el-row class="movie-info-row">
                        <el-col :span="24"><span>名字：</span><span> {{movieInfo.name}}</span></el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row class="movie-info-row">
                        <el-col :span="24">
                           <span>角色：</span>
                           <el-tag class="main-role-tag" v-for="(tag,index) in movieInfo.mainRole" :key="tag" :type="tagStyle[index%5]">{{tag}}</el-tag>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row class="movie-info-row">
                        <el-col :span="24"><span>简介：</span><span> {{movieInfo.briefIntro}}</span></el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row >
                <!-- <el-col :span="12"> -->
                    <el-card class="sentence-card" v-for="sentence in movieInfo.sentenceList" :key="sentence.id">
                        <div>
                        <el-row class="content-row">
                            <span class="symbol-left">“</span>
                            <span class="sentence-content">{{sentence.content}}</span>
                            
                        </el-row>
                        <el-row>
                            <!-- <span>
                                --
                            </span>
                            <span>
                                {{sentence.source}}
                            </span> -->
                            <span class="symbol-right">”</span>
                            <div class="sentence-source">
                                <i class="el-icon-edit"></i>
                                {{sentence.source}}
                            </div>
                        </el-row>
                        </div>
                    </el-card>
                <!-- </el-col> -->
                <!-- <el-col :span="12">
                    <el-card class="sentence-card">
                        <el-row>
                            <span class="symbol-left">“</span>
                            <span class="sentence-content">{{sentence.content}}</span>
                            <span class="symbol-right">”</span>
                        </el-row>
                        <el-row>
                            <span>
                                ----
                            </span>
                            <span>
                                {{sentence.source}}
                            </span>
                        </el-row>
                    </el-card>
                </el-col> -->
            </el-row>
            <el-row style="height:50px">
                
            </el-row>
            <el-row style="height:50px">
                <el-pagination
                    @current-change="changePage"
                    :hide-on-single-page="true"
                    :page-size="pagination.pageSize"
                    layout="prev, pager, next"
                    :total="pagination.total">
                </el-pagination>
            </el-row >
        </div>
    </div>
</template>


<script>
import { findMovieDetail } from "@/api/getData";
export default {
    data(){
        return{
            movieInfo:{
                id:1,
                name:"权力的游戏",
                headImg:"https://pic4.zhimg.com/80/v2-9d84e236dc8cfd56b5b1317819366fe7_hd.jpg",
                backImg:"https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80",
                mainRole:["艾丽娅","布兰","囧","詹姆","丹妮莉丝"],
                briefIntro:"龙与狼不得不说的故事",
                sentenceList:[
                    {id:1,source:"奈德·史塔克",content:"当大雪降下，冷风吹起，独行狼死，群聚狼生。"},
                    {id:2,source:"奈德·史塔克",content:"当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可"},
                    {id:3,source:"奈德·史塔克",content:"当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可以争吵，但一到冬天，我们便必须保卫彼此，互相取暖，共享力量。当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可以争吵，但一到冬天，我们便必须保卫彼此，互相取暖，共享力量。"},
                    {id:4,source:"奈德·史塔克",content:"当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可以争吵，但一到冬天，我们便必须保卫彼此，互相取暖，共享力量。"},
                    {id:5,source:"奈德·史塔克",content:"当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可以争吵，但一到冬天，我们便必须保卫彼此，互相取暖，共享力量。"},
                    {id:6,source:"奈德·史塔克",content:"当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可以争吵，但一到冬天，我们便必须保卫彼此，互相取暖，共享力量。"},
                    {id:7,source:"奈德·史塔克",content:"当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可以争吵，但一到冬天，我们便必须保卫彼此，互相取暖，共享力量。"},
                    {id:8,source:"奈德·史塔克",content:"当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可以争吵，但一到冬天，我们便必须保卫彼此，互相取暖，共享力量。"},
                    {id:9,source:"奈德·史塔克",content:"当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可以争吵，但一到冬天，我们便必须保卫彼此，互相取暖，共享力量。"},
                    {id:10,source:"奈德·史塔克",content:"当大雪降下，冷风吹起，独行狼死，群聚狼生。夏天时可以争吵，但一到冬天，我们便必须保卫彼此，互相取暖，共享力量。"}
                ]
            },
            tagStyle:["","success","info","warning","danger"],
            pagination:{
                pageSize:10,total:10
            }
        }
    },
    created(){
        console.log("detail。。。")
        console.log(this.$route.params.id)
        this.initMovieDetail({id:this.$route.params.id})
    },
    methods: {
        async initMovieDetail(id){
            const movieDetail = await findMovieDetail(id)
            console.log(movieDetail)
            this.movieInfo = movieDetail
        },
        changePage:function(pageIndex){
            var size = this.pagination.pageSize
            console.log("pageIndex:"+pageIndex +"  size:"+size)
        }
    }
}
</script>


<style scoped>
    .back-image{
        height: 1335px;
    }
    .main-content{
        margin-top: -1335px
    }
    .movie-info{
        color: #000000;
        background-color: #ffffff5e;
        font-weight: bold;
        height: 200px;
    }
    .movie-info-row{    
        text-align: left;
        margin-top: 10px;
        margin-left: 10px;
    }
    .symbol-left{
        font-size: 200%;
    }
    .sentence-content{
        font-family:"楷体";
        font-weight: bold;
    }
    .symbol-right{
        margin-top: 10px;
        font-size: 200%;
    }
    .content-row{
        text-align: left;
    }
    .sentence-card{
        border: 0px;
        width: 40%;
        float: left;
        margin: 10px;
        height: 185px;
        background-color: #cce8ffc9
    }
    .sentence-source{
        font-family:"楷体";
        margin-right: -75%;
        font-weight: bold; 
    }
    .main-role-tag{
        margin-left: 10px;
    }
    .el-icon-arrow-left {
        font-size: 32px;
    }
    .number .active{
        font-size: 120%;
    }
    .number{
        font-size: 110%;
    }
</style>