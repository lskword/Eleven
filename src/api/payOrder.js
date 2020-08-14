/* eslint-disable */
/** 
 * 获取支付方式
 * @export
 * @param {*} dapi
 * @returns
 */
export function getPayChannelApi(data) {
    return BASE_REQUEST_API({
        url: 'api/payment/payChannel',
        method: 'post',
        data
    });
}

/** 
 * 支付订单详情
 * @export
 * @param {*} dapi
 * @returns
 */
export function orderDetailApi(data) {
  return BASE_REQUEST_API({
      url: 'api/order/detail/' + data,
      method: 'post',
      
  });
}
/** 
 * -支付完成,查询订单
 * @export
 * @param {*} dapi
 * @returns
 */
export function orderQueryOrderApi(data) {
  return BASE_REQUEST_API({
      url: `api/order/queryOrder/${data.orderSn}`,
      method: 'post',
      data
  });
}

/** 
 * 订单非常详细页
 * @export
 * @param {*} dapi
 * @returns
 */
export function orderRdetailApi(data) {
  return BASE_REQUEST_API({
      url: `api/order/r_detail/${data}`,
      method: 'post'
  });
}

/** 
 * 取消订单
 * @export
 * @param {*} dapi
 * @returns
 */
export function orderCancelApi(data) {
  return BASE_REQUEST_API({
      url: `api/order/cancel/${data}`,
      method: 'post'
  });
}





// 


/** 
 * 计算价格
 * @export
 * @param {*} dapi
 * @returns
 */
export function calutationPiceApi(data) {
  return BASE_REQUEST_API({
      url: 'api/order/calutationPice' ,
      method: 'post',
      data
  });
}
/** 
 * 支付
 * @export
 * @param {*} dapi
 * @returns
 */
export function payApi(data) {
  return BASE_REQUEST_API({
      url: 'api/payment/paymentH5',
      method: 'post',
      data
  })
}
