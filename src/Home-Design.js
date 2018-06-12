import React, { Component } from 'react';
import Showcase from './components/Showcase/Showcase';

export default class Home extends Component {

    homeShowcases = {
        cardtitle: 'Product Title',
        cardtext: 'Product Description',
        action: () => {
            var count = 0;
            count = count++;
            console.log(count);
        }
    }  

    render() {
            return (
                <div id="home">
                    <div className="row">
                        <div className="col-md-12">
                            <Showcase {...this.homeShowcases} />
                        </div>  
                    </div>
                </div>
            );
        }
    }

