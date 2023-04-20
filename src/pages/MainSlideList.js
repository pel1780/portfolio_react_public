import Slide from 'react-slick';
import "slick-carousel/slick/slick.css";

const MainSlideList = ({ travelData }) => {
    const museumList = travelData.filter(it => it.PLACE.includes('박물관'));
    const slideOption = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        centerMode: true,
        afterChange: idx => {

        }
    }
    return (
        <section className='MainSlideList'>
            <h2>부산 박물관</h2>
            <div className="inner">
                <div className="slide_case">
                    <Slide {...slideOption}>
                        {
                            museumList.map(it => {
                                return (
                                    <div className="itm">
                                        <figure>
                                            <img src={it.MAIN_IMG_THUMB} alt="" />
                                        </figure>
                                        <div className="desc_case">
                                            <strong>{it.TITLE}</strong>
                                            <p>{
                                                it.USAGE_DAY_WEEK_AND_TIME.slice(0, 100)
                                            }</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slide>
                </div>
            </div>
        </section>
    )
}

export default MainSlideList;