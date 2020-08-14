
/* eslint-disable */
const imgUploadUrl =  process.env.VUE_APP_BASE_FILE_API;


/**
 * base64图片上传 -- 表单提交
 * 
 * @export
 * @param {*} data
 * @returns
 */
export function base64ToImgApi(data) {
  return BASE_REQUEST_API({
    url: imgUploadUrl +  '/api/upload/base64ToImg',
    method: 'post',
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data
  });
}

/**
 * base64图片上传 -- post提交
 * 
 * @export
 * @param {*} data
 * @returns
 */
export function baseToImgApi(data) {
  return BASE_REQUEST_API({
    url: imgUploadUrl +  '/api/upload/baseToImg',
    method: 'post',
    data
  });
}


