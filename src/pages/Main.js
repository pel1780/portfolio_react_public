import React from 'react'
import MainVisual from './MainVisual';
import MainList from './MainList';
import MainSlideList from './MainSlideList';
import MainMap from './MainMap';


const Main = ({ gugun, travelData }) => {
    return (
        <main>
            <MainVisual travelData={travelData} />
            <MainList travelData={travelData} />
            <MainSlideList travelData={travelData} />
            <MainMap travelData={travelData}/>
        </main>
    )
}

export default Main;