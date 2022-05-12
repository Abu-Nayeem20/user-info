import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Menu = () => {

    const { user } = useAuth();

    // console.log(user)

    return (
        <div>
            <div className='menu-bar'>
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    </Nav.Item>
                    { user.email &&
                    <>   
                    <Nav.Item as="li">
                    <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                    <Nav.Link as={NavLink} to="/update-info">Update Info</Nav.Link>
                    </Nav.Item>
                    </>
                    }
                 </Nav>
                </div>
        </div>
    );
};

export default Menu;