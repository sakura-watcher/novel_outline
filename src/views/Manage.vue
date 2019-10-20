<template>
	<div class="manage_page fillcontain">
		<el-row style="min-height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%;">
				<el-menu :default-active="defaultActive"  
				background-color="#042a3d"
				text-color="#fff"
				active-text-color="#ffd04b"
				:unique-opened="true" 
				style="height:1600px" router>
					<el-menu-item index="manage"><i class="el-icon-s-home" style="margin-left:-20%"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-edit-outline" style="margin-left:-20%"></i>提纲区</template>
						<el-menu-item index="personCard">人物卡</el-menu-item>
						<el-menu-item index="timeline">时光轴</el-menu-item>
						<el-menu-item index="storyline">故事线</el-menu-item>
						<el-menu-item index="event">事件</el-menu-item>
						<el-menu-item index="openMap">地图</el-menu-item>
						<el-menu-item index="personRelation">人物关系链</el-menu-item>
						<el-menu-item index="otherCard">人物关系链</el-menu-item>
					</el-submenu>
					<!-- <el-submenu index="3">
						<template slot="title"><i class="el-icon-warning" style="margin-left:-20%"></i>图鉴</template>
						<el-menu-item index="race">种族</el-menu-item>
						<el-menu-item index="person">人物</el-menu-item>
						<el-menu-item index="beast">魔兽</el-menu-item>
						<el-menu-item index="artifact">神器</el-menu-item>
						<el-menu-item index="scenes">场景</el-menu-item>
						<el-menu-item index="castle">城堡</el-menu-item>
						<el-menu-item index="force">势力</el-menu-item>
					</el-submenu> -->
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-edit" style="margin-left:-20%"></i>编辑区</template>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-help" style="margin-left:-20%"></i>解构区</template>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-magic-stick" style="margin-left:-20%"></i>摘抄区</template>
						<el-menu-item index="inspiration">灵感</el-menu-item>
						<el-menu-item index="space">空间</el-menu-item>
						<el-menu-item index="topic">话题</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				console.log(this.$route.path)
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{
		
	}
</style>



