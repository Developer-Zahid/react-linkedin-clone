import React from 'react'
import '../assets/css/pages/auth-page.css'

const LoginPage = () => {
  return (
    <section className='auth d-flex min-vh-100 py-5'>
        <div className="container">
            <div className="row h-100">
                <div className="col-lg-8 text-center m-auto">
                    <img src='/assets/images/logo/logo.png' alt='logo' width='46' height='46' draggable='false' loading='lazy' className='auth__logo' />
                    <h1 className='auth__title'>Login</h1>
                    <p className='auth__text'>Free register and you can enjoy it</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginPage