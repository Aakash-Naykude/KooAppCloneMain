import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div>
           <div className="navContainer">
        <div className="navWrap">
            <div className="koologo-name">
                <a href="/">
                    <img className="logoKoo-home" src="https://www.kooapp.com/img/logoKuSolidOutline.svg" alt="Koo" />
                    <p> <b> <b> Koo</b> </b></p>
                </a>
            </div>

            <div className="koosearch">
                <input className="koo-srch-inp" type="text" placeholder="Search" />
            </div>

            <div className="kooicons">
                <img src="https://www.kooapp.com/assets/bce0173d.svg" alt="feeed" />
                <img src="https://www.kooapp.com/assets/8a272ace.svg" alt="explore" />
                <img src="https://www.kooapp.com/assets/d6c4a8f9.svg" alt="language" />
                <img src="https://www.kooapp.com/assets/15ce681a.svg" alt="notification" />
                <img src="https://www.kooapp.com/img/profilePlaceholderYellow.svg" alt="profile" />
            </div>
        </div>
      </div> 
        </div>
    )
}

export default LandingPage