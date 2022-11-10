//Components
import Header from "../header/header";
import Footer from "../footer/footer";
// import FooterMobile from '../footer-mobile/footer-mobile'

const layout = ({ children, bgPathLay }) => {

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer" >
        <Footer bgPath={bgPathLay}/>
      </footer>
    </>
  );
};

export default layout;
