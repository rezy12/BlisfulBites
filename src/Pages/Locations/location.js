import React from 'react'
import "../Locations/location.css";
import LocationBanner from "../../../public/Images/location cover.png";
import NavBar from "../../components/NavBar/navbar.js";
import Footer from "../../components/Footer/footer.js";

const location = () => {
    return (

        <>
        <NavBar />
        
        <div className="location-container">
            <div className="fade-in">
                <img src={LocationBanner} alt="Banner" className="banner-image" />
            </div>

            <div className="location-boxes">
                <div className="location-box">
                    <h4>Texas Dallas Hours:</h4>
                    <h4>Address: 123 Main St, Dallas, TX 75201</h4>
                    <h4>Phone: (555) 123-4567</h4>
                    <p>Hours:</p>
                    <p class="open_hrs">Mondays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Tuesdays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Wednesdays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Thursdays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Fridays: CLOSED<br /></p>
                    <p class="open_hrs">Saturdays: 9:00 AM - 7:00 PM<br /></p>
                    <p class="open_hrs">Sundays: 9:00 AM - 7:00 PM<br /></p>
                </div>

                <div className="location-box">
                    <h4>Tennessee Nashville</h4>
                    <h4>Address: 456 Elm St, Nashville, TN 37201</h4>
                    <h4>Phone: (555) 987-6543</h4>
                    <p>Hours:</p>
                    <p class="open_hrs">Mondays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Tuesdays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Wednesdays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Thursdays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Fridays: CLOSED<br /></p>
                    <p class="open_hrs">Saturdays: 9:00 AM - 7:00 PM<br /></p>
                    <p class="open_hrs">Sundays: 9:00 AM - 7:00 PM<br /></p>
                </div>

                <div className="location-box">
                    <h4>Boston, Massachusetts</h4>
                    <h4>Address: 789 Oak St, Boston, MA 02108</h4>
                    <h4>Phone: (555) 555-5555</h4>
                    <p>Hours:</p>
                    <p class="open_hrs">Mondays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Tuesdays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Wednesdays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Thursdays: 7:00 AM - 6:00 PM<br /></p>
                    <p class="open_hrs">Fridays: CLOSED<br /></p>
                    <p class="open_hrs">Saturdays: 9:00 AM - 7:00 PM<br /></p>
                    <p class="open_hrs">Sundays: 9:00 AM - 7:00 PM<br /></p>
                </div>
            </div>
        </div>
        
        <Footer />
        </>
    );
};




export default location