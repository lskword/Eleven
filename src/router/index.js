/* eslint-disable */

import routes from './impl/path.js';
import {setFacilityType, getToken, setToken, setUnitId, setChannel, setAppType, setOpenId} from "@/utils/auth";
const router = new VueRouter({ routes });
const originalPush = VueRouter.prototype.push;
import wxPermission from "@/utils/wxPermission";

VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err);
};

router.beforeEach((to, from, next) => {
    let AdminToken = to.query.token || getToken();

    (to.meta.title)    && (document.title = to.meta.title);
    (to.query.openId)  && setOpenId(to.query.openId);
    (to.query.channel) && setChannel(to.query.channel);
    (to.query.unitId)  && setUnitId(to.query.unitId);
    (to.query.isApp)   && setAppType(to.query.isApp);
    (to.query.facilityType) && setFacilityType(to.query.facilityType);

    AdminToken && setToken(AdminToken);
    
    wxPermission(to, from, next);
    next();
});

export default router;
