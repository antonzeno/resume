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

    return (<div className='container'>{product}</div>);
}

export default ProductDetail;