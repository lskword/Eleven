
import router from "../router";
import { getToken, setToken, setUnitId, setChannel } from "./auth";
// import store from "../store";

router.beforeEach((to, from, next) => {
    let AdminToken = to.query.token || getToken();
    let unitId = to.query.unitId;
    document.title = to.meta.title;
    // 渠道标识
    let channel = to.query.channel;
    channel && setChannel(channel);
    unitId && setUnitId(unitId);
    AdminToken && setToken(AdminToken);
    if (to.path != "/login") {
        // if (filterPath.indexOf(to.path) != -1) {
        //     store.dispatch("checkIsBind", router);
        // }
    }
    next();
});
