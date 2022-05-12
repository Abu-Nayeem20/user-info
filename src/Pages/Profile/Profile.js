import React, { useEffect, useState } from 'react';
import Menu from '../Shared/Menu/Menu';
import './Profile.css'
import useAuth from '../../Hooks/useAuth';
import img from '../../image/logo.png';

const Profile = () => {

    const { user, logOut } = useAuth();

    const [profile, setProfile] = useState({});

    useEffect( () => {
        fetch(`http://localhost:5000/users/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setProfile(data);
        })
    }, [user.email]);

    // console.log(profile)

    return (
        <div className='container'>
            <Menu />
           <div className='row'>
                <div className="col-md-6 offset-md-3">
                    <div>
                        <h2 className='heading'>Welcome!!!</h2>
                        <div className='profile-content'>
                            <div className="profile-img">
                                {profile.img?
                                <img src={`data:image/png;base64,${profile?.img}`} alt="Img" />
                                :
                                <img src={img} alt="Img" />
                                }
                            </div>
                            <div className="profile-text">
                                <p>Name : {profile?.name}</p>
                                <p>E-mail : {profile?.email} </p>
                                <p>Phone :  {profile?.phone}</p>
                                <p>Address :  {profile?.address}</p>
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