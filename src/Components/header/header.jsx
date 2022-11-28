import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
// import { useRef } from "react"

// import Modal from "./modal"

// import images
import Logo from "../../Assets/images/main_logo.svg"
import Modal from "./modal"



function Header() {
  const [isactive, setIsActive] = useState(false)

  return (
    <>
     <div className="header__box">
            <Link style={{position: isactive && "fixed"}} className="header__logo-link" href={'/'}>
              <Image className="header__logo" src={Logo} alt="logo" width="237" height="87"/>
              </Link> 
            <div className="header__burger--box" style={{position: isactive && "fixed"}} data-aos="fade-left">
                <button className={!isactive ? "header__burger" : "header__burger header__burger--active"} onClick={() => setIsActive(!isactive)}>
                    <span className="header__line"></span>
                    <span className="header__line"></span>
                    <span className="header__line"></span> 
                </button>
            </div>
            <Modal active={isactive && "active"}/>
        </div>
    </>
  )
}

export default Header