import React, {useState, useRef, useContext} from 'react';
import axios from "axios"
import AuthContext from '../../contexts/AuthenticationContext/AuthContexts';


const Login = () => {

  // destruct AuthContext data
 const { emailInput,passwordInput,emailInputMessage,passwordInputMessage,handleLoginEmailInput,
    handlePasswordInput} = useContext(AuthContext)



  return (
    <main className="register__main row justify-content-center align-items-center">
      <section className="register__main__fromSection col-11 col-lg-6">
        <img src="/assets/photos/Logo.png" alt="SAmasarOnline Logo" className="register__main__logo" />
        <div className="main__login__fromSection__form">
          <form className="register__form row " method='POST' >
           
            <div className="register__form__group col-12 col-md-12 gap-2">
              <div className="register__form__group__item mb-3">
                <label htmlFor="exampleInputEmail1" className="register__form__label">Email address :</label>
                <input type="email" ref={emailInput} onChange={handleLoginEmailInput}  className="login__form__control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                {emailInputMessage && ( <small className='text-danger'>{emailInputMessage}</small> )}

              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="exampleInputPassword1" className="register__form__label">Password :</label>
                <input type="password" ref={passwordInput} onChange={handlePasswordInput}  className="login__form__control" id="exampleInputPassword1" placeholder="Enter your password" />
                {passwordInputMessage.length > 0 && (
      <ul>
        {passwordInputMessage.map((element, i) => (
          <li key={i} className='text-danger'>{element}</li>
        ))}
      </ul>
    )}
              </div>
              
            </div>
            <div className="register__form__group col-12 mb-3">
              <label htmlFor="formFile" className="register__form__label">Profile :</label>
              <input className="register__form__control" type="file" id="formFile" placeholder="Choose your profile" />
            </div>
            <button type="submit" name="submit" className="register__form__btn ">Submit</button>
          </form>
          <p className='mt-2'>if you have an account : <span className='text-success'>Login</span></p>
        </div>
      </section>
    </main>
  );
}

export default Login;
