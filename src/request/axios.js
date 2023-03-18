import axios from "axios"
// 请求天气接口
export const requestWeather = axios.create({
   timeout:0
})
// 响应拦截
requestWeather.interceptors.response.use((response) => {
    // return response.data.forecasts[0].casts
    if (response.data.status == 0) { 
        return new Error('请求天气出错')
    }
    // 对实时天气和预告天气进行处理
    if (response.data.status == 1 && response.data.lives) {
        // 实时天气
        return response.data.lives[0]
    } else {
        // 
        return response.data.forecasts[0].casts
    }
})