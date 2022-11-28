import Link from "next/link";
import Image from "next/image";

import location from "../../Assets/images/location.svg";
import phone from "../../Assets/images/phone.svg";
import mail from "../../Assets/images/mail.svg";

export const HomeContact = () => {
  return (
    <section className="hcontact">
      <div className="container">
        <h2 className="hcontact__title" data-aos="fade-up-right">Biz bilan aloqa</h2>
        <div className="hcontact__wrapper">
          <ul className="hcontact__list">
            <li className="hcontact__item" data-aos="fade-up-right">
              <span>
                <Image src={phone} alt="phone_icon" />
              </span>
              <Link className="hcontact__link" href="tel: +998951698555">
                +998 95 169 85 55{" "}
              </Link>
            </li>
            <li className="hcontact__item" data-aos="fade-up-right">
              <span>
                <Image src={location} alt="location_icon" />
              </span>
              <p className="hcontact__link" data-aos="fade-up-right">
                Toshkent shahar <br /> Chilonzor 9KV, 11A
              </p>
            </li>
            <li className="hcontact__item" data-aos="fade-up-right">
              <span>
                <Image src={mail} alt="mail_icon" />
              </span>
              <Link className="hcontact__link" href="tel: +998951698555">
                info@turonuni.uz
              </Link>
            </li>
          </ul>
          <div className="hcontact__map" data-aos="fade-up-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.3227978195772!2d69.21887852919546!3d41.353583605400026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d5fe50172bb%3A0x9edf9cdfb1aac46e!2sTURON%20OSHXONASI!5e1!3m2!1sru!2s!4v1667725276191!5m2!1sru!2s"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
