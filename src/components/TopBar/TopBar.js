import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';


const TopBar = (props) => {

    return (
        <div id="topbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse-topbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/Home" className="navbar-brand active">Home</Link>
                <div className="collapse navbar-collapse" id="collapse-topbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Top 5 Products<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link to="/Fetch" className="nav-link">Fetch Test</Link>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav ml-md-auto">
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">Your Cart <span className="badge badge-pill badge-danger badge-position">{props.action | 0}</span>{ console.log(props.action)}</Link>
                    </li>
                </ul>
            </nav>
        </div>
        )
    }

export default TopBar;