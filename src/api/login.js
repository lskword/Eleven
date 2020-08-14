
/* eslint-disable */
/**
 * 用户登录
 * 1.请求参数
 *  mobile 手机号码
 *  smsCode 验证码
 * @export
 * @param {*} data
 * @returns
 */
export function loginApi(data) {
    return  BASE_REQUEST_API({
        url: '/api/login/loginTel',
        method: 'post',
        data
    });
}


/**
 * 获取验证码
 * 请求参数 mobile 
 * @export
 * @param {*} data
 * @returns
 */
export function validateCodeApi(data) {
    return BASE_REQUEST_API({
        url: '/api/login/validateCode',
        method: 'post',
        data
    });
}
