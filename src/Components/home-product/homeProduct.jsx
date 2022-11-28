import Image from "next/image";
import { LinkBtn } from "../link-btn/linkBtn";
import Link from "next/link";

import productImage from "../../Assets/images/product_gr.png";
// import btnImg from "../../Assets/images/btn_bg.svg";

export const HomeProduct = () => {
  return (
    <section className="hproduct">
      <div className="container">
        <div className="hproduct__wrapper">
          <div className="hproduct__aside">
            <h2 className="hproduct__title" data-aos="fade-up-right" data-aos-duration="1200">Bizning mahsulotlar</h2>
            <p className="hproduct__text" data-aos="fade-up-right" data-aos-duration="1200">
              Turon unlari oshxonada o`z ijodini namoyon etishni, yangi va
              mazali ta`mlar bilan yaqinlarini quvontirishni yaxshi ko`radigan
              pazandalarimiz uchun mo`ljallangan.
            </p>
            <LinkBtn href="/product" bgcolor="#25317B" data-aos="fade-up-right" data-aos-duration="1200">Batafsil</LinkBtn>
          </div>
          <div className="hproduct__bside" data-aos="fade-up-left" data-aos-duration="1200">
            <Image src={productImage} alt="product_image"/>
          </div>
        </div>
      </div>
    </section>
  );
};
