<template>
    <div class="swiper-container">
        <!-- 谁使用此轮播图组件 谁为我们传递lunbotuList -->
        <!-- 此时lunbotuList是父组件向子组件传值 -->
        <mt-swipe  :auto="3000" >
            <!-- v-for="item in lunbotuList" :key='item.id' -->
            <mt-swipe-item >
            <!-- :src="item.img" alt="" :class="{'full':isfull}" -->
            <img  class="item1" >
            </mt-swipe-item>
            <mt-swipe-item ><img  class="item2" ></mt-swipe-item>
            <mt-swipe-item ><img  class="item3" ></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    // props:["isfull"],

}
</script>

<style lang="scss" scoped>
.swiper-container{

    margin-top: 40px;
    padding: 15px;
    .mint-swipe{
        text-align: center;
        height: 200px;
        img{
            width: 100%;
            height: 100%;
        }
        .item1{
            background-color: red;
             border-radius: 20px;
        }
        .item2{
            background-color: black;
             border-radius: 20px;
        }
        .item3{
            background-color: blue;
             border-radius: 20px;
        }
    }
}

// .full{
//     width:100%;
// }

</style>

