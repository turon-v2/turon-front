import "../src/Assets/scss/main.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loading } from "../src/Components/loading";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const router = useRouter();

  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () =>
      setTimeout(() => {
        setLoading(false);
      }, 500);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return loading ? <Loading /> : <Component {...pageProps} />;
}

export default MyApp;
