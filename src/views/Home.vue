<template>
    <div class="home-container">
        <!-- 头部区域 -->
        <mt-header fixed class="header" title="垃圾分类指南"></mt-header>

        <!-- 轮播图 -->
        <swiper ></swiper>
        <!-- 主要内容——左ul列表导航条 -->
        <div class="sum-container">
            
                <ul class="ul-container" >
                    <div class="li-content"   >
                        <router-link to="/Home/shi" tag="li"  >湿垃圾</router-link>
                        <router-link to="/Home/gan" tag="li">干垃圾</router-link>
                        <router-link to="/Home/huishou" tag="li">可回收物</router-link>
                        <router-link to="/Home/youhai" tag="li">有害垃圾</router-link>
                    </div>

                </ul>
            
        <!-- 主要内容——右内容  -->
            <div class="content-container">  
                    <transition name="contentContainer">
                        <router-view ></router-view>
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
    },
    created(){
        
    },
    methods:{

    }
}
</script>

<style lang="scss"  scoped>
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
            .mui-active{
                background-color: #956b57;
                width: 100%;
                height: 72px;
                text-align: center;
                line-height:72px;
                
            }
            background-color: #f1f1f1;
            width: 25%;
            list-style:none;
            margin: 0;
            padding: 0;
            
            .li-content{
                color:#b4b4b4;
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
            background-color: #dddcda;
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

}
.contentContainer-enter
{
  opacity: 0;
  transform: translateX(-100%);
  
}
.contentContainer-leave-to{
  
  opacity: 0;
  transform: translateX(100%);
  position:absolute;
}

.contentContainer-enter-active,
.contentContainer-leave-active{
  transition: all 0.25s ease-out;
}


</style>
