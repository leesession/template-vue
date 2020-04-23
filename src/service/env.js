let baseUrl = '';
if(process.env.NODE_ENV === 'development'){
    baseUrl = 'https://api.yiqicloud.com.cn/v1/api/'
}else if(process.env.NODE_ENV === 'production'){
    if(process.env.VUE_APP_FLAG === 'pro'){
        baseUrl = 'http://production.com'
    }else {
        baseUrl = 'http://test.com';
    }
}

export default baseUrl
