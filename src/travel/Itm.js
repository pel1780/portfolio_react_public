import React from "react";
import { useParams } from "react-router-dom";
import Map from "./Map";

const Itm = ({ travelData }) => {
  const { itm } = useParams();
  const detailItm = travelData?.find((it) => String(it.UC_SEQ) === itm);

  return (
    <div className="detailItm">
      <div className="inner">
        <div className="img_case">
          <img src={detailItm.MAIN_IMG_NORMAL} alt="" />
        </div>
        <div className="txt_case">
          <div className="tit">
            <span>{detailItm.SUBTITLE}</span>
            <strong>{detailItm.PLACE}</strong>
          </div>
          <div className="desc">
            <p>{detailItm.ITEMCNTNTS}</p>
          </div>
        </div>
        <dl className="info">
          <dt>주소</dt>
          <dd>{detailItm.ADDR1}</dd>
          <dt>오시는길</dt>
          <dd>{detailItm.TRFC_INFO}</dd>
          <dt>편의시설</dt>
          <dd>{detailItm.MIDDLE_SIZE_RM1}</dd>
          <dt>전화번호</dt>
          <dd>{detailItm.CNTCT_TEL}</dd>
        </dl>
      </div>
    </div>
  );
};

export default Itm;
