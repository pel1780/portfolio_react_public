import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Map = ({ gugun, travelData, guList }) => {
    const { kakao } = window;

    const KakaoMapScript = () => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
            mapOption = {
                center: new kakao.maps.LatLng(guList ? guList[0].LAT : travelData[4].LAT, guList ? guList[0].LNG : travelData[4].LNG), // 지도의 중심좌표
                level: guList ? 8 : 9 // 지도의 확대 레벨
                // level: 9 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커가 표시될 위치입니다 
        const markerPosition = new kakao.maps.LatLng(guList ? guList[0].LAT : travelData[0]?.LAT, guList ? guList[0].LNG : travelData[0]?.LNG);

        var positions = guList ? guList.map(it => {
            return { title: it.MAIN_TITLE, latlng: new kakao.maps.LatLng(it.LAT, it.LNG) }
        })
            : travelData.map(it => {
                return { title: it.TITLE, latlng: new kakao.maps.LatLng(it.LAT, it.LNG) }
            });
        // console.log(positions2)

        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < positions.length; i++) {

            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다    
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage // 마커 이미지 
            });
        }
    }

    useEffect(() => {
        travelData?.length > 0 && KakaoMapScript() || guList?.length > 0 && KakaoMapScript()
    }, [travelData, guList])


    return (
        <div className='map_case'>
            <div id="map" style={{ height: "650px" }}></div>
        </div>
    )
}

export default Map;