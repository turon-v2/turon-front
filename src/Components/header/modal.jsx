import Image from "next/image";
import Link from "next/link";

function Modal({active}) {
  return (
    <>
      <section className={!active ? "modal" : "modal modal--active"}>
        <ul className="modal__list">
          <li className="modal__item">
            <Link href="/" className="modal__link">Bosh sahifa</Link>
          </li>
          <li className="modal__item">
            <Link href="/product" className="modal__link">Mahsulotlar</Link>
          </li>
          <li className="modal__item">
            <Link href="/recipe" className="modal__link">Retseplar</Link>
          </li>
          <li className="modal__item">
            <Link href="/about" className="modal__link">Korxona haqida</Link>
          </li>
          <li className="modal__item">
            <Link href="/contact" className="modal__link">Aloqa</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Modal;
