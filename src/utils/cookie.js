/**
 * 得到cookie信息的工具
 */
class myCookie {
    createCookie = (name,value,time)=>{
        document.cookie = `${name}=${value};max-age=${time};`;
    }

    removeCookie = (name)=>{
        this.createCookie(name,'',-1)
    }

    findCookie = (name)=>{
        return transformCookie(document.cookie,name)
    }
}

/**
 * 将cookie字符串转化为对象
 * @param {*} cookie 
 * @param {*} name 
 */
function transformCookie(cookie,name){
    let data = cookie.split('; ')
    let obj = data.reduce((store,item,index)=>{
        let [key,value] = item.split('=');
        store[key] = value;
        return store;
    },{});
    return obj[name];
}

export default myCookie;