import { requestWeather } from './axios'
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