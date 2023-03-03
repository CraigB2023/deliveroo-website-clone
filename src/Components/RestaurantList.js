import React from 'react';
import Restaurant from '../Components/Restaurant';
import './RestaurantList.css';

import product1Img from '../Images/kebabexpress1.jpeg';
import product2Img from '../Images/VenicePizza.jpeg';
import product3Img from '../Images/RomaPizza.jpeg';
import product4Img from '../Images/PalaceSpice.jpeg';
import product5Img from '../Images/SushiMoto.jpeg';
import product6Img from '../Images/LittleDessertShop.jpeg';
import product7Img from '../Images/PhatKa.jpeg';
import product8Img from '../Images/PastaEvangelists.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row} from "react-bootstrap";
import Sidebar from './Sidebar';
import CloseButton from 'react-bootstrap/CloseButton';
import Badge from 'react-bootstrap/Badge';


const products = [
  {restaurantName: "Kebab Express", image: product1Img, stars: "4.4", starText: "Very Good", starRating: "500+", distance: "0.2 miles away", delivery: "£0.49 delivery", deliveryTime: "10-20 min", whiteDealText: "", redDealText: ""},
  {restaurantName: "Venice Pizza", image: product2Img, stars: "4.4", starText: "Very Good", starRating: "467", distance: "0.2 miles away", delivery: "£0.50 delivery", deliveryTime: "20 min", whiteDealText: "Spend £30", redDealText: "Get 20% off"},
  {restaurantName: "Roma Pizza", image: product3Img, stars: "4.4", starText: "Very Good", starRating: "129", distance: "0.2 miles away", delivery: "£0.99 delivery", deliveryTime: "20 min", whiteDealText: "Spend £25", redDealText: "Get 20% off"},
  {restaurantName: "Palace Spice", image: product4Img, stars: "4.6", starText: "Excellent", starRating: "86", distance: "0.2 miles away", delivery: "£0.49 delivery", deliveryTime: "20-35 min", whiteDealText: "", redDealText: ""},
  {restaurantName: "Sushi Moto", image: product5Img, stars: "4.7", starText: "Excellent", starRating: "87", distance: "0.2 miles away", delivery: "£0.49 delivery", deliveryTime: "15-20 min", whiteDealText: "Spend £25", redDealText: "Get 20% off"},
  {restaurantName: "Little Dessert Shop", image: product6Img, stars: "4.4", starText: "Very good", starRating: "32", distance: "0.2 miles away", delivery: "£0.49 delivery", deliveryTime: "15-25 min", whiteDealText: "Spend £15", redDealText: "Add a free item"},
  {restaurantName: "Phat Ka-Phrao", image: product7Img, stars: "4.4", starText: "Very good", starRating: "20", distance: "0.2 miles away", delivery: "£0.49 delivery", deliveryTime: "20-35 min", whiteDealText: "", redDealText: ""},
  {restaurantName: "Pasta Evangelists", image: product8Img, stars: "4.6", starText: "Excellent", starRating: "500+", distance: "0.2 miles away", delivery: "£0.49 delivery", deliveryTime: "5-15 min", whiteDealText: "", redDealText: ""}
];

function addProducts(products) {
  let myProducts = products.map((product, index) => {
    return (
      <div className="col-sm" key={index}> {/*col-sm is the bootstrap reference*/}
        <Restaurant restaurantName={product.restaurantName} image={product.image} stars={product.stars} starText={product.starText} starRating={product.starRating} distance={product.distance} delivery={product.delivery} deliveryTime={product.deliveryTime} whiteDealText={product.whiteDealText} redDealText={product.redDealText}/>
      </div>
    )
  });

  return myProducts;
}



function RestaurantList() {
    let myProducts = addProducts(products);
    
    return (
        <div className="containerpage">
          <Container fluid>
            <Sidebar />
            <p className="delivery-area"> Delivering to Battersea</p>
            <p><Badge className="btn-sort" bg="primary">Sort by Distance <CloseButton className="btn-close"/></Badge></p>
            <p className="count-restaurants">1805 restaurants</p>
            <Row xs={1} sm={2} md={2} lg={3} xl={4}>
                {myProducts}
            </Row>
          </Container>
        </div>  
    );
}

export default RestaurantList;