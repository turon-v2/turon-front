import Image from "next/image";
import Link from "next/link";

// import images
import Wheat from "../../Assets/images/wheat.jpg";
import { LinkBtn } from "../link-btn/linkBtn";

function HomeAbout() {
  return (
    <section className="homeAbout">
      <div className="container">
        <div className="homeAbout__content">
          <h2 className="homeAbout__title">
            <span>Turon — </span> maqsadi iste’molchilarga hamyonbop narxlarda
            sifatli mahsulot taqdim etish bo’lgan kompaniya.
          </h2>

          <div className="homeAbout__wrapper">
            <div className="homeAbout__box">
              <Image
                className="homeAbout__img"
                src={Wheat}
                alt="wheat"
                width="443"
                height="650"
              />
            </div>
            <div className="homeAbout__block">
              <h3 className="homeAbout__subtitle">Kompaniya haqida</h3>
              <p className="homeAbout__text">
                <span>«DIAMANTE GROUP»</span> kompaniyasi O‘zbekiston bozorida
                2015-yildan buyon o’z faoliyatini yuritib kelayotgan eng yirik
                un ishlab chiqaruvchi kompaniyalardan biri. Faoliyatimiz
                davomida biz don mahsulotlarini tayyorlash, saqlash va qayta
                ishlash bo‘yicha katta tajribaga ega bo‘ldik...{" "}
              </p>
              <LinkBtn href="/about" bgcolor="#CC1C08">Batafsil</LinkBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
