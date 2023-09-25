import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    id: string;
    name: string;
    img: string;
    available: boolean;
}
function ProductCard({ id, name, img, available }: ProductCardProps) {
    return (
        <div className="col-6 col-md-4 d-flex flex-column">
            <Link to={available ? `/products/${id}` : '/products'} style={{ textDecoration: 'none' }}>
                <h6>{name}</h6>
                <div className='d-flex flex-column position-relative p-1'>
                    {!available && <div className="coming-soon">Coming Soon</div>}
                    <img
                        src={img}
                        alt={img}
                        className="product-image"
                    />
                </div>
            </Link>
        </div>
    );
}
export default ProductCard;