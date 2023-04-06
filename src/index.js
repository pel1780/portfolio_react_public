import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './pages/ScrollTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
      <ScrollTop />
    </BrowserRouter>
  </React.StrictMode>
);



// 검색기능 구현(지역명 || 명소명 입력시)

// 좋아요를 누르면 버킷리스트에 리스트 모이게(카트)

// 구별로 리스트 만들기(nav)

// 지도 넣기..

// 명소 top10해서 main에 list slide

// detailItm에 상세내용/교통정보/편의시설 등등