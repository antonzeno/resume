import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

interface Product {
    id: string;
    name: string;
    image_uri: string;
}

const ProductDetail = () => {
    const { isAuthenticated } = useContext(UserContext);
    const { id } = useParams();
    const [template, setTemplate] = useState<Product | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login', { state: { id }, replace: true })
        }
    }, [isAuthenticated]);

    useEffect(() => {
        const getTemplate = async () => {
            const docuApiKey = process.env.REACT_APP_DOCU_API_KEY;

            try {
                const response = await axios.get(`http://localhost:8000/api/template/${id}`, {
                    headers: {
                        Authorization: docuApiKey,
                    },
                });
                setTemplate(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getTemplate();
    }, [])

    if (!isAuthenticated) {
        return null;
    }
    return (<div className='container mt-5'>
        <div className="row py-0 py-lg-5">
            <div className="col-12 col-md-6 order-2 order-md-1"><img src={template?.image_uri} alt="" style={{ width: '100%' }} /></div>
            <div className="col-12 col-md-5 text-center order-1 order-md-2">
                <h1>{template?.name}</h1>
            </div>
        </div>
    </div>);
}

export default ProductDetail;