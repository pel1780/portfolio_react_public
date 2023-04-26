import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef } from "react";
import { Link } from "react-router-dom";
const MainSlideList = ({ travelData }) => {
  const slide = useRef(null);

  const museumList = travelData.filter((it) => it.PLACE.includes("박물관"));
  const slideOption = {
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    centerPadding: "0",
    variableWidth: true,
  };
  return (
    <section className="MainSlideList">
      <h2>부산 박물관</h2>
      <div className="inner">
        <div className="slide_case">
          <Slide {...slideOption} ref={slide}>
            {
            museumList.map((it) => {
              return (
                <div className="itm" key={it.UC_SEQ}>
                  <Link to={`/detail/${it.UC_SEQ}`}>
                  <figure className="img_case">
                    <img src={it.MAIN_IMG_THUMB} alt="" />
                  </figure>
                  <div className="desc_case">
                    <strong>{it.TITLE}</strong>
                    <p>{it.USAGE_DAY_WEEK_AND_TIME.slice(0, 100)}</p>
                  </div>
                  </Link>
                </div>
              );
            })
            }
          </Slide>
          <div className="controller">
            <button className="prev" onClick={() => slide.current.slickPrev()}>
              <BsChevronLeft />
            </button>
            <button className="next" onClick={() => slide.current.slickNext()}>
              <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSlideList;
