import { useEffect, useRef} from 'react'
import Svg from '../../Assets/svg'
import Image from "next/image"
import Link from "next/link"
//import images
import SinglePic from "../../Assets/images/single-pic.png"
import SinglePicTwo from "../../Assets/images/single-pic2.png"

function SingleRecipes() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section className='singleRecipes'>
            <div className="container">
                < Svg />
                <div className="singleRecipes__wrapper">
                   
                            <div >
                                <div className="singleRecipes__center">
                                    <div className="singleRecipes__box">
                                        <h2 className="singleRecipes__box-title">Kulchali non tayyorlash</h2>
                                        <p className="singleRecipes__box-text">Ishni birinchi bo‘lib, 100 ml iliq sutga 18 gr drojji, 30 gr shakar, 15 gr tuz solib apara kilishdan boshlaymiz. Apara 10 daqiqa usti yopilgan xolda oshiriladi. Boshqa idishga 400 ml iliq sutni solib, ustiga oshirilgan apara va 100 gr eritilgan margarin solib aralashtirib, 1 kg Turon unini solib yumshoq xamir qoramiz. Xamirni ustini yopib, 1 soatga tindiramiz. Tingan xamirni o‘tacha bo‘laklarga bulib yana 30 daqiqaga tindirib qo‘yamiz. So‘ngra har bir zuvalachalardan kulcha non yasab, ustiga tuxum surtib, kunjut va sedana sepiladi. Kulchalar 200 gradusda kizigan gaz pechida 40 daqiqa davomida pishirib olinadi.</p>
                                        <h3 className="singleRecipes__box-subtitle">Kerakli mahsulotlar</h3>
                                        <ol className="singleRecipes__box-list">
                                           
                                                    <li className="singleRecipes__box-item">Turon uni 1KG</li>
                                                    <li className="singleRecipes__box-item">Turon uni 1KG</li>
                                                    <li className="singleRecipes__box-item">Turon uni 1KG</li>
                                                    <li className="singleRecipes__box-item">Turon uni 1KG</li>
                                                    <li className="singleRecipes__box-item">Turon uni 1KG</li>
                                                    <li className="singleRecipes__box-item">Turon uni 1KG</li>
                                                    <li className="singleRecipes__box-item">Turon uni 1KG</li>
                                                    <li className="singleRecipes__box-item">Turon uni 1KG</li>
                                              
                                        </ol>
                                    </div>
                                </div>
                                <div className="singleRecipes__bottom">
                                    <h3 className="singleRecipes__bottom-title">Rasmlar </h3>
                                    <ul className="singleRecipes__bottom-list">
                                        <li className="singleRecipes__bottom-item">
                                            <Image className="singleRecipes__bottom-img" src={SinglePic}
                                                alt="retsept rasmlar" width={380} height={228} />
                                        </li>
                                        <li className="singleRecipes__bottom-item">
                                            <Image className="singleRecipes__bottom-img" src={SinglePicTwo}
                                                alt="retsept rasmlar" width={380} height={228} />
                                        </li>
                                        <li className="singleRecipes__bottom-item">
                                            <Image className="singleRecipes__bottom-img" src={SinglePic}
                                                alt="retsept rasmlar" width={380} height={228} />
                                        </li>
                                        <li className="singleRecipes__bottom-item">
                                            <Image className="singleRecipes__bottom-img" src={SinglePicTwo}
                                                alt="retsept rasmlar" width={380} height={228} />
                                        </li>
                                        <li className="singleRecipes__bottom-item">
                                            <Image className="singleRecipes__bottom-img" src={SinglePic}
                                                alt="retsept rasmlar" width={380} height={228} />
                                        </li>
                                        <li className="singleRecipes__bottom-item">
                                            <Image className="singleRecipes__bottom-img" src={SinglePicTwo}
                                                alt="retsept rasmlar" width={380} height={228} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                </div>
            </div>
        </section>
    )
}

export default SingleRecipes