import moment from 'moment'
// 中文简体
moment.locale('zh-cn');

const dateFormat = (dataStr, fmtString = 'YYYY-MM-DD HH:mm:ss')=>{
    if(!dataStr){
        return '未设置'
    }
    return moment(dataStr).format(fmtString)
};

export {
    dateFormat
}
