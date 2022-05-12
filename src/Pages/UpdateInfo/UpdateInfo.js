import React, { useState } from 'react';
import { FormControl, InputGroup, Modal } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Menu from '../Shared/Menu/Menu';

const UpdateInfo = () => {

    const {user} = useAuth();

    const [smShow, setSmShow] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [img, setImg] = useState(null);

    const handleUpdateInfo = e =>{
        e.preventDefault();

        const dataForm = new FormData();
        dataForm.append('name', name);
        dataForm.append('phone', phone);
        dataForm.append('address', address);
        dataForm.append('email', user.email);
        dataForm.append('image', img);

        fetch('http://localhost:5000/users', {
        method: 'PUT',
        body: dataForm
        })
        .then(response => response.json())
        .then(result => {
            if (result.modifiedCount) {
                setSmShow(true);
                e.target.reset();
            }
        })
        .catch(error => {
        console.error('Error:', error);
        });
        
    }

    return (
        <div className='update-content'>
            <div className="container">
                <Menu />
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div>
                            <h2 className='heading'>Update Your Info</h2>
                            <form onSubmit={handleUpdateInfo}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-user"></i></InputGroup.Text>
                                <FormControl
                                placeholder="Name"
                                aria-label="text"
                                type='text'
                                required
                                onChange={e => setName(e.target.value)}
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
                                onChange={e => setPhone(e.target.value)}
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
                                onChange={e => setAddress(e.target.value)}
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
                                onChange={e => setImg(e.target.files[0])}
                                aria-describedby="basic-addon4"
                                />
                            </InputGroup>
                            <button className='submit-btn' type='submit'>Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
                Hey
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Updated Successfully</h4>
            </Modal.Body>
        </Modal>
        </div>
    );
};

export default UpdateInfo;