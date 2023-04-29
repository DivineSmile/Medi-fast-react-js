import React from 'react'
import '../css/offers.css'
import Offerscard from './Offerscard'
const Offers = () => {
    return (
        <div className="offers">
            <div className="jumbotron offers-bg">
                <div className="offers-heading ">
                    <div className="offers-h">Offers For you 
                        <img className="offers-img pull-right" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham" alt="offers"/>
                    </div>
                    <div className="offers-text">Explore top deals and offers exclusively for you!</div>
                </div>
            </div>
             <div className="container-fluid offers-container">
				<ul className="nav nav-tabs offers-tab" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="payment-offers" data-toggle="tab" href="#payment-offers" role="tab">Payment offers/Coupons</a>
					</li>
                    <li className="nav-item">
						<a className="nav-link" id="location-offers" data-toggle="tab" href="#location-offers" role="tab">Location Offers</a>
					</li>
				</ul>
        	 </div> 

               
            <Offerscard/>
         </div>

    )
}

export default Offers
