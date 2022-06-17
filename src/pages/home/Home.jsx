import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedBooks from "../../components/featuredBooks/FeaturedBooks"
import MailList from "../../components/mailLIst/MailList."
import Footer from "../../components/footer/Footer"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse Your Favourite Books</h1>
                <PropertyList />
                <h1 className="homeTitle">Get the most out of our Store</h1>
                <FeaturedBooks />
            </div>
            <MailList />
            <Footer />            
        </div>
    )
}

export default Home