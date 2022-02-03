import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => this.setState({
                products:data
            }))
    }

    render() {
        return (
            <div>
                <h4 className='text-center'>Our Products</h4>
                <div className='row'>
                    {this.state.products.map(p => <ProductCard prod={p} key={p.id} />)}
                </div>
            </div>
        );
    }
}
