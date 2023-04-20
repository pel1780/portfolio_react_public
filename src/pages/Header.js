
import { Link } from "react-router-dom";
import Search from "./Search";
import { BsSuitHeart } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";


const Header = ({ gugun, travelData }) => {

    const [sY, setSY] = useState(0);
    const scrollHandler = () => {
        setSY(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])


    return (
        <header className={`Header ${sY > 100 ? 'on' : ''}`}>
            <h1><Link to={`/`}>HOME</Link></h1>
            <nav className='gnb'>
                <ul>
                    {gugun.map((it, idx) => {
                        return (<li key={idx}><Link to={`/${it}`}>{it}</Link></li>)
                    })}
                </ul>
            </nav>
            <div className="service">
                <Search travelData={travelData} />
                <button><Link to={`/`}><BsSuitHeart /></Link></button>
            </div>
        </header>
    )
}

export default Header;