import React, { useRef, useState } from 'react'
import './auth-input.css'

const AuthInput = ({label, ...attributes}) => {
    const [showPassword, setShowPassword] = useState(false)
    const currentInput = useRef()
    const handelPasswordToggle = ()=>{
        setShowPassword(!showPassword)
        if(currentInput.current.type === 'password'){
            currentInput.current.type = 'text'
        }else{
            currentInput.current.type = 'password'
        }
    }

    return (
        <div className="auth-group d-flex align-items-center justify-content-end position-relative mb-5">
            <input className='auth__input' placeholder=" " {...attributes} ref={currentInput} />
            <label className='auth__label'>{label}</label>
            {
                (attributes.type === 'password') &&
                <button type='button' onClick={handelPasswordToggle} className='auth__input-icon btn position-absolute h-100 border-0 px-3 px-md-4'>
                    {
                        showPassword ?
                        <i className='bi bi-eye-slash-fill'></i> :
                        <i className='bi bi-eye-fill'></i>
                    }
                </button>
            }
        </div>
    )
}

export default AuthInput