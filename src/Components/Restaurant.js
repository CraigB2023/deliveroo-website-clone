import React from 'react';
import './Restaurant.css';
/* https://react-bootstrap.github.io/components/cards/ */
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 


function Restaurant(props) {
    let whiteDeal = false;
    let redDeal = false;
   
    if (props.whiteDealText.length > 0) {
        whiteDeal = true;
    }

    if (props.redDealText.length > 0) {
        redDeal = true;
    }

/*
    const listWaist = props.waistSizes.map((waistSize, index) => {
        return <option key={waistSize+index}>{waistSize}</option>
      });

 
    const listLength = props.lengths.map((length, index) => {
        return <option key={length+index}>{length}</option>
    });
*/

    return (
        <div className="holderCard">
            <Card bg="light">
            {/*<Card bg="light" style={{ width:"360px" }}>*/}
            {/*<Card bg="dark" style={{ width: "30rem" }}>*/}
            <div>
                <Card.Img variant="top" src={props.image} alt="Product image" />
                {whiteDeal ? <span className="white-deal"> {props.whiteDealText}</span> : ''}
                {redDeal ? <span className="red-deal"> {props.redDealText}</span> : ''}
                <span className="card-time"> {props.deliveryTime}</span>
            </div>
            <Card.Body>
                <Card.Title className="card-title" style={{ color: "rgb(0,0,0)" }}>{props.restaurantName}</Card.Title>
                <Card.Text style={{ color: "rgb(255,255,255)" }}>
                <span className="card-text"><FontAwesomeIcon className="font-awesome" icon={faStar} /> <span style={{ color: "rgb(5, 130, 148)" }}>{props.stars} {props.starText}</span> ({props.starRating})<br />
                {props.distance} - {props.delivery}</span>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Restaurant;