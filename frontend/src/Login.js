import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from "axios"

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate before submitting
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        // If no validation errors, make the API call
        if (!validationErrors.email && !validationErrors.password) {
            axios.post('https://loginandregistration-1.onrender.com/login', values)
                .then(res => {
                    if (res.data === "SUCCESS") {
                        navigate("/home");
                    } else {
                        alert("Invalid credentials or no record found.");
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-In</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            name="email"
                            value={values.email}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            name="password"
                            value={values.password}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p>You agree to our terms and policies</p>
                    <Link to='/signup' className='btn btn-default border bg-light w-100 rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login
