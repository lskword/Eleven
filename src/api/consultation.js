
/* eslint-disable */
/**
 * @description: 咨询记录列表
 * @param {type} 
 * @return: 
 */
export function consultListApi(data) {
  return BASE_REQUEST_API({
    url: 'api/consult/myConsult',
    method: 'post',
    data,
  });
}
/**
 * @description:  咨询记录详情H5
 * @param {type} 
 * @return: 
 */
export function selectConsultDetailsH5Api(data) {
  return BASE_REQUEST_API({
    url: '/api/consult/selectConsultDetailsChat',
    method: 'post',
    data,
  });
}


/**
 * @description:  咨询记录详情H5
 * @param {type} 
 * @return: 
 */
export function consultChatDetailApi(data) {
  return BASE_REQUEST_API({
    url: `api/consult/chatDetail/${data.consultId}`,
    method: 'post',
    data,
  });
}


/** 
 * 补充问题
 * @expot
 * @param {*} dapi
 * @returns
 */
export function newAddConsultApi(data) {
  return BASE_REQUEST_API({
    url: '/api/consult/chat',
    method: 'post',
    data
  });
}
/** 
 * 评论医生
 * @expot
 * @param {*} dapi
 * @returns
 */
export function consultReviewApi(data) {
  return BASE_REQUEST_API({
    url: '/api/consult/review',
    method: 'post',
    data
  });
}

/** 
 * 评论标签
 * @expot
 * @param {*} dapi
 * @returns
 */
export function consultReviewMarkApi(data) {
  return BASE_REQUEST_API({
    url: '/api/consult/reviewMark',
    method: 'post',
    data
  });
}


/** 
 * 收藏 {"userId":702,"attention":false}
 * @expot
 * @param {*} dapi
 * @returns
 */
export function doctorAttentionDoctorApi(data) {
  return BASE_REQUEST_API({
    url: '/api/doctor/attentionDoctor',
    method: 'post',
    data
  });
}

