import myCookie from './cookie.js'
let oCookie = new myCookie();
export function isLogin(key){
    let value = oCookie.findCookie(key);
    if(value){
        return true;
    }
    return false;
}
