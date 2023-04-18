import Slide from 'react-slick';
import "slick-carousel/slick/slick.css";

const MainSlideList = ({ travelData }) => {
    return (
        <div className='MainSlideList'>
            <h2>부산 인기 명소 List</h2>
            <div className="inner">
                <div className="desc_case">
                    <Slide>
                        {
                            travelData.map(it => {
                                return (
                                    <div className="desc">
                                        <strong>{it.MAIN_TITLE}</strong>
                                        <p>{it.SUBTITLE}</p>
                                        <span>{it.ADDR1}</span>
                                    </div>
                                )
                            }).slice(0, 9)
                        }
                    </Slide>
                </div>
                <div className="img_case">
                    <Slide>
                        {
                            travelData.map(it => {
                                return (
                                    <div className="img">
                                        <img src={it.MAIN_IMG_THUMB} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Slide>
                </div>
            </div>
        </div>
    )
}

export default MainSlideList;