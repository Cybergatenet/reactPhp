import "./featuredBooks.css"
import img4 from '../../asserts/imgs/cover4.jpg'

const PropertyBooks = () => {
    return (
        <div className="fB">
            <div className="fbItem" style={border}>
                <img src={img4} alt="not showing" className="fbImg" />
                <span className="fbName">Good Morngin Holy Ghost</span>
                <span className="fbDescription">A Devotional Book By Kenneth Hagin</span>
                <span className="fbPrice">Starting from $100</span>
                <div className="fbRating">
                    <button>4.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fbItem" style={border}>
                <img src={img4} alt="not showing" className="fbImg" />
                <span className="fbName">In His Presence</span>
                <span className="fbDescription">A Spiritual Book By Mountain Trust</span>
                <span className="fbPrice">Starting from $92.99</span>
                <div className="fbRating">
                    <button>4.2</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fbItem" style={border}>
                <img src={img4} alt="not showing" className="fbImg" />
                <span className="fbName">Open Heaven</span>
                <span className="fbDescription">A Spiritual Book By George Luck</span>
                <span className="fbPrice">Starting from $120</span>
                <div className="fbRating">
                    <button>4.7</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

const border = {
    border: "1px solid rgba(0,0,0,0.5)",
    padding: "20px 10px",
    boxShadow: "0px 4px 5px rgba(0,0,0,0.7)"
}

export default PropertyBooks