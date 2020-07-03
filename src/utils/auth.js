import Cookies from 'js-cookie';

const TokenKey = 'token';
const UnitId   = 'unitId';
const UserInfo = 'userInfo';
const OpenId   = 'openId';
const Channel  = "B-Channel";
const BASE_URL = 'WINDOW_ONE_TIME_BASE_URL';


// 保留测试地址
export function getBaseUrl() {
   return Cookies.get(BASE_URL);
}

export function setBaseUrl(data = '') {
   return Cookies.set(BASE_URL, data);
}

export function removeBaseUrl() {
   return Cookies.get(BASE_URL);
}

// 用户标示
export function getToken() {
   return Cookies.get(TokenKey);
}

export function setToken(token = '') {
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
    return Cookies.set(Channel, val);
}

export function removeChannel() {
    return Cookies.remove(Channel);
}
