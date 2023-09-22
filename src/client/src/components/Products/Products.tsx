import React from 'react';
import ProductCard from './ProductCard';

const products = ['Certificate', 'Cover', 'Invoice', 'Resume'];

const Products = () => {
    return (
        <div className='text-center'>
            <div className="app-header center-container text-center">
                <div className="container">
                    <div className="small fw-bold">Explore Our Products</div>
                    <h1 className='fw-bold'>Elevate Your Document Creation</h1>
                    <p>Crafting professional documents can be a daunting task. We understand. That's why we've developed a suite of specialized tools to streamline the process.</p>
                    <p>Ready to get started? It's free to try.</p>

                </div>
            </div>

            <div className='container pb-5'>
                <div className="row">
                    {
                        products.map(product =>
                            <ProductCard title={product} img={product} page={product} available={product == 'Certificate'} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;