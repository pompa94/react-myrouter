import React from "react";

// 여기에 Nav랑 Footer를 가져옴
import Nav from './Nav'
import Footer from './Footer'


// children으로 페이지들이 들어갈 자리를 만들어준다
function App({children}){
    return(
        <div id="wrap">
            <Nav />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}


export default App