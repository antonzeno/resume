import React from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
    title: string;
    img: string;
    page: string;
    available: boolean;
}
function ProductCard({ title, img, page, available }: ProductCardProps) {
    const navigate = useNavigate();
    return (
        <div className="col-6 col-md-3 d-flex flex-column">
            <h6>{title}</h6>
            <div className='d-flex flex-column position-relative p-1'>
                {!available && <div className="coming-soon">Coming Soon</div>}
                <img
                    src={require(`../../assets/${img.toLowerCase()}.png`)}
                    alt={img}
                    className="product-image"
                />
            </div>
            <a role='button' className='text-center text-decoration-none' onClick={() => navigate('/register')}>Generate</a>
        </div>
    );
}
export default ProductCard;