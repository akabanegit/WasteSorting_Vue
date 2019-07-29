<template>
    <div class="gan-container">
        <div class="mui-scroll-wrapper">
	        <div class="mui-scroll">
                div
	        </div>
        </div>
    </div>
</template>

<script>
import mui from '../../css/hello-mui/js/mui.js'

export default {
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>

<style>

</style>
