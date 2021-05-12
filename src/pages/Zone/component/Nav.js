import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/nav.scss'
export default function Nav() {
    return (
        <div className='c-nav'>
            <ul className='c-nav-content'>
                <li>
                    <NavLink to='/zone' >跳转1</NavLink>
                </li>
                <li><NavLink to='/zone2' >跳转2</NavLink></li>
                <li><NavLink to='/zone3' >跳转3</NavLink></li>
                <li><NavLink to='/zone4' >跳转4</NavLink></li>
                <li><NavLink to='/zone5' >跳转5</NavLink></li>
            </ul>
            <div className='c-banner-bg'>
                <div className='c-banner-tip'>
                    <p>共生未来</p>
                </div>
            </div>
        </div>
    )
}
