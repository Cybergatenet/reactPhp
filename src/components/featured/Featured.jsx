import "./featured.css"
import img4 from '../../asserts/imgs/cover4.jpg'
import img1 from '../../asserts/imgs/cover1.png'
import img2 from '../../asserts/imgs/cover2.png'
import img3 from '../../asserts/imgs/cover3.jpg'

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src={img1} alt="imageNOTshowing" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Motivational</h1>
                    <h2>3,213 Audio Books</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={img3} alt="imageNOTshowing" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Educational</h1>
                    <h2>3,978 Audio Books</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={img2} alt="imageNOTshowing" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Spiritual</h1>
                    <h2>5,000+ Audio Books</h2>
                </div>
            </div>
        </div>
    )
}


export default Featured