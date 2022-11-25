import Image from "next/image"
import Link from "next/link"

// import images
import RecipeBg from "../../Assets/images/recipe-bg.png";
import SinglePic from "../../Assets/images/single-pic.png"
import SinglePicTwo from "../../Assets/images/single-pic2.png"
import Play from "../../Assets/images/Play.svg";
import Refresh from '../../Assets/images/refresh.svg'

function Recipes() {
    return (
      <>
            <div className='recipe'>
                <div className="container">
                    <div className="recipe__wrapper">
                        <h1 className="recipe__title">Bizning retseptlar</h1>
                        <p className="recipe__text">Mazali hamda foydali taomlarni tayyorlashni sevadigan qo`li shirin ayol-qizlarimizni kamtarona Turon oshxonasiga taklif qilamiz. Biz bilan yangi ta`mlarni kashf eting.</p>
                        <ul className='recipe__list'>
                            <li className='recipe__item'>
                                <Image className="recipe__item-img" src={RecipeBg} alt="homerecipe slider" width={'427'} height={'254'} />
                                <Link className="recipe__item-box" href={'/'}>
                                    <h4 className='recipe__item-title'>Kulcha non tayyorlash <br />(+Video)</h4>
                                    <button className='recipe__item-playbtn'>
                                        <Image className='recipe__item-img' src={Play} alt="play-btn" />
                                    </button>
                                </Link>
                            </li>
                            <li className='recipe__item'>
                                <Image className="recipe__item-img" src={SinglePic} alt="homerecipe slider" width={'427'} height={'254'} />
                                <Link className="recipe__item-box" href={'/'}>
                                    <h4 className='recipe__item-title'>Kulcha non tayyorlash <br />(+Video)</h4>
                                    <button className='recipe__item-playbtn'>
                                        <Image className='recipe__item-img' src={Play} alt="play-btn" />
                                    </button>
                                </Link>
                            </li>
                            <li className='recipe__item'>
                                <Image className="recipe__item-img" src={SinglePicTwo} alt="homerecipe slider" width={'427'} height={'254'} />
                                <Link className="recipe__item-box" href={'/'}>
                                    <h4 className='recipe__item-title'>Kulcha non tayyorlash <br />(+Video)</h4>
                                    <button className='recipe__item-playbtn'>
                                        <Image className='recipe__item-img' src={Play} alt="play-btn" />
                                    </button>
                                </Link>
                            </li>
                            <li className='recipe__item'>
                                <Image className="recipe__item-img" src={SinglePic} alt="homerecipe slider" width={'427'} height={'254'} />
                                <Link className="recipe__item-box" href={'/'}>
                                    <h4 className='recipe__item-title'>Kulcha non tayyorlash <br />(+Video)</h4>
                                    <button className='recipe__item-playbtn'>
                                        <Image className='recipe__item-img' src={Play} alt="play-btn" />
                                    </button>
                                </Link>
                            </li>
                            <li className='recipe__item'>
                                <Image className="recipe__item-img" src={SinglePicTwo} alt="homerecipe slider" width={'427'} height={'254'} />
                                <Link className="recipe__item-box"href={'/'}>
                                    <h4 className='recipe__item-title'>Kulcha non tayyorlash <br />(+Video)</h4>
                                    <button className='recipe__item-playbtn'>
                                        <Image className='recipe__item-img' src={Play} alt="play-btn" />
                                    </button>
                                </Link>
                            </li>
                            <li className='recipe__item'>
                                <Image className="recipe__item-img" src={RecipeBg} alt="homerecipe slider" width={'427'} height={'254'} />
                                <Link className="recipe__item-box" href={'/'}>
                                    <h4 className='recipe__item-title'>Kulcha non tayyorlash <br />(+Video)</h4>
                                    <button className='recipe__item-playbtn'>
                                        <Image className='recipe__item-img' src={Play} alt="play-btn" />
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        <div className="recipe__bottom">
                            <button className='recipe__morebtn'>
                                <Image className='recipe__morebtn-img' src={Refresh} alt="refresh" />
                                <p className='recipe__morebtn-text'>Ko`proq ko`rish</p>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </>
            )
}

            export default Recipes