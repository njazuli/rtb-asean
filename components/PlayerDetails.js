import moment from "moment";
import Head from "next/head";

const PlayerDetails = ({ id, title, description, date }) => {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d92d889385b2fe2"
        ></script>
        <title>ASEAN Summit 2021 {title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content="../public/favicon.png" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <div className="w-100 my-2">
        <p className="main-title f_20 mb-0">{title}</p>
      </div>
      <div
        className="
                  w-100
                  d-flex
                  justify-content-start
                  pt-2
                  pb-3
                  mb-3
                  align-items-center
                  border-bottom
                  flex-row
                "
      >
        <div className="h-100 d-flex align-items-center">
          <span className="f_14 date-time-and-share me-4">
            {moment(date).format("D MMM YYYY")}
          </span>
        </div>
        <div className="h-100 d-flex align-items-center">
          <div className="addthis_inline_share_toolbox_gryg"></div>
        </div>
      </div>

      <div className="w-100 mb-4">
        <p className="main-desc f_14 mb-4"> {description}</p>
      </div>
    </>
  );
};

export default PlayerDetails;
