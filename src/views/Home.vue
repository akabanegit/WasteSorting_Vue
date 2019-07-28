<template>
    <div class="home-container">
        <!-- 头部区域 -->
        <mt-header fixed class="header" title="垃圾分类指南"></mt-header>

        <!-- 轮播图 -->
        <swiper ></swiper>
        <!-- 主要内容——左ul列表导航条 -->
        <div class="sum-container">
            
                <ul class="ul-container">
                    <div class="li-content">
                        <router-link to="" tag="li">湿垃圾</router-link>
                        <router-link to="" tag="li">干垃圾</router-link>
                        <router-link to="" tag="li">可回收物</router-link>
                        <router-link to="" tag="li">有害垃圾</router-link>
                    </div>

                </ul>
            
        <!-- 主要内容——右内容  -->
            <div class="content-container">
                
                    <transition>
                        <router-view></router-view>
                    </transition>
                

            </div>
        </div>
        
        
        <!-- 这里也尝试用routerview -->

    </div>
</template>

<script>
import swiper from "../components/swiper.vue"
export default {
    data(){
        return{
            
        }
    },
    components:{
        swiper
    }
}
</script>

<style lang="scss" scope>
.home-container{
    height: 100%;
    display: flex;
    flex-direction:column;
    // .swiper-container{
        
    // }
    .sum-container{
        height: 100%;
        display: flex;
        flex-direction: row;
        .ul-container{
            
            background-color: #f1ebea;
            width: 25%;
            list-style:none;
            margin: 0;
            padding: 0;
            
            .li-content{
                color:black;
                font-family: Arial, Helvetica, sans-serif;
                height: 60%;
                display: flex;
                flex-direction:column; 
                justify-content:space-around;
                align-items:center;
            }
        }
        .content-container{
            width: 75%;
            margin: 0 15px;    
            background-color: #f1ebea;
            border-radius: 10px 10px 0 0;
        }
    }
    .mint-header{
        background-color: #40ae3c;
        color: #f8fefe;
        font-size: 18px;
        font-weight: bold;
        z-index: 999;
    }
    .item1{
        background-color: red;
    }
    .item2{
        background-color: blue;
    }
    .item3{
        background-color: black;
    }
}
</style>
