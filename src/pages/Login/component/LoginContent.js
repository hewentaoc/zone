import React from 'react'

export default function LoginContent() {
    return (
        <div className='c-login-content'>
            <div className="c-login-input">
                <div className='input-wrapper'>
                    <div>
                      <input className='input' type="text"/>
                    </div>
                    <div>
                      <input className='input' type="password"/>
                    </div>
                    <div>
                        <button>登录</button>
                    </div>
                </div>
            </div>
            <div className="login-content-bg">

            </div>
        </div>
    )
}
