import './Sidebar.css';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
/* Accordion - https://react-bootstrap.github.io/components/accordion/ */

//import Form from 'react-bootstrap/Form';
import cyclist1 from '../Images/cyclist1.jpg'

/* forms and radion buttons */
import SideForm from './SideForm';
/*import Form from 'react-bootstrap/Form';*/
/* https://react-bootstrap.github.io/forms/checks-radios/*/
/* Dropdown - not used - https://react-bootstrap.github.io/forms/select/ */


function Sidebar() {


    return (
        <div className="sidecontainer d-none d-md-block"> {/* bootstrap display - https://getbootstrap.com/docs/4.0/utilities/display/*/}
            <div className="side-top">
                <div id="st-left">
                    <img id="img-cyclist" alt="cyclist "src={cyclist1} />
                </div><div id="st-middle">
                    <span id="st-now">Now</span><br/>
                    <span id="st-location">Battersea</span>
                </div>
                <div id="st-right">
                    <span id="st-change">Change</span>
                </div>
            </div>
            <div id="side-delivery">
                <SideForm name="delivery" type="radio" label={["Delivery","Pickup"]}/>
            </div>
            <div className="side-scroll">
            <Accordion alwaysOpen defaultActiveKey="0"> {/*alwaysOpen stops the menu collapsing*/}
            <Accordion.Item eventKey="0">
                <Accordion.Header>Sort</Accordion.Header>
                <Accordion.Body>
                  <SideForm name="Sort" type="radio" label={["Distance","Hygiene ratings","Quickest delivery","Recommended","Top-rated"]} />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Hygiene rating</Accordion.Header>
                <Accordion.Body>
                    <SideForm name="Hygiene rating" type="radio" label={["Hygiene rating: 5","Hygiene rating: 4","Hygiene rating: 3","Hygiene rating: 2"]} />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Offers</Accordion.Header>
                <Accordion.Body>
                    <SideForm name="Offers" type="radio" label={["All offers","Offer near you","Restaurant picks","Buy one get one free","Order more, save more","Free items"]} />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Dietary</Accordion.Header>
                <Accordion.Body>
                    <SideForm name="Dietary" type="checkbox" label={["Gluten Free","Halal","Kosher","Organic","Paleo","Vegan","Vegan Friendly","Vegetarian"]} />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Categories</Accordion.Header>
                <Accordion.Body>
                    <SideForm name="Categories" type="checkbox" label={["Alcohol","American","Asian","Asian Fusion","BBQ","Breakfast","British","Brunch"]} />
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            </div>

        </div>
    )

}

export default Sidebar;