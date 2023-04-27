import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import { BsArrowRightShort } from "react-icons/bs";
import Search from "./../pages/Search";

const SearchResult = ({ travelData }) => {
  const [search, setSearch] = useSearchParams();
  const r = search.get("q") || "";
  const searchResult = travelData.filter(
    (it) => it.ADDR1.includes(r) || it.MAIN_TITLE.includes(r)
  );

  console.log(searchResult);

  return (
    <div className="SearchResult">
      <div className="inner">
        <div className="search">
          <Search />
        </div>
        <ul className="list">
          {searchResult.map((it) => {
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

export default SearchResult;
