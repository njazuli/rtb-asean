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
            <Link href="http://asean2021.bn/" passHref={true}>
              <div className="header-asean-logo">
                <Image
                  src={logo}
                  alt="Asean Brunei 2021 logo"
                  className="header-asean-logo"
                  layout="responsive"
                  quality={100}
                  sizes="(max-width: 500px) 100vw, 25vw"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="header_rightItem d-sm-flex flex-row align-items-center d-none">
          <div className="header-back-btn">
            <Image
              src={backBtn}
              alt="back button to Asean 2021"
              className="header-back-btn"
              layout="responsive"
            />
          </div>
          <div className="ms-2 ms-md-3">
            <span className="header_text">Return to Official Website</span>
          </div>
        </div>
        <div className="header_rightItem d-sm-none flex-row align-items-center d-flex">
          <Image
            src={backBtn}
            alt="back button to Asean 2021"
            className="header-back-btn pe-2"
            width={30}
            height={20}
          />
          <Link href="http://asean2021.bn/" passHref={true} style="pe-auto">
            <span className="header_text">Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
