<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu" style="margin-left:-20%"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-warning" style="margin-left:-20%"></i>提纲</template>
						<el-menu-item index="personCard">人物卡</el-menu-item>
						<el-menu-item index="timeline">时光轴</el-menu-item>
						<el-menu-item index="storyline">故事线</el-menu-item>
						<el-menu-item index="event">事件</el-menu-item>
						<el-menu-item index="map">地图</el-menu-item>
						<el-menu-item index="personRelation">人物关系链</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-warning" style="margin-left:-20%"></i>图鉴</template>
						<el-menu-item index="race">种族</el-menu-item>
						<el-menu-item index="person">人物</el-menu-item>
						<el-menu-item index="beast">魔兽</el-menu-item>
						<el-menu-item index="artifact">神器</el-menu-item>
						<el-menu-item index="scenes">场景</el-menu-item>
						<el-menu-item index="castle">城堡</el-menu-item>
						<el-menu-item index="force">势力</el-menu-item>
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



