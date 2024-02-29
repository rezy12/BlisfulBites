import React from 'react';
import NavBar from "../../components/NavBar/navbar.js";
import "../../Pages/Menu/menu.css";
import Footer from "../../components/Footer/footer.js";
import Sundae1 from "../../Images/sundae1.jpg";
import Sundae2 from "../../Images/sundae2.jpg";
import Sundae3 from "../../Images/sundae3.jpg";
import Sundae4 from "../../Images/sundae4.jpg";
import Sundae5 from "../../Images/sundae5.jpg";
import Sundae6 from "../../Images/sundae6.jpg";
import Chcolate from "../../Images/chocolate-img.jpg";
import Vanilla from "../../Images/vanila-img.jpg";
import Strawberry from "../../Images/strawberry-img.jpg";
import Mango from "../../Images/mango.jpg";
import Caramel from "../../Images/caramel.jpg";
import BlueberryCheesecake from "../../Images/blueberry.jpg";
import Hazelnut from "../../Images/hazelnut.jpg";
import CookiesAndCream from "../../Images/cookiescreme.jpg";
import MangoSorbet from "../../Images/mango-sorbet.jpeg";
import Pistachio from "../../Images/pistachio.jpg";
import CaramelSwirl from "../../Images/caramelswirl.jpg";



