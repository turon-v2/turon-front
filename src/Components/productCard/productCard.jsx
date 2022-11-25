import Image from "next/image"


export const ProductCard = ({img, title, desc, children,  bgcolor: backgroundColor}) =>{
// console.log(children, backgroundColor);
    return (
        <div className="productCard" style={{backgroundColor}}>
            {children} 
            {/* <div className="product__img--box">
                <Image src={img} alt="turon img" className="product__img" />
              </div>
              <div className="product__box">
                <h3 className="product__title">{title}</h3>
                <p className="product__info">{desc}</p>
                <LinkBtn bgcolor="#fff" children="Batafsil" href="/product/1"/> 
              </div> */}
        </div>
    )
}