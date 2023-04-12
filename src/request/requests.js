import { requestWeather,requestData,requestReal,requestLogin } from './axios'
// 请求实时天气
export const requestCurrentWeatherInfo = () => {
    return requestWeather({
        url:'https://restapi.amap.com/v3/weather/weatherInfo',
        method:'get',
        params: {
            key: '78f9271517119cf4f50e30604bdd053b',
            city: 420111,
            extensions: 'base',
            output:'JSON'
        }
    })
}
// 预告四天天气
export const requestFutureWeatherInfo = () => {
    return requestWeather({
        url:'https://restapi.amap.com/v3/weather/weatherInfo',
        method:'get',
        params: {
            key: '78f9271517119cf4f50e30604bdd053b',
            city: 420111,
            extensions: 'all',
            output:'JSON'
        }
    })
}

// 请求湖北省数据
export const requestHuBeiData = (url) => {
    return requestData({
        url,
        method:'get',

    })
}

// 1.
export const requestProjectData = (path) => {
    return requestReal({
        url:path,
        method:'get',
    })
}


export const requestLoginInfo = (data) => {
    return requestLogin({
        url: 'http://jfdt5t.natappfree.cc/user/login',
        method: 'post',
        data
    })
}




