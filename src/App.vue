<template>
  <div class="app-container" >
    <!-- 头部区域 -->
    <!-- 内容区域 -->
    <transition >
    <router-view></router-view>
    </transition>
    

    <!-- 导航条区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/Home">
				<span class="mui-icon iconfont Wasteshuji"></span>
				<span class="mui-tab-label">指南</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Topic">
				<span class="mui-icon iconfont Wastezhuanti"></span>
				<span class="mui-tab-label">专题</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Download">
				<span class="mui-icon iconfont Wasteic_download"></span>
				<span class="mui-tab-label">下载</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Comment">
				<span class="mui-icon  iconfont Wasteliuyan"></span>
				<span class="mui-tab-label">留言</span>
			</router-link>
		</nav>

  </div>
</template>

<style lang="scss" scope>
html, body{ margin:0; height:100%; }
.app-container{ 
  // height: 100%;
  overflow:hidden;
  padding-bottom:50px;
  height: 100%;
}
//vue动画
.v-enter
{
  opacity: 0;
  transform: translateX(100%);
  
}
.v-leave-to{
  
  opacity: 1;
  transform: translateX(-100%);
  position:absolute;
}

.v-enter-active,
.v-leave-active{
  transition: all 0s ease;
}


</style>
