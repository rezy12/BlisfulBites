import React from 'react';
import "../HomePage/homepage.css";
import NavBar from "../NavBar/navbar.js"
import Footer from "../Footer/footer.js";




const homepage = () => {
    return (
        <>
            <div>
                <NavBar/>

                <section class="ice-cream-section">

                    <section class="hello-world-section">
                        <div class="boxTitle">
                            <h1>Blissful Bites</h1>
                            <h1>Ice Cream Parlor</h1>
                            <h1>Where every scoop tells a story</h1>
                        </div>
                    </section>

                </section>


            </div>


            <Footer />

        </>
    )
}

export default homepage