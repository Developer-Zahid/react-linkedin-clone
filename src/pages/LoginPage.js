import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/pages/auth-page.css'
import AuthInput from '../components/auth-input/AuthInput'

const LoginPage = () => {
  return (
    <section className='auth d-flex min-vh-100 py-5'>
        <div className="container">
            <div className="row h-100">
                <div className="col-lg-5 col-md-7 col-sm-10 text-center m-auto">
                    <img src='/assets/images/logo/logo.png' alt='logo' width='46' height='46' draggable='false' loading='lazy' className='auth__logo' />
                    <h1 className='auth__title'>Login</h1>
                    <p className='auth__text'>Free register and you can enjoy it</p>
                    <form action="#!" className='auth__form'>
                      <AuthInput label="Email address" type="email" required />
                      <AuthInput label="Password" type="password" required />
                      <button type='submit' className='btn auth__btn btn-block w-100 rounded-pill'>Sign In</button>
                    </form>
                    <p className='auth__text text-center mt-4 mb-0'>Don't have an account, <Link to='/register' className='auth__link'>Register</Link> here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginPage