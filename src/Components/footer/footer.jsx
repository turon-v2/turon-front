import Image from "next/image"
import Link from "next/link"

// import images
import footerLogo from "../../Assets/images/footer-logo.svg"
import Svg from "../../Assets/svg"



function Footer({bgPath}) {
  return (
    <div className={`footer__wrapper--${bgPath}`}>
      <div className="container">
        <Svg />
        <nav className="footer__nav">
          <Link className="footer__logo-link" href={'/'}>
            <Image className="footer__logo" src={footerLogo} alt="logo" width="239" height="89" />
          </Link>
          <ul className="footer__list">
            <li className="footer__item">
              <Link href="/" className="footer__link">Bosh sahifa</Link>
            </li>
            <li className="footer__item">
              <Link href="/product" className="footer__link">Mahsulotlar</Link>
            </li>
            <li className="footer__item">
              <Link href="/recipe" className="footer__link">Retseplar</Link>
            </li>
            <li className="footer__item">
              <Link href="/about" className="footer__link">Haqida</Link>
            </li>
            <li className="footer__item">
              <Link href="/contact" className="footer__link">Aloqa</Link>
            </li>
          </ul>
        </nav>
        <div className="footer__social">
          <div className="footer__social-list">
            <Link href="https://www.facebook.com/turonun/" target='_blank' rel='noreferrer'
              className="footer__social-item">
              <svg className="footer__social-img">
                <use xlinkHref="#facebook"></use>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/turonun" target='_blank' rel='noreferrer'
              className="footer__social-item">
              <svg className="footer__social-img">
                <use xlinkHref="#instagram"></use>
              </svg>
            </Link>
            <Link href="https://t.me/turonun" target='_blank' rel='noreferrer'
              className="footer__social-item">
              <svg className="footer__social-img">
                <use xlinkHref="#telegram"></use>
              </svg>
            </Link>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__bottom-text">©2022 Barcha huquqlar himoyalangan</p>
        </div>
      </div>
    </div>
  )
}

export default Footer