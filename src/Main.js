import React from "react";

// 라우터깔고 연결
import {BrowserRouter,Routes,Route} from 'react-router-dom'

// App가져오기
import App from './component/App'

// 페이지 가져오기
import HomePage from './pages/Homepage'
import Sample01 from './pages/sample01'
import Sample02 from './pages/sample02'
import Sample03 from './pages/sample03'
import Sample04 from './pages/sample04'
import Sample05 from './pages/sample05'


function Main(){
    return(
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/list01" element={<Sample01 />} />
                    <Route path="/list02" element={<Sample02 />} />
                    <Route path="/list03" element={<Sample03 />} />
                    <Route path="/list04" element={<Sample04 />} />
                    <Route path="/list05" element={<Sample05 />} />
                </Routes>
            </App>
        </BrowserRouter>
    )
}


export default Main