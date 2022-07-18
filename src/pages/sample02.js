import React from "react";
import {Link} from 'react-router-dom'

import './page.css'

function Sample02(){
    return(
        <>
        <article id='home'>
            <h1>하의 페이지 입니다</h1>
            <p>대표 상품 리스트 입니다.</p>
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
                    <Link to="/list05">마이페이지</Link>
                </li>
            </ul>
        </article>
        </>
    )
}


export default Sample02