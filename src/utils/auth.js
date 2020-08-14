import Cookies from 'js-cookie';

const TokenKey = 'token';
const UnitId   = 'unitId';
const UserInfo = 'userInfo';
const OpenId   = 'openId';
const Channel  = "channel";
const AppType  = 'isApp';
const facilityType = 'facilityType';
//承载环境
export function getAppType() {
   return sessionStorage.getItem(AppType) || '';
}

export function setAppType(data = '') {
   return sessionStorage.setItem(AppType, data);
}

// 功能区载体标识
export function getFacilityType() {
    return sessionStorage.getItem(facilityType) || '';
}
 
export function setFacilityType(data = 'h5') {
    const u = navigator.userAgent.toLowerCase();
    if (u.match(/MicroMessenger/i) == "micromessenger") data = 'web';
    return sessionStorage.setItem(facilityType, data);
}

// 用户标示
export function getToken() {
   return Cookies.get(TokenKey) || '';
}

export function setToken(token = '') {
    removeToken();
    return Cookies.set(TokenKey, token);
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}

// 用户信息

export function getUserInfo() {
    return JSON.parse(sessionStorage.getItem(UserInfo));
}

export function setUserInfo(data = '') {
    removeUserInfo();
    return sessionStorage.setItem(UserInfo, JSON.stringify(data));
}

export function removeUserInfo() {
    return sessionStorage.removeItem(UserInfo);
}

// 医院Id
export function getUnitId() {
    var val = (Cookies.get(UnitId) || 0);
    return val;
}

export function setUnitId(val) {
    removeUnitId();
    return Cookies.set(UnitId, val);
}

export function removeUnitId() {
    return Cookies.remove(UnitId);
}

// OpenId
export function getOpenId() {
    var openId = (Cookies.get(OpenId) || '');
    return openId;
}

export function setOpenId(val = '') {
    removeOpenId();
    return Cookies.set(OpenId, val);
}

export function removeOpenId() {
    return Cookies.remove(OpenId);
}


// Channel 渠道标识
export function getChannel() {
    return (Cookies.get(Channel) || '');
}

export function setChannel(val = '') {
    removeChannel();
    return Cookies.set(Channel, val);
}

export function removeChannel() {
    return Cookies.remove(Channel);
}
