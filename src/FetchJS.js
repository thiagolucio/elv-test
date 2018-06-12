import React, { Component } from 'react';

class App extends Component {
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
            <div style={{ marginTop: '80px' }}>
                <div className="container">
                    <div className="jumbotron">
                        <h4>List of Fetch Products</h4>
                        {
                            // this.state.data.map((dynamicData, key) =>
                            this.state.data.map((dynamicData) =>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        {/* {key} */}
                                        {dynamicData.productID}
                                        {dynamicData.name}
                                        {dynamicData.description}
                                        {dynamicData.unitPrice}
                                        {dynamicData.unitsInStock}
                                        <img src={dynamicData.image} />
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default App;