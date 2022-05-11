import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Menu from '../Shared/Menu/Menu';
import './Home.css';

const Home = () => {
    return (
        <div className='home-content'>
            <div className='container'>
                <Menu />
                <div className='row'>
                    <div className="col-md-6 offset-md-3">
                        <div>
                        <div className='home-text'>
                        <h2> New here???</h2>
                        <h3>Create an account!</h3>
                        <Nav.Item as="li">
                            <Nav.Link as={NavLink} to="/signin">Create Account</Nav.Link>
                            </Nav.Item>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;