import Image from "next/image"
import Link from "next/link"

// import images



function ProductIntro() {

  return (
    <>
    <section className="productIntro">
      <div className="container">
        <div className="productIntro__wrapper">
        <iframe className="productIntro__video" width="1280" height="720" src="https://www.youtube.com/embed/5fcsba_DvEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProductIntro