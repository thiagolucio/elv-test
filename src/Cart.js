import React, { Component } from 'react';

export default class Cart extends Component {
    render() {
        return (
            <div id="cart">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <h3>Your Cart</h3>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Q-ty</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><img src="http://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png" className="img-list" />
                                        </th>
                                        <td>
                                            <h5>Product Name</h5>
                                            <small>Items left in stock: 4</small>
                                        </td>
                                        <td>Price: 20$</td>
                                        <td>
                                            <div className="input-group input-number">
                                                <input type="number" className="form-control form-control-number" aria-label="Q-ty" value="1"/>
                                            </div>
                                        </td>
                                        <td>&#x274C;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr style={{ background: '#000', height: '2px' }} />
                        <div className="text-right" style={{ marginRight: '5%' }}>
                        <h2>Total Price: </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}