import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Map = ({ gugun, travelData, guList }) => {
  const { kakao } = window;
  const navigate = useNavigate();

  const KakaoMapScript = () => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(
          guList ? guList[0].LAT : travelData[4].LAT,
          guList ? guList[0].LNG : travelData[4].LNG
        ), // 지도의 중심좌표
        level: guList ? 8 : 9, // 지도의 확대 레벨
        // level: 9 // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다
    var positions = guList
      ? guList.map((it) => {
          return {
            title: it.PLACE,
            latlng: new kakao.maps.LatLng(it.LAT, it.LNG),
            ucseq: it.UC_SEQ,
          };
        })
      : travelData.map((it) => {
          return {
            title: it.PLACE,
            latlng: new kakao.maps.LatLng(it.LAT, it.LNG),
            ucseq: it.UC_SEQ,
          };
        });

    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    var imageSize = new kakao.maps.Size(24, 35);

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        id: positions[i].ucseq,
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
        clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
      });

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: `<div 
        style=" padding: 5px 0; text-align: center; width:145px;
        ">${positions[i].title}</div>`,
        position: positions[i].latlng,
      });
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );

      kakao.maps.event.addListener(marker, "click", linkListener(marker));
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
    function linkListener(marker) {
      return function () {
        const link = positions.find((it) => it.title === marker.Gb);
        navigate(`/detail/${link.ucseq}`);
      };
    }
  };

  useEffect(() => {
    (travelData?.length > 0 && KakaoMapScript()) ||
      (guList?.length > 0 && KakaoMapScript());
  }, [travelData, guList]);

  return (
    <div className="map_case">
      <div id="map" style={{ height: "650px" }}></div>
    </div>
  );
};

export default Map;
