import { Link } from "react-router-dom";
import Search from "./Search";
import { BsXLg, BsList } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";

const Header = ({ gugun, travelData }) => {
  const [sY, setSY] = useState(0);
  const [click, setClick] = useState(false);
  const scrollHandler = () => {
    setSY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header className={`Header ${sY > 100 ? "on" : ""}`}>
      <h1>
        <Link to={`/`}>
          <img src={`${process.env.PUBLIC_URL}/image/map_logo.png`} alt="" />
        </Link>
      </h1>
      <nav className="gnb">
        <ul className={click ? "on" : ""}>
          {gugun.map((it, idx) => {
            return (
              <li key={idx} onClick={() => setClick(!click)}>
                <Link to={`/${it}`}>{it}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="service">
        <Search travelData={travelData} />
        <button className="bar" onClick={() => setClick(!click)}>
          {click ? <BsXLg /> : <BsList />}
        </button>
      </div>
    </header>
  );
};

export default Header;
