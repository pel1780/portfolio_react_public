import React from "react";
import { Link, useParams } from "react-router-dom";
import Map from "../travel/Map";

import { BsArrowRightShort } from "react-icons/bs";

const GugunList = ({ gugun, travelData }) => {
  const { gu_name } = useParams();

  const guList = travelData.filter((it) => it.GUGUN_NM === gu_name);
  console.log(guList);
  return (
    <div className=" GugunList">
      <div className="inner">
        <Map guList={guList} />
        <ul>
          {guList.map((it) => {
            return (
              <li>
                <Link to={`/detail/${it.UC_SEQ}`}>
                  <figure className="img_case">
                    <img src={it.MAIN_IMG_THUMB} alt="" />
                  </figure>
                </Link>
                <span>{it.TITLE}</span>
                <strong>{it.PLACE}</strong>
                <p>{it.SUBTITLE}</p>
                <button>
                  <Link to={`/detail/${it.UC_SEQ}`}>
                    {" "}
                    자세히보기
                    <BsArrowRightShort />
                  </Link>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GugunList;
