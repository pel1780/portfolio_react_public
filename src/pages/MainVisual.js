import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";

import {
  BsArrowRightShort,
  BsChevronLeft,
  BsPause,
  BsPlay,
  BsChevronRight,
} from "react-icons/bs";
import Search from "./Search";

const MainVisual = ({ gugun, travelData }) => {
  const [slideIdx, setSlideIdx] = useState(1);

  const slide = useRef(null);
  const [on, setOn] = useState(false);

  const onChange = () => {
    setOn(!on);
  };

  const slideOption = {
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,
    afterChange: (idx) => {
      setSlideIdx(idx);
    },
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="MainVisual">
      <div className="inner">
        <h2>BUSAN</h2>
        <div className="slide_case">
          <div className="left_tab">
            {travelData.slice(6, 11).map((it, idx) => {
              return (
                <div
                  className={`tit_case ${slideIdx === idx ? "on" : ""}`}
                  key={it.UC_SEQ}
                >
                  <strong>{it.MAIN_TITLE}</strong>
                  <p>
                    {idx === 4
                      ? "부산원도심 이바구길 시작점에 서 있는 붉은 벽돌색 건물 하나. 부산최초의 근대식 종합병원"
                      : it.SUBTITLE}
                  </p>
                  <Link to={`/detail/${it.UC_SEQ}`}>
                    more
                    <span>
                      <BsArrowRightShort />
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="right_slide">
            <Slide {...slideOption} ref={slide}>
              {travelData.slice(6, 11).map((it) => {
                return (
                  <div className="img_case" key={it.UC_SEQ}>
                    <Link to={`/detail/${it.UC_SEQ}`}>
                      <img src={it.MAIN_IMG_THUMB} alt="" />
                    </Link>
                  </div>
                );
              })}
            </Slide>
          </div>
          <div className="controller">
            <button className="prev" onClick={() => slide.current.slickPrev()}>
              <BsChevronLeft />
            </button>
            <button className="pause" onClick={onChange}>
              <BsPause
                className={`${on ? "on" : ""}`}
                onClick={() => slide.current.slickPause()}
              />
              <BsPlay
                className={`${!on ? "on" : ""}`}
                onClick={() => slide.current.slickPlay()}
              />
            </button>
            <button className="next" onClick={() => slide.current.slickNext()}>
              <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="search">
        <Search travelData={travelData} />
      </div>
    </section>
  );
};

export default MainVisual;
