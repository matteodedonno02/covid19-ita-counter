import React from "react";
import { Navbar } from "react-bootstrap";
import "./MyNavbar.css";


function MyNavbar(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand className="navbar-title">Covid-19 ITA Counter</Navbar.Brand>
        </Navbar>
    );
}


export default MyNavbar;