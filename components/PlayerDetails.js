import moment from "moment";

const PlayerDetails = ({ details }) => {
  return (
    <>
      <div className="w-100 my-2">
        <p className="main-title f_20 mb-0">{details.title}</p>
      </div>
      <div
        className="
                  w-100
                  d-flex
                  justify-content-start
                  py-3
                  mb-3
                  align-items-center
                  border-bottom
                "
      >
        <span className="f_14 date-time-and-share me-4">
          {moment(details.dateCreated).format("D MMM YYYY")}
        </span>
        <span className="f_14 date-time-and-share">Share</span>
      </div>

      <div className="w-100 mb-4">
        <p className="main-desc f_14 mb-4">{details.description}</p>
      </div>
    </>
  );
};

export default PlayerDetails;
