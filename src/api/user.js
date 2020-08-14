/* eslint-disable */
/**
 * 用户个人中心信息获取
 * @export
 * @param {*} data
 * @returns
 */
export function selectInfoApi(data) {
    return BASE_REQUEST_API({
        url: '/api/member/selectInfo',
        method: 'post',
        data
    })
}

/**
 * 我的优惠券

 * @export
 * @param {*} data
 * @returns
 */
export function myCouponApi(data) {
    return BASE_REQUEST_API({
        url: '/api/coupon/myCoupon',
        method: 'post',
        data
    })
}

