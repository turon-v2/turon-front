import Image from "next/image"
import Link from "next/link"

// import images
import Wheat from "../../Assets/images/wheat.jpg"


function HomeAbout() {

    return (
        <>
            <div className="container">
                <h2 className="homeAbout__title"><span>DIAMANTE GROUP</span> компанияси Ўзбекистон бозорида  2015-йилдан бери ўз фаолиятини юритиб келаётган энг йирик ун ишлаб чиқарувчилардан бири хисобланади.</h2>

                <div className="homeAbout__wrapper">
                    <div className="homeAbout__box">
                        <Image className="homeAbout__img" src={Wheat} alt="wheat" width="443" height="650" />
                    </div>
                    <div className="homeAbout__block">
                        <h3 className="homeAbout__subtitle">Kompaniya haqida</h3>
                        <p className="homeAbout__text"><span>«DIAMANTE GROUP»</span> компанияси Ўзбекистон бозорида  2015-йилдан бери ўз фаолиятини юритиб келаётган энг йирик ун ишлаб чиқарувчилардан бири хисобланади. Иш фаолиятимиз давомида биз дон махсулотларини тайёрлаш, сақлаш ва қайта ишлаш бўйича катта тажрибага эга бўлдик... </p>
                        <button className="homeIntro__btn">Ba’tafsil</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAbout