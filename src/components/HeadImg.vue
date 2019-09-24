<template>
     <el-row>
        <el-col :span="24">
            <div class="block">
                <el-avatar :size="50" >{{headValue}}</el-avatar>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name:"HeadImg",
    props:[
        'headValue'
    ]
}
</script>