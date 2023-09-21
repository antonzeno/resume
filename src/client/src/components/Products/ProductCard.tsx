import React from 'react';
import './Products.css';

interface ProductCardProps {
    title: string;
    img: string;
    page: string;
    available: boolean;
}
function ProductCard({ title, img, page, available }: ProductCardProps) {
    return (
        <div className="col-6 col-md-3">
            <div className='d-flex flex-column position-relative'>
                {!available && <div className="coming-soon">Coming Soon</div>}
                <img
                    src={require(`../../assets/${img.toLowerCase()}.png`)}
                    alt={img}
                    className="product-image"
                />
            </div>
        </div>
    );
}
export default ProductCard;