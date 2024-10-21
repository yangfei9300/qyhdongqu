<template>
	<view>
		<view class="colonn">
			<image @load="imgload($event,1)" src="../../static/datitop.jpg" mode="widthFix" class="w-750"></image>
			<view class="colonn w-750 cenbterbg  center_center" :style="{
				'height':(screenHeightPx-img1-img2)+'rpx'
			}">
				<scroll-view scroll-y :style="{
					'height':(screenHeightPx-img1-img2)+'rpx'
				}">
					<view class="colonn p-all-30">
						<view class="h-50"></view>
						<view class="roww center_center duiqi">
							<view class="fs-40 fw-800">批阅中</view>
						</view>
						<view class="h-50"></view>
						

						<block>

							<view class="fs-40 fw-800">案例分析打分（总分100分）</view>
							<view class="h-20"></view>

							<view class="colonn center_center">
								<view class="fs-40 w-690">1.核心诊断:根据提供的影像资料，参赛者给出的主要诊断是否正确（30分）</view>
								<view class="h-20"></view>
								<input type="number" class="textawa" v-model="fens.fen1"
									@input="isFenSubChange($event,0)" placeholder="最高30分"></input>
								
							</view>
							<view style="color: red;" v-if="!heTishi[0]">第1项得分必须小于等于30</view>
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40 w-690">2.辅助诊断:除核心诊断外，是否能识别出相关的并发症或次要病变(10分)</view>
								<view class="h-20"></view>
								<input type="number" class="textawa" v-model="fens.fen2"
									@input="isFenSubChange($event,1)" placeholder="最高10分"></input>
									
							</view>
							<view style="color: red;"  v-if="!heTishi[1]">第2项得分必须小于等于10</view>
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40 w-690">3.诊断思路阐述逻辑清晰有条理，表述完整精炼，重点突出(20分)</view>
								<view class="h-20"></view>
								<input type="number" class="textawa" v-model="fens.fen3"
									@input="isFenSubChange($event,2)" placeholder="最高20分"></input>
									
							</view>
							<view style="color: red;"  v-if="!heTishi[2]">第3项得分必须小于等于20</view>
							
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40 w-690">4.含有针对性的鉴别诊断，鉴别诊断结合病人具体病理(10分)</view>
								<view class="h-20"></view>
								<input type="number" class="textawa" v-model="fens.fen4"
									@input="isFenSubChange($event,3)" placeholder="最高10分"></input>
									
									
									
							</view>
							
							<view style="color: red;"  v-if="!heTishi[3]">第4项得分必须小于等于10</view>
							
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40  w-690">5.如可能，提出进一步诊断方案(10分)</view>
								<view class="h-20"></view>
								<input type="number" class="textawa" v-model="fens.fen5"
									@input="isFenSubChange($event,4)" placeholder="最高5分"></input>
									
									
									
							</view>
							<view style="color: red;"  v-if="!heTishi[4]">第5项得分必须小于等于10</view>
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40  w-690">6.提供不同于常规诊断的新视角或见解，为诊断提供新思路(5分)</view>
								<view class="h-20"></view>
								<input type="number" class="textawa" v-model="fens.fen6"
									@input="isFenSubChange($event,5)" placeholder="最高5分"></input>
									
							</view>
							<view style="color: red;"  v-if="!heTishi[5]">第6项得分必须小于等于5</view>
							
							<view class="h-20"></view>

							<view class="colonn center_center">
								<view class="fs-40  w-690">7.视角虽非完全独特，但提供了一些新的新考点或分析角度(5分)</view>
								<view class="h-20"></view>
								<input 
								
								type="number" 
								class="textawa" 
								v-model="fens.fen7" 
								@input="isFenSubChange($event,6)"
								placeholder="最高10分"
									></input>
									
								
									
							</view>
							<view style="color: red;"  v-if="!heTishi[6]">第7项得分必须小于等于5</view>
							
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40  w-690">8.语言表达清晰完整，声音洪亮，语速和节奏适中(5分)</view>
								<view class="h-20"></view>
								<input type="number" class="textawa" 
								v-model="fens.fen8" 
								@input="isFenSubChange($event,7)"
									placeholder="最高10分"></input>
								
								
							</view>
							<view style="color: red;"  v-if="!heTishi[7]">第8项得分必须小于等于5</view>
							<view class="h-20"></view>
							<view class="colonn center_center">
								<view class="fs-40  w-690">9.PPT制作规范，排版美观(5分)</view>
								<view class="h-20"></view>
								<input type="number" class="textawa" 
								v-model="fens.fen9" 
								@input="isFenSubChange($event,8)"
									placeholder="最高10分"></input>
							</view>
							
							<view style="color: red;"  v-if="!heTishi[8]">第9项得分小于等于5</view>
						</block>
						<view class="h-40"></view>
						<view class="btns1" @click.stop="toSubmit">提交</view>
					</view>
				</scroll-view>
			</view>
			<image @load="imgload($event,2)" src="../../static/datibottom.jpg" mode="widthFix" class="w-750"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				'screenHeightPx': 0,
				img1: 0,
				img2: 0,
				startTime: 0, //开始的时间戳
				nowTime: 0,
				miaoshu: 30, //倒计时
				tiIndex: 1,

				numberInput: '',
				formattedNumber: '',
				duiyuans: ['江女士1', '江女士2', '江女士3'],

				fens: {
					'fen1': '',
					'fen2': '',
					'fen3': '',
					'fen4': '',
					'fen5': '',
					'fen6': '',
					'fen7': '',
					'fen8': '',
					'fen9': '',
				},
				isFenSub: [
					true, true, true, true, true, true, true, true, true
				],
				form: {
					'score_str': '',
					'score': '',
					'b1score_str': '',
					'b1score': '',
					'uuid': ''
				},
				fenBz : [30, 10, 20, 10, 10, 5, 5, 5, 5],
				
				heTishi:[true,true,true,true,true,true,true,true,true],
				
			}
		},
		onLoad() {
			// 获取当前界面的宽高
			const systemInfo = uni.getSystemInfoSync();
			const screenWidth = systemInfo.screenWidth;
			const screenHeight = systemInfo.screenHeight;
			console.log("屏幕的原始高", )
			const bili = 750 / screenWidth;
			const screenHeightPx = bili * screenHeight;
			this.screenHeightPx = screenHeightPx;
			
			var userInfoDafen=uni.getStorageSync("dafenUser");
			if(userInfoDafen.is_score==1){
				this.getLishidafen();
			}
			
		},
		methods: {
			
			
			// 获取历史打分
			getLishidafen(){
				var data={
					'uuid':uni.getStorageSync("userId"),
					'user_id':uni.getStorageSync("dafenUser").user_id,
				}
				this.$axios
					.axios('POST', this.$paths.Api20241023dtLogInfo,data)
					.then(res => {
						if(res.code==1){
							
							
							this.fens.fen1=parseInt(res.data.score_arr[0]);
							this.fens.fen2=parseInt(res.data.score_arr[1]);
							this.fens.fen3=parseInt(res.data.score_arr[2]);
							this.fens.fen4=parseInt(res.data.score_arr[3]);
							this.fens.fen5=parseInt(res.data.score_arr[4]);
							this.fens.fen6=parseInt(res.data.score_arr[5]);
							this.fens.fen7=parseInt(res.data.score_arr[6]);
							this.fens.fen8=parseInt(res.data.score_arr[7]);
							this.fens.fen9=parseInt(res.data.score_arr[8]);
							
							
						}else{
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			heTishiSUb(){
				
				if(this.fens.fen1!=""){
					if(this.fens.fen1<25){
						this.heTishi[0]=false;
					}else{
						this.heTishi[0]=true;
					}
				}
				
				this.$forceUpdate()
			},
			// 这分是否可以提交
			isFenSubChange(res, index) {
				var value = res.detail.value;
				var fenBz = [30, 10, 20, 10, 10, 5, 5, 5, 5];
				value=parseFloat(value)
				console.log("--",fenBz[index],value)
				if(fenBz[index]<value){
					this.heTishi[index]=false;
				}else{
					this.heTishi[index]=true;
				}
				
				// this.heTishiSUb();
			},
			// 提交
			toSubmit() {
				if (!this.isSubmit()) {
					return false;
				}
				// timuList[a].fen=parseFloat(timuList[a].fen).toFixed(1);
				var fens = this.fens;
				fens.fen1 = parseFloat(fens.fen1).toFixed(1);
				fens.fen2 = parseFloat(fens.fen2).toFixed(1);
				fens.fen3 = parseFloat(fens.fen3).toFixed(1);
				fens.fen4 = parseFloat(fens.fen4).toFixed(1);
				fens.fen5 = parseFloat(fens.fen5).toFixed(1);
				fens.fen6 = parseFloat(fens.fen6).toFixed(1);
				fens.fen7 = parseFloat(fens.fen7).toFixed(1);
				fens.fen8 = parseFloat(fens.fen8).toFixed(1);
				fens.fen9 = parseFloat(fens.fen9).toFixed(1);
				var score = parseFloat(fens.fen1) + parseFloat(fens.fen2) + parseFloat(fens.fen3) + parseFloat(fens.fen4) +
					parseFloat(fens.fen5) + parseFloat(fens.fen6)+ parseFloat(fens.fen7) + parseFloat(fens.fen8)+ parseFloat(fens.fen9);
				var form = {
					'score_str': fens.fen1 + "," + fens.fen2 + "," + fens.fen3 + "," + fens.fen4 + "," + fens.fen5 +
						"," + fens.fen6+
						"," + fens.fen7+
						"," + fens.fen8+
						"," + fens.fen9,
					'score': score.toFixed(1),
					'user_id':uni.getStorageSync("dafenUser").user_id,
					'uuid': uni.getStorageSync("userId")
				}

				this.$axios
					.axios('POST', this.$paths.Api20241023markPut, form)
					.then(res => {
						if (res.code == 1) {
							console.log("阿斯顿", res);
							this.$tools.showToast("提交成功");
							setTimeout(res => {
								uni.navigateBack({
									delta: 1
								})
							}, 1000)
						} else {
							this.$tools.showToast(res.info)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});

			},
			isSubmit() {
				
				
				
				
				if (this.fens.fen1 == "" || this.fens.fen2 == "" || this.fens.fen3 == "" ||
					this.fens.fen4 == "" || this.fens.fen5 == "" || this.fens.fen6 == ""
					||this.fens.fen7 == "" || this.fens.fen8 == "" || this.fens.fen9 == ""
				) {
					this.$tools.showToast("有遗漏未打分，提交失败");
					return false;
				}
				var isYes=0;
				for(var a=0;a<this.heTishi.length;a++){
					if(!this.heTishi[a]){
						isYes=isYes+1;
					}
				}
				if(isYes>0){
					this.$tools.showToast("有部分打分不规范，提交失败");
					return false;
				}
				return true;
			},


			checkPrice(e) {
				var value = e.detail.value;
				this.$nextTick(() => {
					//'有小数点时，最大长度为7位，没有则是5位'
					this.numberInput = value
				})
			},

			// 下一题点击事件
			nextQuestion() {
				if (this.tiIndex == 10) {
					this.tiIndex = 11
					this.$tools.showToast("打分完成");
					setTimeout(res => {
						uni.redirectTo({
							url: "/pages/selFangxiang/selFangxiang"
						})
					}, 1000)
					return false;
				} else if (this.tiIndex < 10) {
					this.tiIndex = this.tiIndex + 1;
				}

			},
			// 图片加载完成
			imgload(res, index) {
				if (index == 1) {
					this.img1 = res.detail.height / 2;
				}
				if (index == 2) {
					this.img2 = res.detail.height / 2;
				}
				if (this.img1 > 0 && this.img2 > 0) {
					console.log("默认高", this.screenHeightPx)
					console.log("img1", this.img1)
					console.log("img2", this.img2)
				}
			}
		}
	}
</script>

<style>
	@import url(xycz.css);
</style>