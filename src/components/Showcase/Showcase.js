import React, { Component } from 'react';
import './showcase.css';

export default class Showcase extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('https://private-3efa8-products123.apiary-mock.com/products')
            .then((Response) => Response.json())
            .then((findresponse) => {
                console.log(findresponse)
                this.setState({
                    data: findresponse.products,
                })
            })
    }

    render() {
        return (
            <div id="showcase">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="inputGroup-sizing-default" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4">
                        <div className="btn-group float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-light">Grid</button>
                            <button type="button" className="btn btn-light">List</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.data.map((dynamicData) =>
                            <div className="col-12 col-md-4">
                                <div className="card" style={{ width: '18rem', margin: '8px 0', minHeight: '287px' }}>
                                    <img className="card-img-top img-thumbnail" src={dynamicData.image} />
                                    <div className="card-body">
                                        <h5 className="card-title">{dynamicData.name}</h5>
                                        <p className="card-text">{dynamicData.description}</p>
                                        <span className="card-link float-left"><b>Unit Price: {dynamicData.unitPrice}&#8364;</b></span>
                                        <button href="#" className="btn btn-success btn-add-cart float-right">&#x002B;</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
// export default Showcase;