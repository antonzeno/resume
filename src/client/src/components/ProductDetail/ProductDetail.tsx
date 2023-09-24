import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const ProductDetail = () => {
    const { isAuthenticated } = useContext(UserContext);
    const { product } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login', { state: { product }, replace: true })
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return null;
    }

    let productImg;
    try {
        productImg = require(`../../assets/${product}.png`);
    } catch (error) {
        navigate('/products', { replace: true });
        return null;
    }

    return (<div className='container mt-5'>
        <div className="row py-0 py-lg-5">
            <div className="col-12 col-md-6 order-2 order-md-1"><img src={productImg} alt="" style={{ width: '100%' }} /></div>
            <div className="col-12 col-md-5 text-center order-1 order-md-2">
                <h1>{product}</h1>
            </div>
        </div>
    </div>);
}

export default ProductDetail;