const menu = () => {
    return (

        <>

            <NavBar />

            <h2 class="titleHead">Ice Cream</h2>

            <section class="iceCreamList">

                <div class="flavor">
                    <img src={Chcolate} alt="Chocolate Ice Cream" />
                    <h1>Indulge in our rich chocolate ice cream</h1>
                    <p>a velvety delight crafted with the finest cocoa. Each scoop promises a burst of intense flavor, creating a heavenly experience for chocolate lovers.</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>

                </div>
                <div class="flavor">
                    <img src={Vanilla} alt="Vanilla Ice Cream" />
                    <h1>Savor the classic elegance of our vanilla ice cream</h1>
                    <p>a timeless treat made with the purest Madagascar vanilla. Each spoonful is a celebration of simplicity, offering a smooth and creamy texture that captivates your taste buds. Enjoy the timeless delight of vanilla</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>
                </div>
                <div class="flavor">
                    <img src={Strawberry} alt="Strawberry Ice Cream" />
                    <h1>sweetness of our strawberry ice cream</h1>
                    <p>flavor is a delightful symphony of sweetness and freshness in every bite. Treat yourself to the enchanting taste of summer with our strawberry ice cream</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>
                </div>
                <div class="flavor">
                    <img src={Pistachio} alt="Pistachio Ice Cream" />
                    <h1>Experience the allure of Pistachio Bliss</h1>
                    <p>Indulge in the nutty goodness of our pistachio ice cream. Each scoop is a journey into creamy perfection, with crunchy pistachio bits that add a delightful texture to this exquisite treat.</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>
                </div>

                <div class="flavor">
                    <img src={Mango} alt="Mango Ice Cream" />
                    <h1>Delight in Tropical Mango Symphony</h1>
                    <p>Transport your taste buds to the tropics with our mango ice cream. Made from ripe, succulent mangoes, this refreshing flavor offers a burst of sunshine in every spoonful, creating a cool and tropical escape.</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>
                </div>

                <div class="flavor">
                    <img src={Caramel} alt="Caramel Swirl Ice Cream" />
                    <h1>Swirls of Sweet Caramel Elegance</h1>
                    <p>Embark on a journey of sweet indulgence with our caramel swirl ice cream. Rich, velvety caramel dances through each bite, creating a symphony of flavor that satisfies your sweetest cravings.</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>
                </div>
                <div class="flavor">
                    <img src={BlueberryCheesecake} alt="Blueberry Cheesecake Ice Cream" />
                    <h1>Blueberry Cheesecake Extravaganza</h1>
                    <p>Indulge in the richness of blueberry cheesecake ice cream. Velvety cream cheese blends seamlessly with swirls of blueberry compote, creating a dessert that mirrors the elegance of a classic cheesecake.</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>
                </div>

                <div class="flavor">
                    <img src={Hazelnut} alt="Hazelnut Delight Ice Cream" />
                    <h1>Hazelnut Delight Sensation</h1>
                    <p>Satisfy your cravings with our hazelnut delight ice cream. Roasted hazelnuts are lovingly blended into a smooth, creamy base, providing a delightful combination of nutty richness and buttery texture.</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>
                </div>

                <div class="flavor">
                    <img src={CookiesAndCream} alt="Cookies and Cream Dream" />
                    <h1>Cookies and Cream Extravaganza</h1>
                    <p>Experience the magic of crushed cookies in every bite. Our cookies and cream ice cream seamlessly blends crunchy chocolate cookies into a creamy vanilla base, delivering a nostalgic taste of childhood joy.</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>
                </div>
                <div class="flavor">
                    <img src={MangoSorbet} alt="Mango Sorbet" />
                    <h1>Tropical Mango Sorbet Bliss</h1>
                    <p>Escape to a tropical paradise with our mango sorbet. Each spoonful is a burst of sunshine, featuring the vibrant and sweet essence of ripe mangoes. A refreshing, dairy-free delight for those hot summer days.</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>
                </div>

                <div class="flavor">
                    <img src={Pistachio} alt="Pistachio Perfection Ice Cream" />
                    <h1>Pistachio Perfection Symphony</h1>
                    <p>Embark on a journey of flavor with our pistachio perfection ice cream. The subtle, nutty notes of premium pistachios dance harmoniously in a creamy symphony, delivering a sophisticated and indulgent experience for the connoisseur.</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>
                </div>

                <div class="flavor">
                    <img src={CaramelSwirl} alt="Salted Caramel Swirl Ice Cream" />
                    <h1>Salted Caramel Swirl Sensation</h1>
                    <p>Experience the sweet and savory dance of our salted caramel swirl ice cream. Luxurious ribbons of salted caramel elegantly swirl through a velvety base, creating a decadent treat that perfectly balances richness and a touch of saltiness.</p>
                    <div class="priceList">
                        <span>Bowl: $2.99 __ 3 scoops</span>
                        <span>Ice Cream: $1.99 __ 2 scoops</span>
                    </div>
                </div>

            </section>

            <section class="">

            </section>

            <section class="sundaes-section">
                <h2 class="titleHead">Sundaes</h2>

                <section class="sundaes-section">

                    <div class="sundae">
                        <img src={Sundae1} alt="Caramel Sundae" />
                        <div class="sundaeList">
                            <h1>Caramel Sundae</h1>
                            <p>drizzled over a mound of creamy vanilla ice cream. Each spoonful promises a perfect marriage of smooth, buttery caramel and the cool embrace of our signature ice cream.
                                As you delve deeper, discover the delightful crunch of caramelized nuts sprinkled on top, adding a satisfying texture to every bite. The sundae is crowned with swirls of whipped cream, creating a heavenly cloud that enhances the overall indulgence.
                                To complete this divine treat, we adorn the creation with ripe, succulent strawberries, adding a burst of fruity freshness to the rich caramel notes. The marriage of textures and the balance of sweet and savory create a harmonious experience that is both luxurious and comforting.
                                Savor the Caramel Bliss Sundae – a masterpiece that transforms a simple dessert into an extraordinary journey for your senses.</p>
                            <ul class="ingredientsList">
                                <h3>Ingreidents:</h3>
                                <li><strong>Vanilla Ice Cream:</strong> A base of smooth and creamy vanilla ice cream forms the heart of our sundae.</li>
                                <li><strong>Caramel Sauce:</strong> Generous drizzles of velvety caramel sauce, adding a luscious and indulgent sweetness.</li>
                                <li><strong>Crunchy Nuts:</strong> A delightful medley of crunchy nuts, providing a nutty texture and complementing the sweetness of the caramel.</li>
                                <li><strong>Succulent Strawberries:</strong> Ripe strawberries, sliced and scattered, adding a burst of fruity freshness.</li>
                                <li><strong>Ripe Bananas:</strong> Slices of ripe bananas, contributing a timeless allure and a creamy texture to each bite.</li>
                            </ul>

                            <h3>Bowl: $5.99 __ 3 scoops</h3>
                            <h3>Any Toppings: FREE</h3>
                        </div>
                    </div>
                    <div class="sundae">
                        <img src={Sundae2} alt="Fruit Sundae" />
                        <div class="sundaeList">
                            <h1>Fruit Sundae</h1>
                            <p>Picture a crisp bowl filled with cool, creamy delight, generously adorned with drizzles of decadent chocolate and caramel that complement the vibrant sweetness of ripe strawberries. Each spoonful is a journey through layers of flavor, a symphony that transcends the ordinary, creating a sensation of savoring a heavenly slice of bliss. The combination of creamy textures and the burst of fruity freshness makes this sundae a perfect treat for those who appreciate the harmonious marriage of indulgence and the goodness of nature. Enjoy the delightful escape to a world of exquisite taste with every spoonful of our Fruit Sundae</p>
                            <ul class="ingredientsList">
                                <h3>Ingreidents:</h3>
                                <li><strong>Vanilla Ice Cream:</strong> A base of velvety vanilla ice cream, creating a smooth and creamy foundation.</li>
                                <li><strong>Decadent Chocolate Drizzle:</strong> Rich chocolate drizzle, generously layered over the ice cream for a luscious touch.</li>
                                <li><strong>Caramel Drizzle:</strong> Sweet caramel drizzle, adding an extra layer of indulgence to each spoonful.</li>
                                <li><strong>Fresh Strawberries:</strong> Vibrant and juicy strawberries, sliced and served to bring a burst of fruity sweetness.</li>
                            </ul>

                            <h3>Bowl: $5.99 __ 3 scoops</h3>
                            <h3>Any Toppings: FREE</h3>

                        </div>
                    </div>
                    <div class="sundae">
                        <img src={Sundae3} alt="Nuts Sundae" />
                        <div class="sundaeList">
                            <h1>Nuts Sundae</h1>
                            <p> Nutty Bliss Sundae, a delightful creation that takes your taste buds on a journey of irresistible textures and flavors. Our velvety vanilla ice cream forms the perfect canvas for a generous drizzle of decadent chocolate and caramel, creating a luscious base that sets the stage for a symphony of delightful toppings.
                                    Crunchy nuts, carefully caramelized for that perfect crunch, are generously scattered, adding a nutty richness to every spoonful. The sundae is crowned with swirls of whipped cream, creating a heavenly cloud that enhances the overall indulgence.
                                    To complete this exquisite treat, we add the timeless allure of ripe bananas, creating a harmonious blend of sweet and savory. Each bite is a celebration of the perfect balance between creaminess and crunch, sweetness and nuttiness.
                                    Savor the Nutty Bliss Sundae — a masterpiece that transforms a simple dessert into an extraordinary experience for your senses. It's not just a sundae; it's a delightful symphony of flavors that will leave you craving for more.</p>
                            <ul class="ingredientsList">
                                <h3>Ingreidents:</h3>
                                <li><strong>Chocolate Ice Cream:</strong> A rich and indulgent chocolate ice cream forming the base of the sundae.</li>
                                <li><strong>Caramel Drizzle:</strong> Sweet and decadent caramel drizzle, generously poured over the chocolate ice cream.</li>
                                <li><strong>Crunchy Nuts:</strong> A mix of assorted nuts, providing a delightful crunch with each bite.</li>
                                <li><strong>Fresh Strawberries:</strong> Juicy strawberries, sliced and placed atop the sundae for a fruity twist.</li>
                            </ul>


                            <h3>Bowl: $5.99 __ 3 scoops</h3>
                            <h3>Any Toppings: FREE</h3>
                        </div>
                    </div>

                    <div class="sundae">
                        <img src={Sundae4} alt="Mango Tango Sundae" />
                        <div class="sundaeList">
                            <h1>Mango Tango Sundae</h1>
                            <p>Embark on a tropical journey with our Mango Tango Sundae, a vibrant and exotic creation that brings the sunny flavors of mango to your dessert experience. Picture a crisp bowl filled with velvety ice cream, generously adorned with the sweet and tangy allure of ripe mango slices. The sundae is elevated with a drizzle of decadent chocolate and caramel, creating a perfect marriage of rich and fruity indulgence. With each spoonful, you'll be transported to a tropical paradise where the luscious sweetness of mango mingles with the creamy texture of ice cream, creating a dance of flavors known as the Mango Tango. It's a symphony of taste that celebrates the tropical richness of mango in a delightful sundae, promising a refreshing and unforgettable dessert experience. Dive into the Mango Tango Sundae</p>
                            <ul class="ingredientsList">
                                <h3>Ingreidents:</h3>
                                <li><strong>Mango Sorbet:</strong> A refreshing and fruity mango sorbet as the base of the sundae.</li>
                                <li><strong>Tropical Fruit Medley:</strong> An assortment of tropical fruits, adding a burst of flavor and freshness.</li>
                                <li><strong>Coconut Shavings:</strong> Shredded coconut for a delightful tropical twist and added texture.</li>
                                <li><strong>Pineapple Drizzle:</strong> Sweet and tangy pineapple drizzle, enhancing the tropical flavors.</li>
                                <li><strong>Whipped Cream:</strong> Fluffy whipped cream for a light and creamy topping.</li>
                                <li><strong>Cherry on Top:</strong> A maraschino cherry as the finishing touch, adding a pop of color.</li>
                            </ul>


                            <h3>Bowl: $5.99 __ 3 scoops</h3>
                            <h3>Any Toppings: FREE</h3>
                        </div>
                    </div>

                    <div class="sundae">
                        <img src={Sundae5} alt="Cherry Almond Delight" />
                        <div class="sundaeList">
                            <h1>Cherry Almond Delight</h1>
                            <p>Introducing our Cherry Almond Delight Sundae, a delightful creation that combines the sweet essence of cherries with the satisfying crunch of almonds. This sundae is a treat for the senses, featuring velvety ice cream in a crisp bowl, generously drizzled with succulent cherry compote. The experience is elevated with a sprinkling of toasted almond slivers, creating a perfect harmony of textures and flavors.</p>
                            <ul class="ingredientsList">
                                <h3>Ingreidents:</h3>
                                <li><strong>Cherry Vanilla Ice Cream:</strong> A classic combination of cherry and vanilla ice cream as the base.</li>
                                <li><strong>Almond Crunch:</strong> Crunchy almonds for a delightful nutty texture.</li>
                                <li><strong>Cherry Compote:</strong> Sweet cherry compote drizzled over the ice cream for extra flavor.</li>
                                <li><strong>Whipped Cream:</strong> Fluffy whipped cream for a light and creamy topping.</li>
                                <li><strong>Almond Slices:</strong> Sliced almonds for additional almond goodness and crunch.</li>
                                <li><strong>Cherry on Top:</strong> A maraschino cherry as the finishing touch, adding a pop of color.</li>
                            </ul>


                            <h3>Bowl: $5.99 __ 3 scoops</h3>
                            <h3>Any Toppings: FREE</h3>
                        </div>
                    </div>

                    <div class="sundae">
                        <img src={Sundae6} alt="Matcha Zen Sundae" />
                        <div class="sundaeList">
                            <h1>Matcha Zen Sundae</h1>
                            <p>Unveiling the Matcha Zen Sundae, a serene and sophisticated creation that invites you to experience the harmonious blend of matcha's earthy notes and the indulgence of a classic sundae. Nestled in a bowl, the velvety matcha-flavored ice cream takes center stage, offering a subtle yet rich taste that captivates the palate.
                                This sundae is elevated with a drizzle of sweetened matcha sauce, adding an extra layer of flavor complexity. Garnished with delicate mochi bites and a sprinkle of toasted sesame seeds, every spoonful is a journey into the world of Japanese-inspired dessert elegance.
                                The Matcha Zen Sundae embodies a sense of tranquility, allowing you to savor the meditative experience of each bite. It's a delightful escape for matcha enthusiasts and dessert lovers alike, providing a perfect balance of flavors and textures in every scoop.</p>
                                <ul class="ingredientsList">
                                <h3>Ingreidents:</h3>
                                <li><strong>Matcha Green Tea Ice Cream:</strong> A luscious and creamy matcha-flavored ice cream as the base.</li>
                                <li><strong>Red Bean Paste:</strong> Sweet red bean paste for a traditional Japanese flavor.</li>
                                <li><strong>Mochi Balls:</strong> Soft and chewy mochi balls for a delightful texture contrast.</li>
                                <li><strong>Matcha Drizzle:</strong> Drizzles of matcha syrup for an extra boost of matcha flavor.</li>
                                <li><strong>Whipped Cream:</strong> Fluffy whipped cream for a light and creamy topping.</li>
                                <li><strong>Matcha Powder:</strong> Finely ground matcha powder sprinkled on top for an authentic touch.</li>
                            </ul>


                            <h3>Bowl: $5.99 __ 3 scoops</h3>
                            <h3>Any Toppings: FREE</h3>
                        </div>
                    </div>



                </section>
            </section>

            <Footer />

        </>
    )
}

export default menu