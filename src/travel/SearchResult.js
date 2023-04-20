import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';

const SearchResult = ({ travelData }) => {
    const [search, setSearch] = useSearchParams();
    const r = search.get('q') || '';
    const searchResult = travelData.filter(it => it.ADDR1.includes(r) || it.MAIN_TITLE.includes(r))

    console.log(searchResult);

    return (
        <ul className='list'>
            {
                searchResult.map((it, idx) => {
                    return (
                        <li key={it.id} className="itm">
                            <Link to={`/detail/${it.UC_SEQ}`}>
                                <figure className="imgCase">
                                    <img src={it.MAIN_IMG_THUMB} alt="" />
                                </figure>
                                <strong>{it.MAIN_TITLE}</strong>
                                <span> : {it.SUBTITLE}</span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SearchResult;