<template>
    <div style="height:703px">
        <div class="back-div" >
            <el-image class="back-img"
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3010126827,3695107871&fm=26&gp=0.jpg"
                fit="fill"></el-image>
        </div>
        <el-container class="all-container">
            <el-header>Header</el-header>
            <el-main class="new-scope">
                <el-form :model="personForm"  ref="personForm" label-width="100px" class="person-form">
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="名字" class="form-lable">
                                <el-input v-model="personForm.name" class="form-input"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="别名" class="form-lable">
                                <el-input v-model="personForm.otherName" class="form-input"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="地位">
                                <el-radio-group v-model="personForm.type">
                                    <el-radio label=1>主角</el-radio>
                                    <el-radio label=2>配角</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="出生地" class="form-lable">
                                <el-input v-model="personForm.hometown" class="form-input"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="家族" class="form-lable">
                                <el-input v-model="personForm.family" class="form-input"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <el-form-item label="标签" class="form-lable" >
                                <el-input v-model="personForm.tag" placeholder="多个用;;隔开" class="form-input"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="简介" class="form-lable">
                                <el-input type="textarea" v-model="personForm.briefIntroduction" ></el-input>
                            </el-form-item>
                        </el-col>
                        
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="头像" class="form-lable">
                                <!-- <el-input v-model="personForm.headPic" @blur="showHeadImg(personForm.headPic)" class="form-input"></el-input> -->
                                <el-upload
                                    class="avatar-uploader"
                                    name="file"
                                    :action="action"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="personForm.imageUrlShow" :src="personForm.imageUrlShow" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <div style="color:red;margin-top: -30%;margin-left: 85%; ">(100*100)</div>
                                <!-- <el-image v-if="personForm.headPicShow" :src="personForm.headPicShow" class="avatar">
                                </el-image> -->
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="卡片图" class="form-lable">
                                <!-- <el-input v-model="personForm.backPic" @blur="showBackImg(personForm.backPic)" class="form-input"></el-input> -->
                                <el-upload
                                    class="avatar-uploader"
                                    :action="action"
                                    :show-file-list="false"
                                    :on-success="handleCardSuccess"
                                    :before-upload="beforeCardUpload">
                                    <img v-if="personForm.cardImgUrl" :src="personForm.cardImgUrl" class="card-img">
                                <i v-else class="el-icon-plus card-uploader-icon"></i>
                                </el-upload>
                                <div style="color:red;margin-top: -30%;margin-left: 85%;">(100*150)</div>
                                <!-- <el-image v-if="personForm.backPicShow" :src="personForm.backPicShow" class="card-img">
                                </el-image> -->
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-form-item>
                            <el-button type="primary" @click="submitPerson">立即创建</el-button>
                        </el-form-item>
                    </el-row>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { addPersonCard } from "@/api/getData";
export default {
    
    data(){
        return{
            action:"http://192.168.1.102:8080/novelPersonCard/uploadImg",
            personForm:{
                name:'',
                otherName:'',
                hometown:'',
                family:'',
                tag:'',
                briefIntroduction:'',
                headPic: '',
                backPic:'',
                // headPicShow:'',
                // backPicShow:'',
                type:1
            },
        }
    },
    mounted(){
        console.log("create ")
            
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.personForm.imageUrl = res
      },
      handleCardSuccess(res, file) {
        this.personForm.cardImgUrl = res
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      beforeCardUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传卡片图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传卡片图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      submitPerson:function(){
          console.log("submit")
          console.log(this.personForm)
          addPersonCard(this.personForm)
      },
      showHeadImg:function(url) {
          console.log(url)
          this.personForm.headPicShow = url
      },
      showBackImg:function(url) {
          console.log(url)
          this.personForm.backPicShow = url
      }
    }
}
</script>

<style lang="less">
    .back-div{
        width: 100%;
        height: 700px;
    }
    .back-img{
        width: 100%;
        height: 700px;
    }
    .all-container{
        margin-top: -700px;
    }
    .form-input{
        width: 200px;
        display: block;
        
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
    .avatar {
        width: 100px;
        height: 100px;
        display: block;
    }
    .card-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 99px;
        height: 132px;
        line-height: 132px;
        text-align: center;
    }
    .card-img {
        width: 75px;
        height: 100px;
        display: block;
    }
</style>

<style>
    .new-scope .el-form-item__label{
        color: #ffba71;
    }
</style>