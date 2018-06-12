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

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [
                {
                    productID: this.setState.productID,
                    name: this.setState.name,
                    description: this.setState.description,
                    unitPrice: this.setState.unitPrice,
                    unitsInStock: this.setState.unitsInStock,
                    image: this.setState.image
                }
            ],
        };
    }

    componentDidMount() {
        fetch("https://private-3efa8-products123.apiary-mock.com/products")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div id="home">
                    <div className="row">
                        <div className="col-md-12">
                            <Showcase {...this.homeShowcases} />
                        </div>
                        <ul>
                            {items.map(item => (
                                <li key={item.productID}>
                                    {item.name} {item.unitsInStock}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
    }
}
