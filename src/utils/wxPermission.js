import {getOpenId, setOpenId, setUserInfo} from './auth';
/**
 * 微信授权登录拦截
 *  
 * @export
 * @param {*} to # 路由
 */
export default  function wxPermission(to) {
    const u = navigator.userAgent.toLowerCase();
    // 微信环境
    if (u.match(/MicroMessenger/i) == "micromessenger"  ) {
        if ( getOpenId() != undefined && getOpenId() != null && getOpenId()) {
          return false;
        }
        let openId = to.query.openId;
        if (!openId) {
          var oldPathTwo = window.location.href.replace('?from=singlemessage&isappinstalled=0#','#');
          window.location.href = 'https://ileyun.ivfcn.com/tools/wx/wxLogin.html?oldPath='+ encodeURIComponent(oldPathTwo);
          return;
        }
        var userInfo;
        try {
          userInfo = JSON.parse(to.query.userInfo) ;
        } catch (error) {
          userInfo = {};
        }
        let accessToken = to.query.accessToken;
        userInfo.accessToken = accessToken;
        setOpenId(openId);
        setUserInfo(userInfo);
      }
}
