import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const convertDuration = (duration) => {
  return Math.floor(duration / 60) + ":" + (duration % 60);
};

const List = ({ setMainDetails }) => {
  const [is_list, setList] = useState([]);
  const [is_maxList, setMaxList] = useState(5);

  useEffect(() => {
    axios
      .get("https://rtb.glueapi.io/v1/content/650?format=json")
      .then((response) => {
        getEachData(response.data.data.data["program-episode"]);
      });
  }, [is_maxList]);

  const getEachData = (list) => {
    list.forEach((items, index) => {
      axios
        .get("https://rtb.glueapi.io/v1/content/" + items.id)
        .then((response) => {
          setList((prevState) => [...prevState, response.data.data]);

          if (index === 0) {
            const dataFirst = response.data.data[0];
            setMainDetails(dataFirst);
            console.log(JSON.stringify(response.data.data, null, 2));
          }
        });
    });
  };

  return (
    <>
      <div className="w-100">
        <div className="list-height container-fluid px-0">
          {is_list.map((item, index) => {
            return (
              <>
                {index < is_maxList && (
                  <div className="row mb-3 list-bg" key={index}>
                    <div className="col-12 col-sm-5 px-0">
                      <div className="w-100 position-relative">
                        <img
                          src={
                            "https://rtb-images.glueapi.io/500x0/" +
                            item.data.images.thumbnail.path
                          }
                          className="w-100"
                          alt={"images-for-" + index}
                        />
                        <div className="duration-div">
                          <p className="mb-0 duration f_12">
                            {convertDuration(item.data.duration)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-7 px-3">
                      <div
                        className="
                      w-100
                      h-100
                      d-flex
                      align-content-between
                      flex-wrap
                      py-2
                      justify-content-start justify-content-sm-start
                    "
                      >
                        <p className="w-100 pt-2 mb-3 mb-sm-0 list-main-details f_12">
                          {item.data.title}
                        </p>
                        <p className="w-100 mb-0 list-date-time f_12">
                          {moment(item.dateCreated).format("D MMM YYYY")}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="w-100 text-center my-2">
        <button
          className="load-more f_12"
          onClick={() => setMaxList(is_maxList + 5)}
        >
          Load More Videos
        </button>
      </div>
    </>
  );
};

export default List;
