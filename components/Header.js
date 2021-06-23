import Link from "next/link";
import Image from "next/image";
import logo from "../public/AS-logo-2021.png";
import backBtn from "../public/redo.png";

const Header = () => {
  return (
    <div className="main-container bg-white p-0">
      <div className="w-100 d-flex flex-row justify-content-start align-items-center header-asean">
        <div className="header_leftItem">
          <div className="header_logo_placement">
            <Link href="http://asean2021.bn/Theme/index.aspx" passHref={true}>
              <Image
                src={logo}
                alt="Asean Brunei 2021 logo"
                className="header-asean-logo"
              />
            </Link>
          </div>
        </div>
        <div className="header_rightItem d-lg-flex flex-row align-items-center d-none">
          <Image
            src={backBtn}
            alt="back button to Asean 2021"
            className="header-back-btn"
          />
          <div className="ms-2 ms-md-3">
            <span className="header_text"> Return Official Website</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
