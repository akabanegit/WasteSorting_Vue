<template>
    <div class="comment-container">
        <mt-header fixed  title="留言"></mt-header>
        <!-- 留言区域 -->
        <comment class="cmt"></comment>
    </div>
</template>

<script>
import comment from "../components/comment.vue"
export default {
    data(){
        return {
            
        }
    },
    components:{comment}

}
</script>

<style lang="scss" scoped>
.comment-container{ 
    .mint-header{
        background-color: #40ae3c;
        color: #f8fefe;
        font-size: 18px;
        font-weight: bold;
        z-index: 999;
        

    }
    .cmt{
        margin-top: 40px;
    }
}
</style>
