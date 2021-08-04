import React, { createRef, useEffect, useState, useRef } from "react";
import Head from "next/head";
import LiveSection from "../components/LiveSection";
import List from "../components/List";
import Player from "../components/Player";
import PlayerDetails from "../components/PlayerDetails";
import axios from "axios";

export async function getStaticProps() {
  const res = await fetch(
    `https://rtb.glueapi.io/v1/content/3147?format=json&sort=-dateAvailability`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 120, // Revalidate every 10 seconds with new data.
  };
}

export default function Live({ data }) {
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

  useEffect(() => {
    getEachData(is_first_list);
  }, [is_data]);

  useEffect(() => {
    setID(is_item_details.id);
    setTitle(is_item_details.title);
    setDate(is_item_details.dateCreated);
    setPlayerId(is_item_details.id);
  }, [is_item_details]);

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
    <div className="bg_pattern">
      <Head>
        <title>ASEAN Summit 2021</title>
        <meta name="description" content="ASEAN Summit 2021" />
        <link rel="icon" href="/static/favicon.ico" />
        <script src="https://njazuli.github.io/rtb-asean-widget/rtb-countdown-widget.js"></script>
        <script src="https://njazuli.github.io/rtb-asean-widget/banner/js/iframeResizer.min.js"></script>
      </Head>
      <div className="w-100 main-top-pattern"></div>
      <LiveSection liveplayerId={live_player_id} />
      <section className="main-padding">
        <div className="container">
          <div className="row mb-2">
            <div className="col-12">
              <h2 className="text-center fw-bold">Media</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-7 col-xl-8 bg-white py-2 py-lg-3 rounded">
              <Player id={is_player_id} />
              <PlayerDetails
                id={is_id}
                title={is_title}
                description={is_description}
                date={is_date}
              />
            </div>
            <div className="col-12 col-lg-5 col-xl-4">
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
