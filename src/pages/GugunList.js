import React from 'react'
import { useParams } from 'react-router-dom';
import Map from '../travel/Map';

const GugunList = ({ gugun, travelData }) => {
    const { gu_name } = useParams();

    const guList = travelData.filter(it => it.GUGUN_NM === gu_name);
    console.log(guList)
    return (
        <div>
            <Map guList={guList} />
            {
                guList.map(it => <div>{it.MAIN_TITLE}</div>)
            }
        </div>
    )
}

export default GugunList;