/* eslint-disable */
/** 
 * 药品详情
 * @expor
 * @param {*} dapi
 * @returns
 */
export function cmsMedicineDetailApi(data) {
    return BASE_REQUEST_API({
        url: `api/cms/medicineDetail/${data}`,
        method: 'post'
    });
}


/** 
 * 医院详情
 * @expor
 * @param {*} dapi
 * @returns
 */
export function hospitalDetailApi(data) {
  return BASE_REQUEST_API({
      url: `api/hospital/detail/${data}`,
      method: 'post'
  });
}

