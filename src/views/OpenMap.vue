<template>
    <el-container>
        <el-header>Header</el-header>
        <el-main>
            <!-- <el-row>
                <el-col v-for="index in 8" :key="index" :span="4" style="margin-left:10px;height:150px" >
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=510337549,2868024412&fm=26&gp=0.jpg" class="image" style="width:200px;heigh:150px">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row> -->
             <el-card 
                :body-style="{ padding: '0px' , width:'200px', height:'165px'}" 
                v-for="item in mapList" 
                :key="item.id" 
                @click="showBigMap(item.id)"
                style="float: left;margin-left:10px">
                <img :src="item.src" style="width:200px;heigh:150px">
                <div style="margin-top: 1px;">
                    <span>{{item.name}}</span>
                </div>
            </el-card>
        </el-main>
        <el-main>
            <el-card :body-style="{ padding: '0px' }" >
                <img :src="bigMapInfo.src" style="width:1260px;heigh:750px">
                <div style="margin-top: 1px;">
                    <span>{{bigMapInfo.detail}}</span>
                </div>
            </el-card>
        </el-main>
        <el-main>Main3</el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
export default {
    data(){
        return{
            mapList:[
                {id:1,name:"纳斯金匙",src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=510337549,2868024412&fm=26&gp=0.jpg"},
                {id:2,name:"叹息之地",src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=510337549,2868024412&fm=26&gp=0.jpg"},
                {id:3,name:"万妖谷",src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=510337549,2868024412&fm=26&gp=0.jpg"},
                {id:4,name:"守望者城邦",src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=510337549,2868024412&fm=26&gp=0.jpg"},
                {id:5,name:"横断山",src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=510337549,2868024412&fm=26&gp=0.jpg"}
            ],
            bigMapInfo:{
                src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=510337549,2868024412&fm=26&gp=0.jpg",
                detail:"hahaha"
            }
        }
    },
    methods:{
        showBigMap:function(index){
            console.log("index:"+index)


        }
    }
}
</script>