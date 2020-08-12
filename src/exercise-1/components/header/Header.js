import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Profile from "../kinds/Profile";
import About from "../kinds/About";
import Home from "../kinds/Home";
import './Header.css';

export default class Header extends Component{
    render() {
        return (
            <BrowserRouter>
                <div className="topnav">
                    <Link to="/">Home</Link>
                    <Link to="/my-profile">My Profile</Link>
                    <Link to="/about-us">About Us</Link>
                </div>
                <Switch>
                    <Route path="/my-profile" component={Profile}></Route>
                    <Route path="/about-us" component={About}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
