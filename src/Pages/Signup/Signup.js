import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Menu from '../Shared/Menu/Menu';

const Signup = () => {

    const {signInUsingGoogle, createAccountWithMail, setLoading, setError, error, setUser, saveUser } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const location = useLocation();
    const navigate = useNavigate();
    // const redirect_uri = location.state?.from || '/home';

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    } 

    // Make a Strong Password before submit

    const handleSubmitButton = e =>{
        e.preventDefault();
        // console.log(email, password);
        if(password.length < 6){
          setError('Password must be at least 6 characters');
          return;
        }
        handleCreateAccoutWithMail();
    }

    const handleCreateAccoutWithMail = () => {
        createAccountWithMail(email,password)
    .then((res) => {
      setLoading(true)
        setError('');
        saveUser(email, "POST");
        setUser(res.user);
        navigate("/update-info");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=> {
        setLoading(false)
      })
    };

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            const user = result.user;
            saveUser(user.email, "PUT");
            navigate("/update-info");
        })
    }

    return (
        <div className='loging'>
            <div className='container'>
                <Menu />
                <div className='row'>
                    <div className="col-md-6 offset-md-3">
                        <div className="login-content">
                            <div>
                                <h2 className='heading'>Create account!</h2>
                                <p className='error-text'>{error}</p>
                            <form onSubmit={handleSubmitButton}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-envelope"></i></InputGroup.Text>
                                <FormControl
                                placeholder="E-mail"
                                aria-label="email"
                                type='email'
                                onBlur={handleEmailChange}
                                required
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-lock"></i></InputGroup.Text>
                                <FormControl
                                placeholder="Password"
                                aria-label="password"
                                type='password'
                                onBlur={handlePasswordChange}
                                required
                                aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                            <button className='submit-btn' type='submit'>SignUp</button>
                            </form>
                            <div className='google-login'>
                                <h6>Login with Google!</h6>
                                <button className='ggle-btn' onClick={handleGoogleSignIn}><i className="fa-brands fa-google"></i></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;