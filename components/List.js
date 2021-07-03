import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import moment from "moment";
import { useBrowserResize } from "../hooks/use-browser-resize";

const convertDuration = (duration) => {
  return Math.floor(duration / 60) + ":" + (duration % 60);
};

const List = ({
  list,
  setOnSelectedList,
  setSelectionDescription,
  firstID,
}) => {
  const [is_maxList, setMaxList] = useState(200);
  const [is_disableLoadMoreBtn, setDisableLoadMoreBtn] = useState();
  const [is_active, setActive] = useState();
  const mobile = useBrowserResize();

  useEffect(() => {
    setActive(firstID);
  }, [firstID]);

  const getPlayerDetails = (items) => {
    setOnSelectedList(items);
    setSelectionDescription(items.data.description);
    setActive(items.id);

    if (typeof window !== "undefined")
      if (mobile) {
        window.scrollTo(0, 400);
      } else {
        window.scrollTo(0, 2000);
      }
  };

  const setMaxLimit = () => {
    if (is_maxList <= list.length) {
      setMaxList(is_maxList + 5);
    } else {
      setDisableLoadMoreBtn(true);
    }
  };
  return (
    <>
      <Scrollbars autoHeight autoHeightMax={780} universal={true} autoHide>
        <div className="w-100">
          <div className="container-fluid px-0">
            {list.map((item, index) => {
              return (
                <>
                  {index < is_maxList && (
                    <div
                      className={
                        "row g-0 mb-3 list-bg " +
                        (item.id === is_active && "isActive")
                      }
                      key={index}
                      onClick={() => {
                        getPlayerDetails(item);
                      }}
                    >
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
                      pe-2
                    "
                        >
                          <p className="w-100 mb-2 mb-sm-0 list-main-details f_12">
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
      </Scrollbars>
      {/* <div className="w-100 text-center my-4 my-lg-3">
        <button
          className="load-more f_12"
          onClick={setMaxLimit}
          disabled={is_disableLoadMoreBtn ? true : ""}
        >
          Load More Videos
        </button>
      </div> */}
    </>
  );
};

export default List;
