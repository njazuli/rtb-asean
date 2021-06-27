import Head from "next/head";
import Image from "next/image";
import Player from "../components/Player";
import PlayerDetails from "../components/PlayerDetails";
import List from "../components/List";
import corak from "../public/corak.png";

export default function Home() {
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
              <PlayerDetails />
            </div>
            <div className="col-12 col-lg-4">
              <p className="fw-bold f_22">More Videos</p>
              <List />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
