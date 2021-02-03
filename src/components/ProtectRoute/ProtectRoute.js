import React, { Component } from 'react'
import {BrowserRouter,Route, Redirect} from 'react-router-dom'
import {isLogin} from '@/utils/isLogin.js';
/**
 * 路由保护组件
 * 保护没有登录的页面
 */
export default class ProtectRoute extends Component {
    render() {
        const {component:Comp,render,children,...res} = this.props;
        return (
            <Route {...res} render={()=>{
                if(isLogin('user')){
                    return <Comp/>
                }else{
                    return <Redirect to='/login'/>
                }
            }}>
            </Route>
        )
    }
}
