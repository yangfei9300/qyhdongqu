// 项目域名
export const BASE_URL = 'https://lq.imjiayi.com/api'

// //----------项目接口请求路径-----------
// // 登录  
// const apilogin =BASE_URL + '/api/login' 
//  // 获取对答如流所有题目  
// const getQuestion =BASE_URL + '/api/getQuestion' 
//  // 获取答题状态  
// const getTestStatus =BASE_URL + '/api/getTestStatus' 
//  // 提交答案  
// const apiputAnswer =BASE_URL + '/api/putAnswer' 
//  // 获取用户列表  
// const getTestList =BASE_URL + '/api/getTestList' 
//  // 判断是否可以打分
// const markClick =BASE_URL + '/api/markClick' 
//  // 获取已答题的列表
// const getTestInfo =BASE_URL + '/api/getTestInfo' 
// // 提交分数
// const markTest =BASE_URL + '/api/markTest' 
// // 胸有成竹提交分数
// const markPut =BASE_URL + '/api/markPut' 
// // 获取测试题的接口  


// 23号
// 登录  
const Api20241023login =BASE_URL + '/Api20241023/login'
// 获取用户列表  api/Api20241023/getUserList  
const Api20241023getUserList =BASE_URL + '/Api20241023/getUserList'
// 提交胸有成竹得分 api/Api20241023/markPut
const Api20241023markPut =BASE_URL + '/Api20241023/markPut'
// api/Api20241023/dtLogInfo
const Api20241023dtLogInfo =BASE_URL + '/Api20241023/dtLogInfo'
// 获取打分记录  api20241023/getUserLScoreList  
const Api20241023getUserLScoreList =BASE_URL + '/Api20241023/getUserLScoreList'
// 5获取选手胸有成竹得分列表（控制端）
// api/Api20241024/getUserLScoreList

 export default {
	 // 23号开始
	 Api20241023getUserLScoreList,
	 Api20241023login,
	 Api20241023getUserList,
	 Api20241023markPut,
	 Api20241023dtLogInfo,
	 // 23号结束
	 
	 
	 
	 
	//  getQuestion,
	//  markPut,
	//  markTest,
	//  getTestInfo,
	//  markClick,
	//  getTestList,
	//  apiputAnswer,
	//  getTestStatus,
	// apilogin,getQuestion,
 }
 