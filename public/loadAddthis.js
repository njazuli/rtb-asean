import Script from "next/script";
const LoadAddthis = () => {
  return (
    <>
      <Script
        src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d92d889385b2fe2"
        strategy="lazyOnload"
      />
    </>
  );
};

export default LoadAddthis;
