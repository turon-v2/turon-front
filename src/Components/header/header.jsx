import Image from "next/image"
import Link from "next/link"
// import { useRef } from "react"

// import Modal from "./modal"

// import images
import Logo from "../../Assets/images/main_logo.svg"



function Header() {
  return (
    <>
     <div className="header__box">
            <Link className="header__logo-link" href={'/'}>
              <Image className="header__logo" src={Logo} alt="logo" width="237" height="87"/>
              </Link> 
            <div className="header__burger--box">
                <button  className="header__burger">
                    <span className="header__line"></span>
                    <span className="header__line"></span> 
                    <span className="header__line"></span>
                </button>
            </div>
        </div>
    </>
  )
}

export default Header