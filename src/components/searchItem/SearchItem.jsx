import './searchItem.css'
import img from '../../asserts/imgs/cover3.jpg'

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src={img} alt="image" className='siImg' />
            <div className="searchItemDescription">
                <h1 className="siTitle">Hybrid Mind</h1>
                <span className="siType">True Life Story</span>
                <span className="siAuthor">Charles Timothy</span>
                <span className="siDuration">47pages : 35mins:23secs</span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siAbout">Te book Hybrid mind is a continuation of the Flipped Mind...<a href="#">Read More</a></span>
            </div>
            <div className="searchItemDetails">
                <div className="siRating">
                    <span>Excellect</span>
                    <button>4.7</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and Fees</span>
                    <button className="siCheckButton">See Availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem