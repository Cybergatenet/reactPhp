import "./mailList.css"
import img4 from '../../asserts/imgs/cover4.jpg'



const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save Time, Learn More</h1>
            <span className="mailDesc">Sign up to get the best of our books</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Enter Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList