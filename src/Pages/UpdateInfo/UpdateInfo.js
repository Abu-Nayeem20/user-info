import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Menu from '../Shared/Menu/Menu';

const UpdateInfo = () => {
    return (
        <div className='update-content'>
            <div className="container">
                <Menu />
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div>
                            <h2 className='heading'>Update Your Info</h2>
                            <form>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-user"></i></InputGroup.Text>
                                <FormControl
                                placeholder="Name"
                                aria-label="text"
                                type='text'
                                required
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-phone"></i></InputGroup.Text>
                                <FormControl
                                placeholder="Phone"
                                aria-label="number"
                                type='number'
                                required
                                aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3"><i className="fa-solid fa-location-dot"></i></InputGroup.Text>
                                <FormControl
                                placeholder="Address"
                                aria-label="text"
                                type='text'
                                required
                                aria-describedby="basic-addon3"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon4"><i className="fa-solid fa-camera"></i></InputGroup.Text>
                                <FormControl
                                placeholder="Photo"
                                aria-label="photo"
                                type='file'
                                accept='image/*'
                                required
                                aria-describedby="basic-addon4"
                                />
                            </InputGroup>
                            <button className='submit-btn' type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateInfo;