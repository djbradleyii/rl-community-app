import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

export default function Header(){
    return(
        <header>
            <h1>Rocket League Community App</h1>
            <Nav />
        </header>
    );
}