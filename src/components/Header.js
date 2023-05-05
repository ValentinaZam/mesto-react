import React from "react"
import "../index.css"
import headerLogo from "../images/logo/logo_header.svg"

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип Mesto" />
    </div>
  )
}

export default Header
