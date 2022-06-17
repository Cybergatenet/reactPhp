import './footer.css'

 const Footer = () => {
    return (
           <footer className="footerContainer">
                <div className="logo">
                    {/* <img src="./images/logo.svg" alt="" /> */}
                    <i className="fa fa-facebook"></i>
                </div>
                <div className="list">
                    <ol>
                        <li><h6>Features</h6></li>
                        <li>Link Shortening</li>
                        <li>Branded Link</li>
                        <li>Analytics</li>
                    </ol>
                    <ol>
                        <li><h6>Resources</h6></li>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ol>
                    <ol>
                        <li><h6>Company</h6></li>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Career</li>
                        <li>Contact</li>
                    </ol>
                    <div className="logos">
                        {/* <img src="./images/icon-facebook.svg" alt="" /> */}
                        <i className="fa fa-facebook"></i>
                    </div>
                    <div className="logos">
                        {/* <img src="./images/icon-twitter.svg" alt="" /> */}
                        <i className="fa fa-twitter"></i>
                    </div>
                    <div className="logos">
                        {/* <img src="./images/icon-pinterest.svg" alt="" /> */}
                        <i className="fa fa-pinterest"></i>
                    </div>
                    <div className="logos">
                        {/* <img src="./images/icon-instagram.svg" alt="" /> */}
                        <i className="fa fa-instagram"></i>
                    </div>
                </div>
            </footer>  
    )
}

export default Footer