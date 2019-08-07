<template>
    <div class="download-container">
        <mt-header fixed  title="下载"></mt-header>
        <!-- 图片 -->
        <div class="down-img">
            <img src="../assets/img/sort1.jpg" alt="">
            <img src="../assets/img/sort2.jpg" alt="">
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.download-container{ 
    overflow:scroll;
    .mint-header{
        background-color: #40ae3c;
        color: #f8fefe;
        font-size: 18px;
        font-weight: bold;
        z-index: 999;
    }
    .down-img{
        margin:40px 0px 50px 0px;

        height:600px;
        overflow:auto;
        img{
            width:100%;
            margin-bottom: 10px;
        }
    }

}
</style>
