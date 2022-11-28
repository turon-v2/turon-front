import Image from "next/image";
import Link from "next/link";

// import images
import AboutTop from "../../Assets/images/about-top.png";

function AboutIntro() {
  return (
    <>
      <section className="aboutIntro">
        <div className="container">
          <div
            className="aboutIntro__wrapper"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Image
              className="aboutIntro__img"
              src={AboutTop}
              alt="about top image"
              width="1280"
              height="720"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutIntro;
