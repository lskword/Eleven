/* eslint-disable */
/**
 * @description: 图文问诊-病情描述
 * @param {type} 
 * @return: 
 */
export function illDescribeApi(data) {
  return BASE_REQUEST_API({
    url: 'api/consult/illDescribe',
    method: 'post',
    data,
  });
}


/**
 * @description: 历史病情
 * @param {type} 
 * @return: 
 */
export function historyIllApi(data) {
  return BASE_REQUEST_API({
    url: 'api/consult/historyIll',
    method: 'post',
    data,
  });
}

/**
 * @description: 咨询分类擅长标签-公开问题列表
 * @param {type} 
 * @return: 
 */
export function consultAddApi(data) {
  return BASE_REQUEST_API({
    url: 'api/consult/add',
    method: 'post',
    data,
  });
}


/**
 * @description: 健康档案(回选)
 * @param {type} 
 * @return: 
 */
export function getHealthArchivesApi(data) {
  return BASE_REQUEST_API({
    url: 'api/healthArchives/getHealthArchives',
    method: 'post',
    data,
  })
}
/**
 * @description:  健康档案(保存)
 * @param {type} 
 * @return: 
 */
export function megerHealthArchivesApi(data) {
  return BASE_REQUEST_API({
    url: 'api/healthArchives/megerHealthArchives',
    method: 'post',
    data,
  })
}
