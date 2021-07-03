import Player from "./Player";

const LiveSection = ({ liveplayerId }) => {
  return (
    <section className="w-100 live-section-bg">
      <div className="container-fluid">
        <div className="row g-0 d-flex justify-content-center align-items-center live-section-padding">
          <div className="col-12">
            <h2 className="live-section-title pb-2">Live Streaming</h2>
          </div>
          <div className="col-12 col-lg-10 col-xl-8">
            <Player id={liveplayerId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;
