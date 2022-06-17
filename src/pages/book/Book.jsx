import { useState } from 'react'
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
// import MailList from "../../components/mailLIst/MailList"
import Footer from "../../components/footer/Footer"
import "./book.css"
import img1 from '../../asserts/imgs/cover1.png'
import img3 from '../../asserts/imgs/cover3.jpg'
import img4 from '../../asserts/imgs/cover4.jpg'


const Book = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const [open, setOpen] = useState(false)
    const photos = [
        {
            src: img1
        },
        {
            src: img4
        },
        {
            src: img3
        },
        {
            src: img4
        },
        {
            src: img3
        },
        {
            src: img4
        }
    ];

    const handleOpen = (i) => {
        setSliderIndex(i)
        setOpen(true)
    }

    const handleSlide = (direction) => {
        // let d = direction ? "l" : "r"
        // if(d > 5){
        //     d--
        // }else if(d < 0){
        //     d === 0
        // }else{
        //     d++
        // }
        let newSlideNumber;
        if(direction === "l"){
            newSlideNumber = sliderIndex === 0 ? 5 : sliderIndex - 1;
        }else{
            newSlideNumber = sliderIndex === 5 ? 0 : sliderIndex + 1;
        }

        setSliderIndex(newSlideNumber)
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="bookContainer">
                {open && <div className="slider">
                    <i className="fa fa-close close" onClick={()=>setOpen(false)}></i>
                    <i className="fa fa-arrow-left arrow" onClick={() => handleSlide("l")}></i>
                    <div className="sliderWrapper">
                        <img src={photos[sliderIndex].src} alt="" className="sliderImg" />
                    </div>
                    <i className="fa fa-arrow-right arrow" onClick={() => handleSlide("r")}></i>
                </div>}
                <div className="bookWrapper">
                    <button className="bookNow">Buy Now!</button>
                    <h1 className="bookTitle">Hybrid Mind</h1>
                    <div className="bookAuthor">
                        <i className="fa fa-user"></i>
                        <span>Charlses Timothy</span>
                    </div>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque laboriosam facere quos accusantium quas minima, fugit quo harum explicabo vitae dolor fugiat porro delectus!</span>
                    <span className="bookDescription">47pages : 35mins:23secs</span>
                    <span className="bookPriceHighlight">
                        Order for your Audio Copy for $123 and Get one copy FREE
                    </span>
                    <div className="bookImages">
                        {photos.map((photo,i) => (
                                <div className="bookImgWrapper">
                                    <img onClick={() => handleOpen(i)} src={photo.src} className="bookImg" alt="" />
                                </div>
                            ))}
                    </div>
                    <div className="bookDetails">
                        <div className="bookDetailText">
                            <div className="bookTitle">THE HYBRID MIND</div>
                            <p className="bookAbout">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, adipisci asperiores voluptates molestias debitis voluptatem quasi sequi natus corporis obcaecati consequuntur suscipit excepturi voluptatibus ipsam odit? Odit omnis alias natus perspiciatis harum quaerat, exercitationem voluptas! speriores voluptates molestias debitis voluptatem quasi sequi natus corporis obcaecati consequuntur suscipit excepturi voluptatibus ipsam odit? Odit omnis alias natus per</p>
                        </div>
                        <div className="bookDetailPrice">
                            <h1>Update Your Mind in 90minutes</h1>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident omnis quaerat repudiandae?</span>
                            <h2>
                                <b>$246</b> (90 minutes)
                            </h2>
                            <button>Buy & Download Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <MailList /> */}
            <Footer />
        </div>
    )
}

export default Book