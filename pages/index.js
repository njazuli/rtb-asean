import React, { useEffect, useState } from "react";
import Head from "next/head";
import Player from "../components/Player";
import PlayerDetails from "../components/PlayerDetails";
import List from "../components/List";

const PlayerDetailsItems = {
  title: "37th ASEAN Summit Logo",
  description:
    'Ukiran emas diinspirasikan daripada "Bunga Ayer Muleh", melambangkan motif tradisional Negara Brunei Darussalam. Ukiran ini memberi pengertian bahawa ASEAN sentiasa mengalu-alukan kerjasama dengan negara-negara luar yang menyumbang ke arah pembangunan serta meningkatkan kedayatahanan rantau ASEAN.',
  date: "2021-04-28T07:31:15.713",
};

export default function Home() {
  const [is_item_details, setItemDetails] = useState([]);
  console.log("is_item_details" + is_item_details);
  return (
    <div>
      <Head>
        <title>ASEAN Summit 2021 - Logo ASEAN 2021</title>
        <meta
          name="description"
          content="ASEAN Summit 2021 - Logo ASEAN 2021"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="w-100 main-top-pattern"></div>
      <section className="main-padding">
        <div className="container">
          <div className="row mb-2">
            <div className="col-12">
              <h2 className="text-center fw-bold">Media</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8">
              <Player id="3540" />
              <PlayerDetails details={PlayerDetailsItems} />
            </div>
            <div className="col-12 col-lg-4">
              <p className="fw-bold f_22">More Videos</p>
              <List setMainDetails={setItemDetails} />
            </div>
          </div>
        </div>
      </section>
      <p>{is_item_details}</p>
    </div>
  );
}
