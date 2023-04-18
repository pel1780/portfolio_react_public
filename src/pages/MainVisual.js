import React from 'react'
import Map from '../travel/Map';

const MainVisual = ({ gugun, travelData }) => {
    return (
        <div className='MainVisual'>
            <div className="inner">
                <Map gugun={gugun} travelData={travelData} />
            </div>
        </div>
    )
}

export default MainVisual;