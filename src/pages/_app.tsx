import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/index.css";
import "@/styles/clients.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Body from "@/components/body";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";
import Store from "@/redux/Store";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <Provider store={Store}>
      <Body>
        <Component {...pageProps} />;
      </Body>
    </Provider>
  );
}
