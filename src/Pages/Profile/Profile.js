import React from 'react';
import Menu from '../Shared/Menu/Menu';
import img from '../../image/logo.png';
import './Profile.css'
import useAuth from '../../Hooks/useAuth';

const Profile = () => {

    const { user, logOut } = useAuth();

    return (
        <div className='container'>
            <Menu />
           <div className='row'>
                <div className="col-md-6 offset-md-3">
                    <div>
                        <h2 className='heading'>Welcome!!!</h2>
                        <div className='profile-content'>
                            <div className="profile-img">
                                <img src={img} alt="" />
                            </div>
                            <div className="profile-text">
                                <p>Name: </p>
                                <p>E-mail: </p>
                                <p>Phone: </p>
                                <p>Address: </p>
                            </div>
                        </div>
                        <div>
                        <button className='logout-btn' onClick={logOut}>Log Out</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Profile;