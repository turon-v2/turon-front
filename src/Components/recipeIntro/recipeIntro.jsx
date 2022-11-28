import Image from "next/image";
import Link from "next/link";

// import images

function RecipeIntro() {
  return (
    <>
      <section className="recipeIntro">
        <div className="container">
          <div
            className="recipeIntro__wrapper"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <iframe
              className="recipeIntro__video"
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/5fcsba_DvEU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecipeIntro;
