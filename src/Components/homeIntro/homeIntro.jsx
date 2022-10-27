import Image from "next/image"
import Link from "next/link"

// import images
import homeIntroImg from "../../Assets/images/turon_un_3.png"



function HomeIntro() {

  return (
    <>
    <div className="container">
                <div className="homeIntro__wrapper">
                    <div className="homeIntro__img--box">
                        <Image className="homeIntro__img" src={homeIntroImg} alt="turon_un"/>
                    </div>
                    <div className="homeIntro__block">
                        <h1 className="homeIntro__title">Sizning oshxonadagi eng yaqin yordamchingiz!</h1>
                        <button className="homeIntro__btn">Ba’tafsil</button>
                    </div>
                </div> 
            </div>
    </>
  )
}

export default HomeIntro