import React from 'react'
import MainVisual from './MainVisual';
import MainSlideList from './MainSlideList';

const Main = ({ gugun, travelData }) => {
    return (
        <main>
            <MainVisual gugun={gugun} travelData={travelData} />
            <MainSlideList travelData={travelData} />
        </main>
    )
}

export default Main;