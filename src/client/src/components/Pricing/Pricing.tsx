import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Pricing.css';

function Pricing() {
    return (
        <div className="pricing-container center-container">
            <div className='pricing-card shadow'>
                <input type="radio" name="slider" id="tab-1" />
                <input type="radio" name="slider" id="tab-2" defaultChecked={true} />
                <input type="radio" name="slider" id="tab-3" />
                <div className='card-header'>
                    <label htmlFor="tab-1" className="tab-1">
                        Basic
                    </label>
                    <label htmlFor="tab-2" className="tab-2">
                        Standard
                    </label>
                    <label htmlFor="tab-3" className="tab-3">
                        Team
                    </label>
                    <div className="slider" ></div>
                </div>
                <div className="card-area">
                    <div className="cards">
                        <div className="row row-1">
                            <div className="price-details">
                                <span className="price">9.90</span>
                                <p>For individual users</p>
                            </div>
                            <ul className="features">
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Create and download Resumes</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Create and download Cover Letters</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Access to a library of Templates</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Unlimited Document Edits</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row m-0">
                            <div className="price-details">
                                <span className="price">19.90</span>
                                <p>For professional use</p>
                            </div>
                            <ul className="features">
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>All features from Basic</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Priority Customer Support</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Access to Premium Templates</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Custom Branding Options</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row m-0">
                            <div className="price-details">
                                <span className="price">49.90</span>
                                <p>For team collaboration</p>
                            </div>
                            <ul className="features">
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>All features from Standard</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Team Collaboration Tools</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Admin Controls and Analytics</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Group Document Sharing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button>Choose plan</button>
            </div>
        </div>
    )
}


export default Pricing;