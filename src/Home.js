import React, { Component } from 'react';
import Showcase from './components/Showcase/Showcase';


export default class Home extends Component {

    render() {
            return (
                <div id="home">
                    <div className="row">
                        <div className="col-md-12">
                            <Showcase/>                                       
                        </div>  
                    </div>
                </div>
            );
        }
    }

