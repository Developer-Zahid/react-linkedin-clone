import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/pages/auth-page.css'
import AuthInput from '../components/auth-input/AuthInput'

const RegisterPage = () => {
  return (
    <section className='auth d-flex min-vh-100 py-5'>
        <div className="container">
            <div className="row h-100">
                <div className="col-12 text-center mt-auto mx-auto">
                    <img src='/assets/images/logo/logo.png' alt='logo' width='46' height='46' draggable='false' loading='lazy' className='auth__logo' />
                    <h1 className='auth__title'>Get started with easily register</h1>
                    <p className='auth__text'>Free register and you can enjoy it</p>
                </div>
                <div className="col-lg-5 col-md-7 col-sm-10 text-center mx-auto mb-auto">
                    <form action="#!" className='auth__form'>
                      <AuthInput label="Email address" type="email" required />
                      <AuthInput label="Full name" type="text" required />
                      <AuthInput label="Password" type="password" required />
                      <button type='submit' className='btn auth__btn btn-block w-100 rounded-pill'>Sign Up</button>
                    </form>
                    <p className='auth__text text-center mt-4 mb-0'>Already have an account, <Link to='/'>Login</Link> here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RegisterPage