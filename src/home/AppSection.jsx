import React from 'react'
import { Link } from 'react-router-dom';
const btnText = "Sign up for Free"
const title = "Shop Anytime, AnyWhere"
const deac = "Take shop on your any device with our app & learn all time what you want. just download & install & start to learn"

;
const AppSection = () => {
return (
   <div className="app-section padding-tb">
    <div className="container">
        <div className="section-header text-center">
            <Link to="/sign-up" className="lab-btn mb-4">{btnText}</Link>
            <h2 className="title">{title}</h2>
            <p>{deac}</p>
        </div>
        <div className="section-wrapper">
            <ul className="lab-ul">
                <li>
                    <Link to="#">
                        <img src="https://raw.githubusercontent.com/mdalmamunit427/advanced-reactjs-ecommerce-website-starter-files/main/src/assets/images/app/01.jpg" alt="" />
                        </Link>
                        </li>
                <li>
                    <Link to="#">
                    <img src="https://raw.githubusercontent.com/mdalmamunit427/advanced-reactjs-ecommerce-website-starter-files/main/src/assets/images/app/02.jpg" alt="" />
                    </Link>
                    </li>
            </ul>
        </div>
    </div>
   </div>
)
}

export default AppSection ;
