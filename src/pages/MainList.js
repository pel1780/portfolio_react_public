import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from "react-icons/bs";

const MainList = ({ travelData }) => {
    const bestList = travelData.filter(it => it.MAIN_TITLE.includes('부산'))

    return (
        <section className='MainBest'>
            <div className="inner">
                <h2>부산 인기 여행지</h2>
                <ul>
                    {
                        bestList.slice(17, 25).map(it => {
                            return (
                                <li key={it.UC_SEQ} >
                                    <Link to={`/detail/${it.UC_SEQ}`}>
                                        <figure className='img_case'>
                                            <img src={it.MAIN_IMG_THUMB} alt="" />
                                        </figure>
                                    </Link>
                                    <span>{it.TITLE}</span>
                                    <strong>{it.PLACE}</strong>
                                    <p>{it.SUBTITLE}</p>
                                    <button><Link to={`/detail/${it.UC_SEQ}`}> 자세히보기<BsArrowRightShort /></Link></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default MainList;