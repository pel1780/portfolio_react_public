
import { Link } from "react-router-dom";
import Search from "./Search";


const Header = ({ gugun, travelData }) => {
    return (
        <header className='Header'>
            <h1><Link to={`/`}>부산, 어디 갈래?</Link></h1>
            <nav className='gnb'>
                <ul>
                    {gugun.map((it, idx) => {
                        return (<li key={idx}><Link>{it}</Link></li>)
                    })}
                </ul>
            </nav>
            <Search travelData={travelData} />
        </header>
    )
}

export default Header;