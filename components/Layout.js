import Footer from "./Footer";
import Header from "./Header";
import LoadAddthis from "../public/loadAddthis";

const Layout = ({ children }) => {
  return (
    <>
      <LoadAddthis />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
