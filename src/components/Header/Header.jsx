import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"


const Header = () => {
    return (
        <div className="Header">      
          <div className="headerLogo">
            <Link to="/"> 
            <img alt="Shop Logo" className="Logo" src="https://svgur.com/i/qzN.svg"/>
            </Link>
          </div>
          <div className="headerMiddleSection">
            <div className="headerNavBar">
                <Link to="/products/padel">Padel</Link>
                <Link to="/products/import">Import</Link>
                <Link to="/products/klaer">Klær</Link>
                <Link to="/products/salg">Salg</Link>
                <Link to="/products/tilbehoer">Tilbehør</Link>
            </div>
          </div>
          <div className="topRight">
            <Link to="/logginn">Logg inn</Link>
            <Link to="/cart">Handlekurv</Link>
          </div>
        </div>
      )
}

export default Header