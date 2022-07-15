import React from "react";
import './Nav.css'

import {Link} from 'react-router-dom'

function Nav(){
    return(
        <div>
            <p>welcom</p>
            <nav className="nav">
                <h1>
                    <Link to="/">HOME WORK</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/list01">상의</Link>
                    </li>
                    <li>
                        <Link to="/list02">하의</Link>
                    </li>
                    <li>
                        <Link to="/list03">로그인</Link>
                    </li>
                    <li>
                        <Link to="/list04">회원가입</Link>
                    </li>
                    <li>
                        <Link to="/list05">마이페이지</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Nav