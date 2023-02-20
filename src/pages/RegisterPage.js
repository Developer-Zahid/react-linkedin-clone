import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../assets/css/pages/auth-page.css'
import AuthInput from '../components/auth-input/AuthInput'

const RegisterPage = () => {
  const [inputValue, setInputValue] = useState({
    register_email: '',
    register_name: '',
    register_password: ''
  })

  const handelInputValue = (e)=>{
    const {name, value} = e.target
    setInputValue({...inputValue, [name]: value.trim()})
  }

  const showError = (message)=>{
    toast.error(message, {
      autoClose: 3000,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  }

  const isValidEmail = (email)=>{
    const emailVerificationRegex = /^([\w\.])+@[\w]+\.[\w\.\-]{2,4}$/
    return emailVerificationRegex.test(email)
  }

  const isValidPassword = (password)=>{
    const passwordVerificationRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    return passwordVerificationRegex.test(password)
  }

  const handelSubmitClick = () =>{
    if(inputValue.register_email === ''){
      showError("Email is requred")
    }else if(!isValidEmail(inputValue.register_email)){
      showError("Please enter a valid email")
    }
    if(inputValue.register_name === ''){
      showError("Full name is requred")
    }
    if(inputValue.register_password === ''){
      showError("Password is requred")
    }else if(!isValidPassword(inputValue.register_password)){
      showError("Please enter a valid password")
    }
  }

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
                      <AuthInput label="Email address" type="email" name="register_email" pattern="^([\w\.])+@[\w]+\.[\w\.\-]{2,4}$" onChange={handelInputValue} required />
                      <AuthInput label="Full name" type="text" name="register_name" onChange={handelInputValue} required />
                      <AuthInput label="Password" type="password" name="register_password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handelInputValue} required />
                      <button type='submit' onClick={handelSubmitClick} className='btn auth__btn btn-block w-100 rounded-pill'>Sign Up</button>
                    </form>
                    <p className='auth__text text-center mt-4 mb-0'>Already have an account, <Link to='/' className='auth__link'>Login</Link> here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RegisterPage