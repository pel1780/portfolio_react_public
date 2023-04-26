import React from "react";
import Map from "./../travel/Map";
import Search from "./Search";

const MainMap = ({ travelData }) => {
  return (
    <section className="MainMap">
      <h2>부산의 명소를 지도에서 자세히 확인해보세요.</h2>
      <div className="inner">
        <Map travelData={travelData} />
        <div className="search">
          <Search travelData={travelData} />
        </div>
      </div>
    </section>
  );
};

export default MainMap;
