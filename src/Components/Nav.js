import React from 'react';

import logo from '../Images/logo-teal.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
//https://react-bootstrap.github.io/components/list-group/
import ListGroup from 'react-bootstrap/ListGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Nav() {


    return (
        <Navbar className="navbar" bg="white" fixed="top">
        <Container className="container-top" fluid> {/*fluid for full width*/}
          <Row className="nav-row">
            <Col xs={5} sm={4} md={2} lg={2}>
              <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="121"
                  height="32"
                  className="d-inline-block align-top"
                  alt="Deliveroo logo"
                />
              </Navbar.Brand>
            </Col>
            <Col md={3} lg={4} className="d-none d-lg-block">
              <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Restaurants, groceries, dishes"
                className="md-2"
                aria-label="Search"
              />
              </Form>
            </Col>
            <Col>
              <div className="nav-right-col">
                <ListGroup horizontal>
                <ListGroup.Item className="d-none d-md-block"><Button className="btn-primary shopping-btn" variant="outline-primary"><FontAwesomeIcon className="font-awesome" icon={faShoppingBasket} /> £0.00</Button></ListGroup.Item>
                <ListGroup.Item className="d-none d-sm-block"><Button className="btn-primary sign-in-btn" variant="outline-primary"><FontAwesomeIcon className="font-awesome" icon={faHouse} /> Sign up or log in</Button></ListGroup.Item>
                <ListGroup.Item><Button className="btn-primary menu-btn" variant="outline-primary"><FontAwesomeIcon className="font-awesome" icon={faBars} /> Menu</Button></ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    
    )
}

export default Nav;