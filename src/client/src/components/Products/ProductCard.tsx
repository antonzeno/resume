import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    title: string;
    img: string;
    available: boolean;
}
function ProductCard({ title, img, available }: ProductCardProps) {
    return (
        <div className="col-6 col-md-3 d-flex flex-column">
            <Link to={`/products/${title.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                <h6>{title}</h6>
                <div className='d-flex flex-column position-relative p-1'>
                    {!available && <div className="coming-soon">Coming Soon</div>}
                    <img
                        src={require(`../../assets/${img.toLowerCase()}.png`)}
                        alt={img}
                        className="product-image"
                    />
                </div>
            </Link>
        </div>
    );
}
export default ProductCard;