import Link from "next/link";
import Image from "next/image";
import AseanWhite from "../public/AS-logo-2021-white.png";
import RTB from "../public/RTB-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-bg text-center text-white">
        <div className="container-fluid px-0 px-lg-4">
          <div className="row align-items-center g-0">
            <div className="col-12 col-lg-3 my-2 my-lg-0">
              <div className="footer-logo mx-auto">
                <Image
                  src={AseanWhite}
                  alt="Asean Brunei 2021 logo"
                  layout="responsive"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 my-2 my-lg-0 ps-2">
              <div className="container-fluid">
                <div className="row g-0">
                  <div className="col-12">
                    <p className="text-lg-start f_16 fw-bold">CONTACT US</p>
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col-12 col-lg-8">
                    <p className="text-lg-start f_14">
                      RTB Broadcasting Complex Sungai Akar
                    </p>
                    <p className="text-lg-start f_14 mb-0 fw-bold">ADDRESS:</p>
                    <p className="text-lg-start f_14 mb-0">Kg Sungai Akar</p>
                    <p className="text-lg-start f_14 mb-0">
                      Jalan Utama Mentiri, BC3915
                    </p>
                    <p className="text-lg-start f_14 mb-0">
                      Negara Brunei Darussalam
                    </p>
                  </div>
                  <div className="col-12 col-lg-4 mt-2 mt-lg-0">
                    <p className="text-lg-start f_14 mb-0 fw-bold">
                      TELEPHONE:
                    </p>
                    <p className="text-lg-start f_14">(+673) 2-384-666</p>
                    <p className="text-lg-start f_14 mb-0 fw-bold">FAX:</p>
                    <p className="text-lg-start f_14">(+673) 2-384-518</p>
                  </div>
                </div>
                <div className="row g-0 d-none d-lg-flex">
                  <div className="col-12">
                    <p className="text-lg-start f_14">
                      ©️ 2021 Radio Televisyen Brunei. All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 my-2 my-lg-0">
              <Link href="http://asean2021.bn/Theme/index.aspx" passHref={true}>
                <div className="footer-rtb-logo mx-auto">
                  <Image
                    src={RTB}
                    alt="Asean Brunei 2021 logo"
                    layout="responsive"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="row g-0 d-flex d-lg-none mt-3">
            <div className="col-12">
              <p className="text-lg-start f_14">
                ©️ 2021 Radio Televisyen Brunei. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="text-center p-3">
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
