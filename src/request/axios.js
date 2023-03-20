import axios from "axios"
// 请求天气接口
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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

// 请求地图数据接口
export const requestData = axios.create({
    timeout:0
})



// 请求实时数据接口

export const requestReal = axios.create({
    timeout: 5000,
    baseURL:'http://121.36.5.157:5000/api/'
})

requestReal.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export const requestLogin = axios.create({
    timeout:0
})

requestLogin.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});