import React from 'react'
import logo from "../../assets/images/logo-footer.svg";

export default function Footer() {
  return (
    <footer className='footer-container'>
        <img src={logo} alt="logo de kasa" />
			  <p className="footer-container__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
