<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/datitop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center"
			:style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}"
			>
				<view class="colonn">
					<view v-if="usertype==3" class="type1" @click.stop="toRead(1)">对答如流</view>
					<view class="h-100"></view>
					<view class="type1" @click.stop="toRead(2)">胸有成竹</view>
				</view>
			</view>
			<image  @load="imgload($event,2)"  
			src="../../static/datibottom.jpg" mode="widthFix" class="w-750"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				'screenHeightPx':0,
				img1:0,
				img2:0,
				startTime:0,//开始的时间戳
				nowTime:0,
				miaoshu:30,//倒计时
				tiIndex:1,
				
				usertype:''
			}
		},
		onLoad() {
			
			// 获取当前界面的宽高
			const systemInfo = uni.getSystemInfoSync();
			const screenWidth = systemInfo.screenWidth;
			const screenHeight = systemInfo.screenHeight;
			console.log("屏幕的原始高",)
			const bili=750/screenWidth;
			const screenHeightPx=bili*screenHeight;  
			this.screenHeightPx=screenHeightPx;
			console.log(bili,screenWidth,screenHeight,screenHeightPx);
			this.username=uni.getStorageSync("username")
			this.usertype=uni.getStorageSync("usertype");
			
		},
		methods: {
			toRead(type){
				uni.setStorageSync("readType",type)
				if(type==1){
					uni.navigateTo({
						url:"/pages/userList/userList"
					})
				}else{
					// uni.navigateTo({
					// 	url:"/pages/selDui/selDui"
					// })
					uni.navigateTo({
						url:"/pages/xycz/xycz"
					})
				}
				
			},
			// 图片加载完成
			imgload(res,index){
				console.log("阿萨德",res,index)
				if(index==1){
					this.img1=res.detail.height/2;
				}
				if(index==2){
					this.img2=res.detail.height/2;
				}
				if(this.img1>0&&this.img2>0){
					console.log("默认高",this.screenHeightPx)
					console.log("img1",this.img1)
					console.log("img2",this.img2)
				}
			}
		}
	}
</script>

<style>
	@import url(selType.css);
</style>
