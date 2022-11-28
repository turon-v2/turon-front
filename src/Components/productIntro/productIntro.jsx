import Image from "next/image";
import Link from "next/link";

// import images

function ProductIntro() {
  return (
    <>
      <section className="productIntro">
        <div className="container">
          <div className="productIntro__wrapper" data-aos="zoom-in" data-aos-duration="1200">
            <iframe
              className="productIntro__video"
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/5fcsba_DvEU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductIntro;
