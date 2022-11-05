import { useEffect, useRef } from 'react'
import Svg from '../../Assets/svg'
import Image from "next/image"
import Link from "next/link"

//import images
import Share from "../../Assets/images/share.svg"
import Document from "../../Assets/images/document.svg"
import SingleProduct from "../../Assets/images/single-product.png"

function SinglePro() {
    const share_down = useRef()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []) 

    const openShare = e => {
        e.preventDefault()
        share_down.current && share_down.current.classList.toggle('singlePro__social-list--active')
    }

    return (
        <section className='singlePro'>
            <div className="container">
                < Svg />
                <div className="singlePro__wrapper">
                    <div>
                        {/* <div className="singlePro__top">
                            <Image className="singlePro__top-img" src={SingleProduct} alt="single product" width={1112} height={664} />
                        </div> */}
                        <div className="singlePro__center">
                            <div className="singlePro__social">
                                <div className="singlePro__social-share" onClick={openShare}>
                                    <Image className="singlePro__social-img" src={Share} alt="social sites" />
                                    
                                </div>
                                <div ref={share_down} className="singlePro__social-list">
                                    <Link href="https://www.facebook.com/turonun/" target='_blank' rel='noreferrer'
                                        className="singlePro__social-item">
                                        <svg className="singlePro__social-img">
                                            <use xlinkHref="#facebook"></use>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.instagram.com/turonun" target='_blank' rel='noreferrer'
                                        className="singlePro__social-item">
                                        <svg className="singlePro__social-img">
                                            <use xlinkHref="#instagram"></use>
                                        </svg>
                                    </Link>
                                    <Link href="https://t.me/turonun" target='_blank' rel='noreferrer'
                                        className="singlePro__social-item">
                                        <svg className="singlePro__social-img">
                                            <use xlinkHref="#telegram"></use>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="singlePro__box">
                                <h2 className="singlePro__box-title">Turon oliy navli uni haqida ma’lumot</h2>
                                <p className="singlePro__box-text">Tabiiy va sifatli un mahsuloti hisoblangan “Turon” oliy navli bug‘doy uni ko‘p turdagi xamirli mahsulotlarni, taom va pishiriqlarni tayyorlash uchun mo’ljallangan.</p>
                                <h4 className="singlePro__box-subtitle">Tabiiy mahsulot
                                    Yuqori hajm va shaklni ta’minlaydi</h4>
                                    <p className="singlePro__box-text">Yuqori sifatli Turon oliy navli bug’doy uni mahsulotlarimiz 1 kg, 2 kg, 3 kg va 5 kg qadoqlarda, GOST 26574-85 bo’yicha barcha davlat standartlariga javob bergan holatda ishlab chiqariladi.</p>
                                    <h4 className="singlePro__box-subtitle">Mahsulot formulasi:</h4>
                                <ol className="singlePro__box-list">

                                    <li className="singlePro__box-item">Oqartirilmagan;</li>
                                    <li className="singlePro__box-item">Oqartirilmagan;</li>
                                    <li className="singlePro__box-item">Oqartirilmagan;</li>
                                    <li className="singlePro__box-item">Oqartirilmagan;</li>
                                    <li className="singlePro__box-item">Oqartirilmagan;</li>
                                    <li className="singlePro__box-item">Oqartirilmagan;</li>

                                </ol>
                                <h4 className="singlePro__box-subtitle">100 g mahsulotning ozuqaviy qiymati:</h4>
                                <ol className="singlePro__box-list">
                                    <li className="singlePro__box-item">Uglevodorodlar 68,7 g</li>
                                    <li className="singlePro__box-item">Uglevodorodlar 68,7 g</li>
                                    <li className="singlePro__box-item">Uglevodorodlar 68,7 g</li>
                                    <li className="singlePro__box-item">Uglevodorodlar 68,7 g</li>

                                </ol>
                                {/* <h4 className="singlePro__box-subtitle"></h4>
                                <ol className="singlePro__box-list">

                                    <li className="singlePro__box-item"></li>

                                </ol> */}
                                <h3 className='singlePro__box-boldtitle'>Saqlash muddati - 6 oy
                                </h3>
                                <button className='singlePro__btn'>
                                    <Image className='singlePro__btn-img' src={Document} alt="refresh" />
                                    <p className='singlePro__btn-text'>Sertifikat</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePro