
/* eslint-disable */

/**
 * @description: 实名认证
 * @param {type} 
 * @return: 
 */
export function realNameAuthApi(data) {
  return BASE_REQUEST_API({
    url: 'api/consumer/realNameAuth',
    method: 'post',
    data,
  })
}
