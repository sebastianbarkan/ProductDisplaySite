import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function NavigationBar() {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Navbar.Brand>Get Quote</Navbar.Brand>
            </div>
        </Navbar>
    );
}
