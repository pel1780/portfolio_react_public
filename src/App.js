import { useEffect, useState } from "react";
import ToTop from "./pages/ToTop";
import Header from "./pages/Header";
import "./style/travel.scss";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import SearchResult from "./travel/SearchResult";
import Main from "./pages/Main";
import GugunList from "./pages/GugunList";
import Itm from "./travel/Itm";

const App = () => {
  const [travelData, setTravelData] = useState([]);
  const [gugun, setGugun] = useState([]);
  const key = `5VJMYuvSkHiKvEY%2FJ15gNqS38A098VZAkvRWZ9zGn7jSoExXmbtxM6zZe9QIKZWRxO0a%2FxjsRgBYJUQxjHNrmw%3D%3D`;

  const getTravelData = async () => {
    const result = await axios.get(
      `https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${key}&pageNo=1&numOfRows=123&resultType=json`
    );
    const detail = await result.data.getAttractionKr.item;
    setTravelData(detail);

    const getGugun = detail.map((it) => it.GUGUN_NM);
    const gugunList = [...new Set(getGugun)];
    setGugun(gugunList);
  };
  useEffect(() => {
    getTravelData();
  }, []);

  console.log(travelData);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout gugun={gugun} travelData={travelData} />}
      >
        <Route
          path="/"
          element={<Main gugun={gugun} travelData={travelData} />}
        ></Route>
        <Route
          path="search"
          element={<SearchResult travelData={travelData} />}
        />
        <Route
          path=":gu_name"
          element={<GugunList gugun={gugun} travelData={travelData} />}
        />
        <Route path="detail/:itm" element={<Itm travelData={travelData} />} />
      </Route>
    </Routes>
  );
};

export default App;
