import React from 'react'
import MainVisual from './MainVisual';
import MainList from './MainList';
import MainSlideList from './MainSlideList';


const Main = ({ gugun, travelData }) => {
    return (
        <main>
            <MainVisual travelData={travelData} />
            <MainList travelData={travelData} />
            <MainSlideList travelData={travelData} />
        </main>
    )
}

export default Main;