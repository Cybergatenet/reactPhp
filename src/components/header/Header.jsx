// From https://npmjs.com/package/react-date-range
import { useEffect, useState } from 'react'
import { DateRange } from 'react-date-range'
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom';
import './header.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import TyperWriter from '../effects/TypeWriter'


const Header = ({type}) => {
    
    const [query, setQuery] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        motivational: 1,
        spiritual: 1,
        educational: 1
    })

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions(prev => {return {
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    }

    const handleSearch = () => {
        navigate("/books", {state: { query, date, options }})
        // console.log('workimg on cybergate')
    }
    
    // useEffect(() => {
    //     let typeWriter = document.querySelector('.typeWriter')
    //     let d = new TyperWriter(typeWriter, "Cybergate is getting into these...")
    //     console.log(d)
    //     Type()
    // })
   
    return (
        <div className="header">
           <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                    <div className="headerListItems active">
                        <i className="fa fa-home"></i>
                        <span>Home</span>
                    </div>
                    <div className="headerListItems">
                        <i className="fa fa-about"></i>
                        <span>About</span>
                    </div>
                    <div className="headerListItems">
                        <i className="fas fa-layer-group"></i>
                        <span>Categories</span>
                    </div>
                    <div className="headerListItems">
                        <i className="fa fa-save"></i>
                        <span>Download</span>
                    </div>
                    <div className="headerListItems">
                        <i className="fa fa-services"></i>
                        <span>Documentation</span>
                    </div>
                </div>
                { type !== "list" &&
                <>
                <h1 className="headerTitle typeWriter" data-wait="2000" data-words='["Want to listen to your Favourite Authors?...", "Want to listen to your Favourite Authors?", "Want to listen to your Favourite Authors?"]'></h1>

                <p className="headerDesc">Now you can listen to any Book of your choice while you travel, or on vacation or from the comfort of your home or office</p>
                <button className="headerBtn">Sign In | Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        {/* <FontAwesomeIcon icon={faBook} className="headerIcon" /> */}
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="Search Books" className="headerSearchInput" onChange={e => setQuery(e.target.value)} />
                    </div>
                    <div className="headerSearchItem">
                        {/* <FontAwesomeIcon icon={faBook} className="headerIcon" /> */}
                        <i className="fa fa-calender"></i>
                        {/* <span className="headerSearchText">date to date</span> */}
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                         />} 
                    </div>
                    <div className="headerSearchItem">
                        {/* <FontAwesomeIcon icon={faBook} className="headerIcon" /> */}
                        <i className="fa fa-search"></i>
                        <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.motivational} Motivational . ${options.spiritual} Spiritual . ${options.educational} Educational`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Motivational</span>
                                <div className="optionCounter">
                                    <button className="optionCounterBtn" onClick={() => handleOption("motivational", "d")} disabled={options.motivational === 0}>-</button>
                                    <span className="optionCounterNumber">{`${options.motivational}`}</span>
                                    <button className="optionCounterBtn" onClick={() => handleOption("motivational", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Spiritual</span>
                                <div className="optionCounter">
                                    <button className="optionCounterBtn" onClick={() => handleOption("spiritual", "d")} disabled={options.spiritual === 0}>-</button>
                                    <span className="optionCounterNumber">{`${options.spiritual}`}</span>
                                    <button className="optionCounterBtn" onClick={() => handleOption("spiritual", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Educational</span>
                                <div className="optionCounter">
                                    <button className="optionCounterBtn" onClick={() => handleOption("educational", "d")} disabled={options.educational === 0}>-</button>
                                    <span className="optionCounterNumber">{`${options.educational}`}</span>
                                    <button className="optionCounterBtn" onClick={() => handleOption("educational", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </>}
           </div>
        </div>
    )
}


export default Header