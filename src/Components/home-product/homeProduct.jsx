import Image from "next/image";
import { LinkBtn } from "../link-btn/linkBtn";
import Link from "next/link";

import productImage from "../../Assets/images/product_gr.png";
import btnImg from "../../Assets/images/btn_bg.svg";

export const HomeProduct = () => {
  return (
    <section className="hproduct">
      <div className="container">
        <div className="hproduct__wrapper">
          <div className="hproduct__aside">
            <h2 className="hproduct__title">Bizning mahsulotlar</h2>
            <p className="hproduct__text">
              Turon unlari oshxonada o`z ijodini namoyon etishni, yangi va
              mazali ta`mlar bilan yaqinlarini quvontirishni yaxshi ko`radigan
              pazandalarimiz uchun mo`ljallangan.
            </p>
            <LinkBtn href="/product" bgcolor="#25317B">Batafsil</LinkBtn>
          </div>
          <div className="hproduct__bside">
            <Image src={productImage} alt="product_image"/>
          </div>
        </div>
      </div>
    </section>
  );
};
