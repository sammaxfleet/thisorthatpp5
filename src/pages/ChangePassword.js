import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { axiosInstance, axiosInstanceFormData } from '../axiosApi';
import { checkUserAuthenticated } from '../store/usersSlice';
import { useNavigate as useNavigation } from "react-router-dom";
const ChangePassword = () => {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [message, setMessage] = useState('');
    const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    const navigate = useNavigation();
    useEffect(() => {
        if (!isLoggedIn) {
            toast.error("You Need To Be Logged In")
            navigate("/")
        }
    }, [isLoggedIn])
    const handlePasswordChange = async () => {
        if (password1 !== password2) {
            setMessage("Passwords don't match");
            return;
        }
        const dataForm = {
            new_password1: password1,
            new_password2: password2
        }
        // Here you can implement the logic to handle the password change
        // For exampleend a request to your backend to update the password
        try {
            const data = await axiosInstance.post("dj-rest-auth/password/change/", JSON.stringify(dataForm))
            if (data.status === 200) {
                toast.success("Password Changed Successfully")
                navigate("/")
            }
        } catch (error) {
            toast.error("Something went wrong maybe password is too common")
        }


        // After changing the password, you can reset the fields and display a success message
        setPassword1('');
        setPassword2('');
        setMessage('Password changed successfully!');
    };

    return (
        <div className="container mt-4">
            <h2>Change Password</h2>
            {message && <p className="text-danger">{message}</p>}
            <Form>
                <Form.Group controlId="password1">
                    <Form.Label>Password 1</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password2">
                    <Form.Label>Password 2</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handlePasswordChange}>
                    Change Password
                </Button>
            </Form>
        </div>
    );
};

export default ChangePassword;
