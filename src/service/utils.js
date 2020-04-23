export function checkStatus(response) {
    const status = response.status || -1000 // -1000 自己定义，连接错误的status
    if ((status >= 200 && status < 300) || status === 304) {
        // 如果http状态码正常，则直接返回数据
        return response.data
    } else {
        let errorInfo = ''
        switch (status) {
            case -1:
                errorInfo = '远程服务响应失败,请稍后重试'
                break
            case 400:
                errorInfo = '错误请求'
                break
            case 401:
                errorInfo = '请重新登录';
                break
            case 403:
                errorInfo = '拒绝访问'
                break
            case 404:
                errorInfo = '资源不存在'
                break
            case 405:
                errorInfo = '请求方法未允许'
                break
            case 408:
                errorInfo = '请求超时'
                break
            case 500:
                errorInfo = '服务器内部错误'
                break
            case 501:
                errorInfo = '服务未实现'
                break
            case 502:
                errorInfo = '无效网关'
                break
            case 503:
                errorInfo = '服务不可用'
                break
            case 504:
                errorInfo = '网关超时'
                break
            case 505:
                errorInfo = 'HTTP版本不受支持'
                break
            default:
                errorInfo = `连接错误`
                break
        }
        return {
            status,
            msg: errorInfo
        }
    }
}
