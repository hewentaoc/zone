import React,{useState,useCallback,useEffect} from 'react'
import QRCode from 'qrcode.react';
import myCookie from '@/utils/cookie.js'
import config from '@/config.js'
const {user,pwd} = config;
let oCookie = new myCookie();
export default function LoginContent({history}) {
    let val = oCookie.findCookie('user');
    let initUser = '';
    let initPwd = '';
    if(val){
       initUser = val;
       initPwd = '1390613445'
    }
    const [isShow,setShow] = useState(true);
    const [username,setUserName] = useState(initUser);
    const [password,setPwd] = useState(initPwd);
    //保存箭头函数的地址,避免函数的重新初始化
    const changeShow = useCallback(()=>{
        setShow(!isShow)
    })
    const handClick = useCallback(()=>{
        console.log(username,password,username == user)
        if(username == user && password == pwd ){
            oCookie.findCookie('user') ?? oCookie.createCookie('user',username,10000)
            history.push('/zone')
        }
    })

    return (
        <div className='c-login-content'>
            <div className={
                ["c-login-input"]
            }>
                <div className={
                     ['login-qr',isShow ? 'show-qr' : 'show-cp'].join(' ')
                } onClick={changeShow}>
                </div>
                <div className={
                  `input-wrapper ${isShow ? '': 'hide'}`
                }>
                    <div>
                      <input className='input' value={username} type="text" onChange={(e)=>{
                          setUserName(e.target.value)
                      }}/>
                    </div>
                    <div>
                      <input className='input' value={password} type="password" onChange={(e)=>{
                          setPwd(e.target.value)
                      }}/>
                    </div>
                    <div>
                        <button onClick={handClick}>登录</button>
                    </div>
                </div>
                <div className={
                    `qr-code ${!isShow ? '': 'hide'}`
                }>
                    <QRCode
                        value='https://www.baidu.com/'// 生成二维码的内容
                        size={300} // 二维码的大小
                        fgColor="#000000" // 二维码的颜色
                    />
                </div>
            </div>
            <div className="login-content-bg">
               
            </div>
        </div>
    )
}
