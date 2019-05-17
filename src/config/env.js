//根据不同的环境更改不同的baseUrl
let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
    baseUrl = ''; //

} else if (process.env.NODE_ENV == 'production') {
    //baseUrl = '测试地址';
    //baseUrl = '预发布地址';
    baseUrl = '';
}

export {
    baseUrl,//导出baseUrl
}
