import React from 'react'
import Header from './pages/Header';
import ToTop from './pages/ToTop';
import { Outlet } from 'react-router-dom';

const Layout = ({ gugun, travelData }) => {
    return (
        <div className="Wrap">
            <>1111</>
            <Header gugun={gugun} travelData={travelData} />
            <Outlet />
            <ToTop />
        </div>
    )
}

export default Layout;