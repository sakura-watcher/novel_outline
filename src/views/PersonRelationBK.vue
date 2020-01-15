<template>
    <el-container>
        <div id="gragh" style="width: 100%;height:600px">

        </div>
    </el-container>
</template>



<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.initGraph()
    },
    methods: {
        initGraph:function(){
            var echarts = require('echarts')
            var myChart = echarts.init(document.getElementById('gragh'))
           
            var nodes = [
                {name: '奈德·史塔克',x: 20,y: 0,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=245688539,3452881016&fm=26&gp=0.jpg'},
                {name: '凯特琳·徒利',x: 40,y: 0,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=226192131,3705046365&fm=26&gp=0.jpg'},
                {name: '罗伯·史塔克',x: 10,y: 20,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=690058946,1108310881&fm=26&gp=0.jpg'},
                {name: '珊莎·史塔克',x: 20,y: 20,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4050759229,2291201342&fm=26&gp=0.jpg'},
                {name: '艾丽娅·史塔克',x: 30,y: 20,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2454742065,4042994382&fm=26&gp=0.jpg'},
                {name: '布兰·史塔克',x: 40,y: 20,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1166651394,1245786560&fm=26&gp=0.jpg'},
                {name: '瑞肯·史塔克',x: 50,y: 20,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2666480232,3477728990&fm=26&gp=0.jpg'},

                {name: '泰温·兰尼斯特',x: 70,y: 0,value: "",categorie:1,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=245688539,3452881016&fm=26&gp=0.jpg'},
                {name: '詹姆·兰尼斯特',x: 60,y: 20,value: "",categorie:1,symbolSize:100,symbol:'image://https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=690058946,1108310881&fm=26&gp=0.jpg'},
                {name: '提利昂·兰尼斯特',x: 70,y: 20,value: "",categorie:1,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4050759229,2291201342&fm=26&gp=0.jpg'},
                {name: '瑟曦·兰尼斯特',x: 80,y: 20,value: "",categorie:1,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2454742065,4042994382&fm=26&gp=0.jpg'},
            ]
            var links = [
                {source: '奈德·史塔克',target: '凯特琳·徒利',intro:'夫妻'},
                {source: '奈德·史塔克',target: '罗伯·史塔克',intro:'长子'},
                {source: '奈德·史塔克',target: '珊莎·史塔克',intro:'长女'},
                {source: '奈德·史塔克',target: '艾丽娅·史塔克',intro:'次女'},
                {source: '奈德·史塔克',target: '布兰·史塔克',intro:'次子'},
                {source: '奈德·史塔克',target: '瑞肯·史塔克',intro:'幼子'},
                {source: '泰温·兰尼斯特',target: '詹姆·兰尼斯特',intro:'长子'},
                {source: '泰温·兰尼斯特',target: '提利昂·兰尼斯特',intro:'幼子'},
                {source: '泰温·兰尼斯特',target: '瑟曦·兰尼斯特',intro:'女儿'},
            ]
            var categories = [
                {name:"史塔克",icon:'image://https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2673175868,2732101001&fm=26&gp=0.jpg',
                textStyle: { color:'white',fontSize:18}},
                {name:"兰尼斯特",icon:'image://https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2673175868,2732101001&fm=26&gp=0.jpg',
                textStyle: { color:'white',fontSize:18}}
            ]
            var mark = [
                {name:'标记',coord: [30, 5]}
            ]

            var option = {
                title: {
                    text: 'Les Miserables',
                    subtext: 'Default layout',
                    top: 'bottom',
                    left: 'right'
                },
                tooltip: {},
                
                legend: [{
                    selectedMode: 'single',
                    itemWidth:50,
                    itemHeight:30,
                    width:50,
                    right:0,
                    height:50,
                    data: categories
                }],
                animationDuration: 1500,
                animationEasingUpdate: 'quinticInOut',
                series : [
                    {
                        name: 'Les Miserables',
                        intro:'aaa00',
                        type: 'graph',
                        layout: 'none',
                        data: nodes,
                        links: links,
                        categories: categories,
                        roam: true,
                        focusNodeAdjacency: true,
                        markPoint:{
                            data:mark,
                            symbol:'image://https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=591086854,2473990089&fm=26&gp=0.jpg',
                            label:{
                                formatter:function(param){
                                    return '{a|'+param.data.name+'}'
                                },
                            },
                            symbolKeepAspect:true,
                       },
                        itemStyle: {
                            normal: {
                                borderColor: '#b457ff',
                                borderWidth: 50,
                                shadowBlur: 10,
                                shadowColor: '#b457ff',
                                color: '#001c43'
                            }
                        },
                        label: {
                            show:true,
                            position: 'insideBottom',
                            formatter: '{b}'
                        },
                        // edgeSymbol: ['', 'arrow'],
                        // edgeSymbolSize :20,
                        edgeLabel:{
                            show:true,
                            formatter:'{a}', 
                            formatter:function(param){
                                return '{a|'+param.data.intro+'}'
                            },
                            rich:{
                                a:{
                                    align:'center',
                                    verticalAlign:'center',
                                    backgroundColor:'white',
                                    borderRadius:10,
                                    fontSize: 18,
                                    fontFamily: 'Microsoft YaHei',
                                    color: 'black',
                                    // lineHeight: 0,
                                    // shadowOffsetY :110,
                                    // padding:[0,10,0,10],
                                }
                            }
                        },
                        lineStyle: {
                            width:3,
                            type:'solid',
                            curveness:0,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'red' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'blue' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                        emphasis: {
                            itemStyle: {
                                
                            },
                            lineStyle: {
                                width: 10
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option)
        },
        getImgData:function(imgSrc, radius, center = { x: 0, y: 0}){
            return new Promise((resolve) => {
                const canvas = document.createElement('canvas');
                const contex = canvas.getContext('2d');
                const img = new Image();
                img.crossOrigin = '';
                const diameter = 2 * radius;
                img.onload = function() {
                    canvas.width = diameter;
                    canvas.height = diameter;
                    contex.clearRect(0, 0, diameter, diameter);
                    contex.save();
                    contex.beginPath();
                    contex.arc(radius, radius, radius, 0, 2 * Math.PI); //画出圆
                    contex.clip(); //裁剪上面的圆形
                    contex.drawImage(img, center.x - radius, center.y - radius, diameter, diameter, 0, 0, diameter, diameter); // 在刚刚裁剪的园上画图
                    contex.restore(); // 还原状态
                    resolve(canvas.toDataURL('image/png', 1))
                }
                img.src = imgSrc;
            })
        }   
    },
}
</script>


<style scoped>
    #gragh{
        background-color: #120c33
    }
</style>