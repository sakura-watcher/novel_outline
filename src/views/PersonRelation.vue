<template>
    <el-container>
        <div id="gragh" style="width: 100%;height:600px">

        </div>
    </el-container>
</template>



<script>
import { getPersonRelationByFamily } from "@/api/getData";
export default {
    data(){
        return{
            src:'../assets/git-logo.png',
            personRelation:{
                nodeList:[],
                linkeList:[],
                categoryList:[]
            }
        }
    },
    mounted(){
        console.log("sss")
        this.getPersonRelationByFamily(1)
    },
    methods: {
        async getPersonRelationByFamily(id){
            const personRelation = await getPersonRelationByFamily({familyId:id})
            console.log(personRelation)
            this.personRelation = personRelation
            this.initGraph()
        },
        initGraph:function(){
            var echarts = require('echarts')
            var myChart = echarts.init(document.getElementById('gragh'))
           
            // var nodes = [
            //     {name: '奈德·史塔克',x: 20,y: 0,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=245688539,3452881016&fm=26&gp=0.jpg'},
            //     {name: '凯特琳·徒利',x: 40,y: 0,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=226192131,3705046365&fm=26&gp=0.jpg'},
            //     {name: '罗伯·史塔克',x: 10,y: 20,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=690058946,1108310881&fm=26&gp=0.jpg'},
            //     {name: '珊莎·史塔克',x: 20,y: 20,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4050759229,2291201342&fm=26&gp=0.jpg'},
            //     {name: '艾丽娅·史塔克',x: 30,y: 20,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2454742065,4042994382&fm=26&gp=0.jpg'},
            //     {name: '布兰·史塔克',x: 40,y: 20,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1166651394,1245786560&fm=26&gp=0.jpg'},
            //     {name: '瑞肯·史塔克',x: 50,y: 20,value: "",categorie:0,symbolSize:100,symbol:'image://https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2666480232,3477728990&fm=26&gp=0.jpg'},

            //     {name: '泰温·兰尼斯特',x: 70,y: 0,value: "",categorie:1,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=245688539,3452881016&fm=26&gp=0.jpg'},
            //     {name: '詹姆·兰尼斯特',x: 60,y: 20,value: "",categorie:1,symbolSize:100,symbol:'image://https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=690058946,1108310881&fm=26&gp=0.jpg'},
            //     {name: '提利昂·兰尼斯特',x: 70,y: 20,value: "",categorie:1,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4050759229,2291201342&fm=26&gp=0.jpg'},
            //     {name: '瑟曦·兰尼斯特',x: 80,y: 20,value: "",categorie:1,symbolSize:100,symbol:'image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2454742065,4042994382&fm=26&gp=0.jpg'},
            // ]
            // var links = [
            //     {source: '奈德·史塔克',target: '凯特琳·徒利',intro:'夫妻'},
            //     {source: '奈德·史塔克',target: '罗伯·史塔克',intro:'长子'},
            //     {source: '奈德·史塔克',target: '珊莎·史塔克',intro:'长女'},
            //     {source: '奈德·史塔克',target: '艾丽娅·史塔克',intro:'次女'},
            //     {source: '奈德·史塔克',target: '布兰·史塔克',intro:'次子'},
            //     {source: '奈德·史塔克',target: '瑞肯·史塔克',intro:'幼子'},
            //     {source: '泰温·兰尼斯特',target: '詹姆·兰尼斯特',intro:'长子'},
            //     {source: '泰温·兰尼斯特',target: '提利昂·兰尼斯特',intro:'幼子'},
            //     {source: '泰温·兰尼斯特',target: '瑟曦·兰尼斯特',intro:'女儿'},
            // ]
            var nodes = [
                {id:'1',name: '奈德·史塔克',x: 20,y: 1.000,categorie:0,symbolSize:100,symbol:'image://../../img/icons/git-logo.png'},
                {id:'2',name: '凯特琳·徒利',x: 100,y: 1.001,categorie:0,symbolSize:100,symbol:'image://../../img/icons/git-logo.png'},
                {id:'3',name: '罗伯·史塔克',x: 100,y: 100,categorie:0,symbolSize:100,symbol:'image://../../img/icons/git-logo.png'},
                // {id:'5',name: '夫妻',x: 110,y: 1,value: "",categorie:0,symbolSize:50,symbol:'image://../../img/icons/true.jpg',
                // label:{
                //     position:'inside'
                // }},
                // {id:'6',name: '长子',x: 110,y: 100,value: "",categorie:0,symbolSize:50,symbol:'image://../../img/icons/git-logo.png',
                // label:{
                //     position:'inside'
                // }},
            ]
            var links = [
                // {source: '1',target: '5'},
                // {source: '5',target: '2',symbol: ['', 'arrow'],symbolSize:20},
                // {source: '1',target: '6'},
                // {source: '6',target: '3'}
                {source: '1',target: '2',intro:'妻子'},
                {source: '1',target: '3',intro:'长子'},
            ]
            var categories = [
                {name:"史塔克",icon:'image://https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2673175868,2732101001&fm=26&gp=0.jpg'},
                {name:"兰尼斯特",icon:'image://https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2673175868,2732101001&fm=26&gp=0.jpg'}
            ]

            nodes = this.personRelation.nodeList
            links = this.personRelation.linkeList
            categories = this.personRelation.categoryList

            var option = {
                
                legend: [{
                    selectedMode: 'single',
                    itemWidth:50,
                    itemHeight:30,
                    width:50,
                    right:0,
                    height:50,
                    data: categories,
                    textStyle: { color:'white',fontSize:18}
                }],
                animationDuration: 1500,
                animationEasingUpdate: 'quinticInOut',
                series : [
                    {
                        name: 'Les Miserables',
                        type: 'graph',
                        layout: 'none',
                        data: nodes,
                        links: links,
                        categories: categories,
                        roam: true,
                        focusNodeAdjacency: false,
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
                        edgeSymbol: ['', 'arrow'],
                        edgeSymbolSize :20,
                        edgeLabel:{
                            show:true,
                            formatter:function(param){
                                return '{a|'+param.data.intro+'}'
                            },
                            rich:{
                                a:{
                                    align:'center',
                                    verticalAlign:'center',
                                    backgroundColor:'#ffffff',
                                    borderColor:"red",
                                    borderWidth:1,
                                    borderRadius:10,
                                    fontSize: 18,
                                    fontFamily: 'Microsoft YaHei',
                                    color: 'black',
                                    lineHeight: 0,
                                    padding:[5,5,5,5],
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
            myChart.setOption(option);

            myChart.on('graphroam', (params)=>{
                console.log(params)
                console.log(params.zoom)
                var op = myChart.getOption()
                var zoom = op.series[0].zoom
                console.log(zoom)
                op.series[0].label.fontSize = 12*zoom
                op.series[0].edgeLabel.rich.a.fontSize = 12*zoom
                console.log(op)
                myChart.setOption(op)
            })

            myChart.on('click', function (params) {
                console.log("click node")
                console.log(params);
                if(params.dataType == "node"){
                    //节点
                }else if(params.dataType == "edge"){
                    //边
                }
            });

        }   
    },
}
</script>


<style scoped>
    #gragh{
        background-color: #120c33
    }
</style>