import axios from 'axios';
import qs from 'qs'
import { checkStatus } from './utils'
import baseURL from './env'

//axios实例
const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
})

instance.interceptors.request.use(config => {
        if (config.method === 'get') {
            config.paramsSerializer =
                params => qs.stringify(params, {arrayFormat: 'repeat'})
        }
        return Promise.resolve(config)
    }, error => Promise.reject(error)
)

instance.interceptors.response.use(
    response=>
        response.status === 200 ?
            Promise.resolve(response) : Promise.reject(response),
    error => {
        return Promise.reject(checkStatus(error.response))
    }
)

const request = async function (opt) {
    try {
        const options = Object.assign({
            method: 'get',
            ifHandleError: true // 是否统一处理接口失败(提示)
        }, opt)
        options.baseURL = baseURL
        // const res =
        return await instance(options)
    } catch (err) {
        if (!opt.ifHandleError) {
            //提示框，
            // Message.error({
            //     message: err.msg,
            //     type: 'error'
            // })
        }
        // 自定义参数，是否允许全局提示错误信息
        return err
    }
}

export default request
