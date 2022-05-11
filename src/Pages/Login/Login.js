import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Menu from '../Shared/Menu/Menu';
import './Login.css'

const Login = () => {
    return (
        <div className='loging'>
            <div className='container'>
                <Menu />
                <div className='row'>
                    <div className="col-md-6 offset-md-3">
                        <div className="login-content">
                            <div>
                                <h2 className='heading'>Login here!</h2>
                            <form>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-envelope"></i></InputGroup.Text>
                                <FormControl
                                placeholder="E-mail"
                                aria-label="email"
                                type='email'
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
                                required
                                aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                            <button className='submit-btn' type='submit'>Submit</button>
                            </form>
                            <div className='google-login'>
                                <h6>Login with Google!</h6>
                                <button className='ggle-btn'><i className="fa-brands fa-google"></i></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;