const ValidateText = (rule, value, callback) => {
    if (/^[a-zA-Z0-9_]+$/g.test(value)) callback();
    else callback(new Error('编码必须为大小写、数字、下划线'));
};

const ValidateNumber = (rule, value, callback) => {
    if (/(^[1-9]\d*$)/.test(value)) callback();
    else callback(new Error('请输入正整数'));
};

export  {
    ValidateText,
    ValidateNumber
}
