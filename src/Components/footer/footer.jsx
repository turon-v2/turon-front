import Image from "next/image"
import Link from "next/link"

// import images
import footerLogo from "../../Assets/images/footer-logo.svg"
import Svg from "../../Assets/svg"



function Footer({ bgPath }) {
  return (
    <div className={`footer__wrapper && footer__wrapper--${bgPath}`}>
      <div className="container">
        <Svg />
        <nav className="footer__nav">
          <Link className="footer__logo-link" href={'/'} data-aos="fade-right" data-aos-duration="1500">
            <Image className="footer__logo" src={footerLogo} alt="logo" width="239" height="89" />
            {/* <svg className={`footer__logo && footer__logo--${bgPath}`} width="239" height="89" >
              <use xlinkHref="#footer-logo"></use>
            </svg> */}
          </Link>
          <ul className="footer__list">
            <li className="footer__item" data-aos="fade-up" data-aos-duration="1500">
              <Link href="/" className={`footer__link && footer__link--${bgPath}`}>Bosh sahifa</Link>
            </li>
            <li className="footer__item" data-aos="fade-up" data-aos-duration="1500">
              <Link href="/product" className={`footer__link && footer__link--${bgPath}`}>Mahsulotlar</Link>
            </li>
            <li className="footer__item" data-aos="fade-up" data-aos-duration="1500">
              <Link href="/recipe" className={`footer__link && footer__link--${bgPath}`}>Retseplar</Link>
            </li>
            <li className="footer__item" data-aos="fade-up" data-aos-duration="1500">
              <Link href="/about" className={`footer__link && footer__link--${bgPath}`}>Haqida</Link>
            </li>
            <li className="footer__item" data-aos="fade-up" data-aos-duration="1500">
              <Link href="/contact" className={`footer__link && footer__link--${bgPath}`}>Aloqa</Link>
            </li>
          </ul>
        </nav>
        <div className="footer__social">
          <div className="footer__social-list">
            <Link href="https://www.facebook.com/turonun/" target='_blank' rel='noreferrer'
              className={`footer__social-item && footer__social-item--${bgPath}`} data-aos="fade-right" data-aos-duration="1500">
              <svg className={`footer__social-img && footer__social-img--${bgPath}`}>
                <use xlinkHref="#facebook"></use>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/turonun" target='_blank' rel='noreferrer'
              className={`footer__social-item && footer__social-item--${bgPath}`} data-aos="fade-up" data-aos-duration="1500">
              <svg className={`footer__social-img && footer__social-img--${bgPath}`}>
                <use xlinkHref="#instagram"></use>
              </svg>
            </Link>
            <Link href="https://t.me/turonun" target='_blank' rel='noreferrer'
              className={`footer__social-item && footer__social-item--${bgPath}`}  data-aos="fade-left" data-aos-duration="1500">
              <svg className={`footer__social-img && footer__social-img--${bgPath}`}>
                <use xlinkHref="#telegram"></use>
              </svg>
            </Link>
          </div>
        </div>
        <div className="footer__bottom">
          <p className={`footer__bottom text && footer__bottom text--${bgPath}`}>©2022 Barcha huquqlar himoyalangan</p>
        </div>
      </div>
    </div>
  )
}

export default Footer