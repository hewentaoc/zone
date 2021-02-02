import React, { Component } from 'react'
import LoginContent from './component/LoginContent'
import './login.scss'

export default class Login extends Component {
    render() {
        return (
            <div className='c-login'>
                <LoginContent {...this.props} {...this.state}/>
            </div>
        )
    }
}




