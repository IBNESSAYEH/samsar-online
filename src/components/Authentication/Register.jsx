import React from 'react';

const Register = () => {
  return (
    <main className="register__main row justify-content-center align-items-center">
      <section className="register__main__fromSection col-12 col-lg-9">
        <img src="/assets/photos/Logo.png" alt="SAmasarOnline Logo" className="register__main__logo" />
        <div className="register__main__fromSection__form">
          <form className="register__form row">
            <div className="register__form__group col-12 col-md-6 gap-2">
              <div className="register__form__group__item mb-3">
                <label htmlFor="first_name" className="register__form__label">First Name :</label>
                <input type="text" className="register__form__control" id="first_name" placeholder="Enter your first name" />
              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="last_name" className="register__form__label">Last Name :</label>
                <input type="text" className="register__form__control" id="last_name" placeholder="Enter your last name" />
              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="phone" className="register__form__label">Phone :</label>
                <input type="tel" className="register__form__control" id="phone" placeholder="Enter your phone" />
              </div>
            </div>
            <div className="register__form__group col-12 col-md-6 gap-2">
              <div className="register__form__group__item mb-3">
                <label htmlFor="exampleInputEmail1" className="register__form__label">Email address :</label>
                <input type="email" className="register__form__control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="exampleInputPassword1" className="register__form__label">Password :</label>
                <input type="password" className="register__form__control" id="exampleInputPassword1" placeholder="Enter your password" />
              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="confirm" className="register__form__label">Confirm Password :</label>
                <input type="password" className="register__form__control" id="confirm" placeholder="Repeat your password" />
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

export default Register;
