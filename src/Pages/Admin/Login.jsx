import React from 'react'
import "./style.css"
import { useFormik } from 'formik'
import { loginSchema } from '../schemas'
import axios from 'axios'
const initialValues = {
    username: "",
    Password: ""
}
const Login = () => {
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, action) => {
            console.log(values);
            const res = await axios.post("/login",{name:"arslna",lname:"chaudhry"});
            console.log(res);
            action.resetForm()
        }
    })

    return (
        <>
            <div className="login_main_form">
                <div className='card login_data_container shadow'>
                    <h4 className="text-center mt-5 mb-5">Hello there!  👋</h4>
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username" className="mb-2 ">Username</label>
                            <br />
                            <input type="text" className='w-100 login_input_height px-2 py-3 ' placeholder='Username*' name='username' id='username' value={values.username} onChange={handleChange} onBlur={handleBlur} />
                            <small className='text-danger'>{errors.username && touched.username ? errors.username : null}</small>
                            <br />
                            <label htmlFor="password" className="mb-2 mt-4">Password</label>
                            <br />
                            <input type="text" className='w-100 login_input_height px-2 py-3  ' placeholder='Password*' name='Password' id='password' value={values.Password} onChange={handleChange} onBlur={handleBlur} />
                            <small className='text-danger'>{errors.Password && touched.Password ? errors.Password : null}</small>
                            <div className="mt-1 forgot_password" >
                                <strong>Forgot password</strong>
                            </div>
                            <button className=' login_button_color mt-5 px-3 ' type='submit'>Login Now!</button>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Login