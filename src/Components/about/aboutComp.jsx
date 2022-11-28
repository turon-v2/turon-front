import Image from "next/image"
import Link from "next/link"

import aboutImg from '../../Assets/images/about-img.png'
import aboutImg2 from '../../Assets/images/about-imgg.png'

function AboutComp() {
   
    return (
        <section className='about'>
            <div className="container">
                <div className="about__wrapper">
                    {/* <div className="about__top">
                        <Image className="about__top-img" src={AboutIntro} alt="single product" width={1112} height={664} />
                    </div> */}
                    <div className="about__center">
                        <h2 className='about__center-title' data-aos="fade-left" data-aos-duration="1000">Kompaniya haqida ma’lumot</h2>
                        <p className='about__center-text' data-aos="fade-left" data-aos-duration="1000">
                        O’zbekiston Respublikasida donni tayyorlash, saqlash, va qayta ishlash hamda eng yirik un ishlab chiqaruvchilardan biri bo’lgan 
                            <span className='about__center-text--bold'> «DIAMANTE GROUP» </span> kompaniyasi, 2015 yildan buyon ichki va tashqi bozorda o’z faoliyatini yuritib kelmoqda. Biz ishlab chiqarayotgan un mahsulotlarimiz qozoq bug’doyidan foydalangan holda hech qanday kimyoviy elementlarsiz, zamonaviy barcha standartlarga javob beruvchi 
                            <span className='about__center-text--bold'> GENC DEGIRMEN </span> uskunasida ishlab chiqariladi va barcha GOST talablariga javob beradi.
                        </p>
                        <p className='about__center-text' data-aos="fade-left" data-aos-duration="1000">
                        Bizning mahsulotlarimiz <span className='about__center-text--bold'> TURON </span> savdo belgisi ostida ishlab chiqariladi.
                        </p>
                        <p className='about__center-text' data-aos="fade-left" data-aos-duration="1000">
                        Yuqori sifatli maydalash kuchiga ega tegirmonimiz mavjud bo’lib, u kuniga 600 tonna un mahsuloti ishlab chiqaradi. Shuningdek donni tegirmonga un mahsulotlarini esa iste’molchilarga beminnat ytkazib berish uchun maxsus avtoparkimiz ham mavjud.
                        </p>
                    </div>
                    <div className="about__bottom">
                        <h3 className="about__bottom-title">Bizning galereya</h3>
                        <ul className="about__bottom-list">
                            <li className="about__bottom-item" data-aos="zoom-in" data-aos-duration="1000">
                                <Image className="about__bottom-img" src={aboutImg}
                                    alt="galereya rasmlar" width={380} height={228} />
                            </li>
                            <li className="about__bottom-item" data-aos="zoom-in" data-aos-duration="1000">
                                <Image className="about__bottom-img" src={aboutImg2}
                                    alt="galereya rasmlar" width={380} height={228} />
                            </li>
                            <li className="about__bottom-item" data-aos="zoom-in" data-aos-duration="1000">
                                <Image className="about__bottom-img" src={aboutImg}
                                    alt="galereya rasmlar" width={380} height={228} />
                            </li>
                            <li className="about__bottom-item" data-aos="zoom-in" data-aos-duration="1000">
                                <Image className="about__bottom-img" src={aboutImg2}
                                    alt="galereya rasmlar" width={380} height={228} />
                            </li>
                            <li className="about__bottom-item" data-aos="zoom-in" data-aos-duration="1000">
                                <Image className="about__bottom-img" src={aboutImg}
                                    alt="galereya rasmlar" width={380} height={228} />
                            </li>
                            <li className="about__bottom-item" data-aos="zoom-in" data-aos-duration="1000">
                                <Image className="about__bottom-img" src={aboutImg2}
                                    alt="galereya rasmlar" width={380} height={228} />
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComp