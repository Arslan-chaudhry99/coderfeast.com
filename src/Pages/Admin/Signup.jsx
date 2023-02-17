import React from 'react'
import { useFormik } from 'formik'
import { loginSchema } from '../schemas'

import axios from 'axios'

const initialValues = {
    username: "",
    Password: "",
    email: ""
}
const Signup = () => {
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, action) => {
            try {
                const res = await axios.post("/addNewAdmin", values);

            } catch (error) {

            }


            action.resetForm()
        }
    })
    return (
        <>
            <div className="login_main_form">
                <div className='card login_data_container shadow'>
                    <h4 className="text-center mt-3 ">Add Admin</h4>
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username" className="">Username</label>
                            <br />
                            <input type="text" className='w-100 login_input_height px-2 py-3 ' placeholder='Username*' name='username' id='username' value={values.username} onChange={handleChange} onBlur={handleBlur} />
                            <small className='text-danger'>{errors.username && touched.username ? errors.username : null}</small>
                            <br />
                            <label htmlFor="password" className="mb-2 mt-4">Password</label>
                            <br />
                            <input type="text" className='w-100 login_input_height px-2 py-3  ' placeholder='Password*' name='Password' id='password' value={values.Password} onChange={handleChange} onBlur={handleBlur} />
                            <small className='text-danger'>{errors.Password && touched.Password ? errors.Password : null}</small>
                            <br />
                            <label htmlFor="password" className="mb-2 mt-4">Email Address</label>
                            <br />
                            <input type="email" className='w-100 login_input_height px-2 py-3  ' placeholder='Password*' name='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            <small className='text-danger'>{errors.email && touched.email ? errors.email : null}</small>
                            <div>

                            </div>
                            <button className=' login_button_color mt-2 px-3 ' type='submit'>Login Now!</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup