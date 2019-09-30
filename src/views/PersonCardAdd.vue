<template>
    <el-container>
        <el-header>Header</el-header>
        <el-main>
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
                        <el-form-item label="座右铭" class="form-lable">
                            <el-input type="textarea" v-model="personForm.loveSelf" ></el-input>
                        </el-form-item>
                    </el-col>
                    
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="头像" class="form-lable">
                            <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="personForm.imageUrl" :src="personForm.imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="卡片图" class="form-lable">
                            <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleCardSuccess"
                            :before-upload="beforeCardUpload">
                            <img v-if="personForm.cardImgUrl" :src="personForm.cardImgUrl" class="card-img">
                            <i v-else class="el-icon-plus card-uploader-icon"></i>
                            </el-upload>
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
</template>

<script>
export default {
    
    data(){
        return{
            personForm:{
                name:'',
                otherName:'',
                hometown:'',
                family:'',
                tag:'',
                loveSelf:'',
                imageUrl: '',
                cardImgUrl:''
            },
            
        }
    },
    mounted(){
        console.log("create ")
            
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.personForm.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl)
      },
      handleCardSuccess(res, file) {
        this.personForm.cardImgUrl = URL.createObjectURL(file.raw);
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
      }
    }
}
</script>

<style lang="less">
    
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
        width: 134px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
    .card-img {
        width: 134px;
        height: 100px;
        display: block;
    }
</style>