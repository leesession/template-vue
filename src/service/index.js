/* 生成接口，并将接口挂载到vue的原型上
 */

import Vue from 'vue'
import request from './request'
import API from '../api'

let services = function (url,options = {}) {
    return request(Object.assign(options,{url:API[url]}))
}

// 将services挂载到vue的原型上
// 业务中引用的方法：this.$services.接口名（小驼峰）
Vue.prototype.$services = services
