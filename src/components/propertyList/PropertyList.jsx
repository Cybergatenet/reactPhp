import "./propertyList.css"
import img4 from '../../asserts/imgs/cover4.jpg'



const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src={img4} alt="" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Inpirational</h1>
                    <h2>5,000+ Books</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={img4} alt="" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Devotional</h1>
                    <h2>1,000+ Books</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={img4} alt="" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Academics</h1>
                    <h2>7,000+ Books</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={img4} alt="" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Journals</h1>
                    <h2>15,000+ Books</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList