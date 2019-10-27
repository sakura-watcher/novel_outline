<template>
    <div>
        <el-image 
            class="back-image"
            :src= outBackImg
            fit="fit">
        </el-image>
        <div class="main-card">
            <el-row class="row-card">
                <el-card v-for="card in cardList" :key="card.id"
                    class="framework-card" body-style="padding: 0px;height:230px ">
                    <el-image @click="showFrameworkDetail(card.id)"
                        class="card-image"
                        :src="card.headImg" 
                        fit="fit">
                    </el-image>
                    <div class="card-name" @click="showFrameworkDetail(card.id)">
                        {{card.name}}
                    </div>
                </el-card>
            </el-row>
        </div>
    </div>
</template>

<script>
import { findFrameworkCardList } from "@/api/getData";
export default {
    data(){
        return{
            outBackImg:"https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80",
            cardList:[
                {id:1,name:"千与千寻",headImg:"https://pic2.zhimg.com/v2-0cc4d3b291d298d61380745fc449f95d_b.jpg"},
                {id:2,name:"魔戒",headImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=148000342,1540419793&fm=26&gp=0.jpg"},
                {id:3,name:"巫师",headImg:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=171766956,1420758961&fm=26&gp=0.jpg"},
                {id:4,name:"冰与火之歌",headImg:"https://pic4.zhimg.com/80/v2-9d84e236dc8cfd56b5b1317819366fe7_hd.jpg"},
                {id:5,name:"千与千寻",headImg:"https://pic2.zhimg.com/v2-0cc4d3b291d298d61380745fc449f95d_b.jpg"},
                {id:6,name:"魔戒",headImg:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=148000342,1540419793&fm=26&gp=0.jpg"},
                {id:7,name:"巫师",headImg:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=171766956,1420758961&fm=26&gp=0.jpg"},
                {id:8,name:"冰与火之歌",headImg:"https://pic4.zhimg.com/80/v2-9d84e236dc8cfd56b5b1317819366fe7_hd.jpg"}
            ]
        }
    },
    created(){
        this.findCardList()
    },
    methods: {
        async findCardList(){
            const frameworkCardList = await findFrameworkCardList()
            console.log("frameworkCardList")
            console.log(frameworkCardList)
            this.cardList = frameworkCardList

        },
        showFrameworkDetail:function(id){
            console.log("go to framework detail ....")
            this.$router.push({name:"frameworkDetail",params:{id:id}})
        }
    },
}
</script>

<style scoped>
    .back-image{
        height: 1335px;
    }
    .main-card{
        margin-top: -1340px;
    }
    .row-card{
        background-color: #fdfdfd40;
        height: 1340px;
    }
    .framework-card{
        width: 150px;
        border: 0px;
        float: left;
        background-color: #505457;
        margin-left: 80px;
        margin-top: 20px;
        color: #ff1100cb
    }
    .card-image{
        width: 150.57px;
        height: 200px;
        
    }
</style>