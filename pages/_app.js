import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import * as gtag from "../lib/gtag";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
