/* eslint-disable */
/**
 * @description: 医生主页
 * @param {type} 
 * @return: 
 */
export function doctorIndexApi(data) {
  return BASE_REQUEST_API({
    url: 'api/doctor/index/'+data,
    method: 'post',
  });
}

/**
 * @description: 咨询主页功能模块
 * @param {type} 
 * @return: 
 */
export function cIfunctionModuleApi(data) {
  return BASE_REQUEST_API({
    url: 'api/doctor/CIfunctionModule/' + data,
    method: 'post',
  });
}

/**
 * @description: 咨询擅长分类标签
 * @param {type} 
 * @return: 
 */
export function consultSkilledMarkApi(data) {
  return BASE_REQUEST_API({
    url: 'api/doctor/consultSkilledMark/' + data,
    method: 'post',
  });
}
/**
 * @description: 咨询分类擅长标签-公开问题列表
 * @param {type} 
 * @return: 
 */
export function CMConsultListApi(data) {
  return BASE_REQUEST_API({
    url: 'api/doctor/CMConsultList',
    method: 'post',
    data
  });
}


/** 
 * C端咨询医生列表
 * @expot
 * @param {*} dapi
 * @returns
 */
export function selectListPageApi(data) {
  return BASE_REQUEST_API({
    url: '/api/consult/selectListPage',
    method: 'post',
    data
  });
}
// 

/** 
 * 医院省份列表
 * @expot
 * @param {*} dapi
 * @returns
 */
export function getProvinceHospitalApi(data) {
  return BASE_REQUEST_API({
    url: '/api/area/getProvinceHospital',
    method: 'post',
    data
  });
}


/** 
 * 医生主页功能模块
 * @expot
 * @param {*} dapi
 * @returns
 */
export function doctorDIfunctionModuleApi(data) {
  return BASE_REQUEST_API({
    url: `/api/doctor/DIfunctionModule/${data}`,
    method: 'post',
    data
  });
}
