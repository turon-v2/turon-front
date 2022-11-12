import Image from "next/image"
import Link from "next/link"
import { LinkBtn } from "../link-btn/linkBtn";

//import images
import Phone from '../../Assets/images/phone.svg'
import Location from '../../Assets/images/location-marker.svg'
import Mail from '../../Assets/images/mail.svg'


function ContactComp() {
    return (
        <section className='contact'>
            <div className="container">
                <div className="contact__wrapper">
                    <div className="contact__left">
                        <ul className='contact__list'>
                            {/* <li className='contact__item'>
                                <label htmlFor=""><Image className='contact__item-img' src={Building} alt="" /></label>
                                <select className='contact__item-select' name="" id="">
                                    <option className='contact__item-option' value="">Toshkent</option>
                                    <option className='contact__item-option' value="">Samarqand</option>
                                </select>
                            </li> */}
                            <li className='contact__item'>
                                <Image className='contact__item-img' src={Phone} alt="" />
                                <p className='contact__item-text'>+998 95 169-8555 <br />
                                    +998 99 791-8556 </p>
                            </li>
                            <li className='contact__item'>
                                <Image className='contact__item-img' src={Location} alt="" />
                                <p className='contact__item-text'>Toshkent sh, Chilonzor 9KV, 11A</p>
                            </li>
                            <li className='contact__item'>
                                <Image className='contact__item-img' src={Mail} alt="" />
                                <p className='contact__item-text'>info@turonuni.uz</p>
                            </li>
                        </ul>
                        <h3 className='contact__form-title'>Tezkor aloqa</h3>
                        <p className='contact__form-text'>Assalomu alaykum!Bizga xabaringizni qoldiring, har bir xabar biz uchun qadrli.</p>
                        <form className='contact__form' action="" method="post">
                            <input className='contact__input' type="name" placeholder="Ismingiz" />
                            <input className='contact__input' type="email" placeholder="E-mail"/>
                            <input className='contact__input' type="text" placeholder="Sarlavha"/>
                            {/* <input className='contact__input' type="text" placeholder="" /> */}
                            <input className='contact__input contact__input--big' type="text" placeholder="To`liq matn" />
                            <LinkBtn href="/contact" bgcolor="#CC1C08">Yuborish</LinkBtn>
                            {/* <button className='contact__btn'>Yuborish</button> */}
                        </form>
                    </div>
                    <div className="contact__right">
                        <iframe className="contact__right-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.7358539606965!2d69.218878529206!3d41.353583605400004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d5fe50172bb%3A0x9edf9cdfb1aac46e!2sTURON%20OSHXONASI!5e0!3m2!1suz!2s!4v1655989331093!5m2!1suz!2s"
                            width="880" height="810" allowFullScreen="" loading="lazy"
                            title="myFrame"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactComp