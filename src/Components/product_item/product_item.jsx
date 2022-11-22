import Image from "next/image"
import { LinkBtn } from "../link-btn/linkBtn"

export const ProductItem = ({img, title, desc, bgcolor, color}) => {
    return (
        <>
        <li className="product__card">
              <div className="product__img--box">
                <Image src={img} alt="turon img" className="product__img" />
              </div>
              <div className="product__box">
                <h3 className="product__title">{title}</h3>
                <p className="product__info">{desc}</p>
                <LinkBtn bgcolor="#fff" children="Batafsil" href="/product/1"/>
              </div>
            </li>
        </>
        )
}