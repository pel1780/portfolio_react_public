
import { Link } from "react-router-dom";
import Search from "./Search";
import { BsSuitHeart } from "react-icons/bs";


const Header = ({ gugun, travelData }) => {
    return (
        <header className='Header'>
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