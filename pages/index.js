import React, { createRef, useEffect, useState, useRef } from "react";
import Head from "next/head";
import Player from "../components/Player";
import PlayerDetails from "../components/PlayerDetails";
import List from "../components/List";
import axios from "axios";

export async function getStaticProps() {
  const res = await fetch(
    `https://rtb.glueapi.io/v1/content/2702?format=json&sort=-dateAvailability`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  const is_data = data.data;
  const is_first_list = data.data.data["program-episode"];
  const [is_list, setList] = useState([]);
  const [is_item_details, setItemDetails] = useState([]);
  const [is_player_id, setPlayerId] = useState(0);
  const [is_id, setID] = useState();
  const [is_title, setTitle] = useState();
  const [is_description, setDescription] = useState();
  const [is_date, setDate] = useState();
  const live_player_id = 2;
  const [is_mounted, setMounted] = useState(false);
  let script_timeout = null;
  const widgetEl = createRef(null);
  const element = useRef(null);

  useEffect(() => {
    getEachData(is_first_list);
  }, [is_data]);

  useEffect(() => {
    setID(is_item_details.id);
    setTitle(is_item_details.title);
    setDate(is_item_details.dateCreated);
    setPlayerId(is_item_details.id);
  }, [is_item_details]);

  // load widget
  useEffect(() => {
    const containerRef = widgetEl.current;
    let widget = null;
    let widgetresizer = null;
    console.log("myContainer..", containerRef);
    widget = new RTBCountdownWidget(
      "https://njazuli.github.io/rtb-asean-widget/"
    );
    widget.loadBanner(containerRef);

    script_timeout = setTimeout(() => {
      widgetresizer = iFrameResize({
        log: false,
        inPageLinks: true,
      });
    }, 500);

    return () => {
      clearTimeout(script_timeout);
    };
  }, []);

  const getEachData = (list) => {
    Promise.all(
      list.map((items, index) => {
        axios
          .get("https://rtb.glueapi.io/v1/content/" + items.id)
          .then((response) => {
            const itemdetailsData = response.data.data;
            setList((prevState) => [...prevState, itemdetailsData]);
            if (index === 0) {
              setPlayerId(response.data.data.id);
              setID(response.data.data.id);
              setTitle(response.data.data.data.title);
              setDescription(response.data.data.data.description);
              setDate(response.data.data.dateCreated);
            }
          });
      })
    );
  };

  return (
    <div>
      <Head>
        <title>ASEAN Summit 2021 - Logo ASEAN 2021</title>
        <meta
          name="description"
          content="ASEAN Summit 2021 - Logo ASEAN 2021"
        />
        <link
          rel="icon"
          href="http://asean2021.bn/Theme/assets/img/favicon.png"
        />
        <script src="https://njazuli.github.io/rtb-asean-widget/rtb-countdown-widget.js"></script>
        <script src="https://njazuli.github.io/rtb-asean-widget/banner/js/iframeResizer.min.js"></script>
      </Head>
      <div className="w-100 main-top-pattern"></div>
      <section className="w-100 live-section-bg">
        <div className="container-fluid">
          <div className="row g-0 d-flex justify-content-center align-items-center live-section-padding">
            <div className="col-12">
              <h2 className="live-section-title pb-2">Live Streaming</h2>
            </div>
            <div className="col-12 col-lg-10 col-xl-8">
              <Player id={live_player_id} />
            </div>
          </div>
        </div>
      </section>
      <section className="main-padding">
        <div className="container">
          <div className="row mb-2">
            <div className="col-12">
              <h2 className="text-center fw-bold">Media</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8">
              <Player id={is_player_id} />
              <PlayerDetails
                id={is_id}
                title={is_title}
                description={is_description}
                date={is_date}
              />
              <div className="w-100 mb-3 mb-lg-0">
                <div ref={widgetEl} id="widgetBanner"></div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <p className="fw-bold f_22">More Videos</p>
              <List
                list={is_list}
                setOnSelectedList={setItemDetails}
                setSelectionDescription={setDescription}
                firstID={is_player_id}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
