import React from 'react'
import "./style.css"
const Login = () => {
    return (
        <>
            <div className="login_main_form">
                <div className='card login_data_container shadow'>
                    <h4 className="text-center mt-5 mb-5">Hello there!  👋</h4>
                    <div className="container">
                        <label htmlFor="" className="mb-2 ">Username</label>
                        <br />
                        <input type="text" className='w-100 login_input_height px-2 py-3 ' />
                        <label htmlFor="" className="mb-2 mt-4">Password</label>
                        <br />
                        <input type="text" className='w-100 login_input_height px-2 py-3  ' />
                        <div className="mt-1 forgot_password" >
                            <strong>Forgot password</strong>
                        </div>
                        <button className=' login_button_color mt-5 px-3 '>Login Now!</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login