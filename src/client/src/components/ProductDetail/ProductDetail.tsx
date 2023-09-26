import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../contexts/UserContext';
import { SnackbarContext } from '../../contexts/SnackbarContext';

interface Product {
    id: string;
    name: string;
    image_uri: string;
    tags: {
        valid: string[];
    };
}

const ProductDetail = () => {
    const { isAuthenticated } = useContext(UserContext);
    const { id } = useParams();
    const [template, setTemplate] = useState<Product | null>(null);
    const [tagValues, setTagValues] = useState<{ [key: string]: string }>({});
    const { showSnackbar } = useContext(SnackbarContext);

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

    const handleTagInputChange = (tag: string, value: string) => {
        setTagValues(prevState => ({
            ...prevState,
            [tag]: value,
        }));
    }

    const handleDownload = async () => {
        try {
            const docuApiKey = process.env.REACT_APP_DOCU_API_KEY;
            const response = await axios.post(`http://localhost:8000/api/document`, {
                template_id: id,
                data: [tagValues]
            }, {
                headers: {
                    Authorization: docuApiKey
                }
            });

            if (response.status === 200) {
                showSnackbar('Download success', 'success');
            }

        } catch (error) {
            console.error('Error downloading document:', error);
        }
    }


    if (!isAuthenticated) {
        return null;
    }

    return (<div className='container mt-5'>
        <div className="row py-0 py-lg-5">
            <div className="col-12 col-md-6 order-2 order-md-1 me-5"><img src={template?.image_uri} alt={template?.name} className='w-100 shadow' /></div>
            <div className="col-12 col-md-5 order-1 order-md-2">
                <h1>{template?.name}</h1>
                <p className='text-muted'>
                    Create and customize your {template?.name}!  <br />
                    Click the "Download" button when you're ready to save your template.
                </p>

                <div id="downloadForm">
                    <h3 id="headerTitle">Placeholders:</h3>
                    {template?.tags.valid.map((tag) => (
                        <div key={tag} className="my-3">
                            <label htmlFor={tag} className='fw-bold'>{tag}:</label>
                            <input
                                className="form-control rounded p-2"
                                type="text"
                                id={tag}
                                placeholder={tag}
                                value={tagValues[tag] || ''}
                                onChange={(e) => handleTagInputChange(tag, e.target.value)}
                            />
                        </div>
                    ))}
                    <div className='d-flex justify-content-center my-5'>
                        <button className='btn btn-primary p-2 px-4' onClick={handleDownload}>Download <FontAwesomeIcon icon={faDownload} /> </button>

                    </div>
                </div>

            </div>
        </div>
    </div>);
}

export default ProductDetail;