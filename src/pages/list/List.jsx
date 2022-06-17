import { useState } from 'react'
import "./list.css"
import { useLocation } from "react-router-dom"
import { format } from 'date-fns'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {
    const location = useLocation()

    // console.log(location)
    const [query, setQuery] = useState(location.state.query)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Place Order</h1>
                        <div className="listItem">
                            <label htmlFor="">Book Name</label>
                            <input type="text" placeholder={query} />
                        </div>
                        <div className="listItem">
                            <label htmlFor="">Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange onChange={item=>setDate([item.selection])} minDate={new Date()} ranges={date} />
                            )}
                        </div>
                        <div className="listItem">
                            <label>Budget Options</label>
                            <div className="listOptions">
                                <div className="listOptionItem">
                                    <span className="listOptionText">
                                        Min Price <small>Per Book</small>
                                    </span>
                                    <input type="number" className="listOptionInput" />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">
                                        Max Price <small>Per Book</small>
                                    </span>
                                    <input type="number" className="listOptionInput" />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">
                                        Motivational
                                    </span>
                                    <input type="number" min={1} className="listOptionInput" placeholder={options.motivational} />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">
                                        Spiritual
                                    </span>
                                    <input type="number" min={1} className="listOptionInput" placeholder={options.spiritual}  />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">
                                        Educational
                                    </span>
                                    <input type="number" min={1} className="listOptionInput" placeholder={options.educational}  />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        {/* Each is going to be a Component */}
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List