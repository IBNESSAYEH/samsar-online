import React, {useState, useRef} from 'react';
import axios from "axios"

const Register = () => {
  //--------------------------state init------------------------------------
  // inputs references initializing
  const firstNameInput = useRef("");
  const lastNameInput = useRef("");
  const phoneInput = useRef("");
  const emailInput = useRef("");
  const passwordInput = useRef("");
  const confirmPasswordInput = useRef("");

  // inputs messages states initializing
  const [firstNameInputMessage, setFirstNameInputMessage] = useState("");
  const [lastNameInputMessage, setLastNameInputMessage] = useState("");
  const [phoneInputMessage, setPhoneInputMessage] = useState("");
  const [emailInputMessage, setEmailInputMessage] = useState("");
  const [passwordInputMessage, setPasswordInputMessage] = useState([]);
  const [confirmPasswordInputMessage, setConfirmPasswordInputMessage] = useState("");
  //----------------------------handlig inputs----------------------------------------
  const handleFirstNameInput = () => {
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(firstNameInput.current.value.trim())) {
      setFirstNameInputMessage("First name must contain only letters");
      return false;

    } else if (firstNameInput.current.value.trim().length < 3) {
      setFirstNameInputMessage("First name must be at least 3 characters long");
      return false;
    } else {
      setFirstNameInputMessage("");
      return true;
    }
  }
  const handleLastNameInput = () => {
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(lastNameInput.current.value.trim())) {
      setLastNameInputMessage("Last name must contain only letters");
      return false;
    } else if (lastNameInput.current.value.trim().length < 3) {
      setLastNameInputMessage("Last name must be at least 3 characters long");
      return false;
    } else {
      setLastNameInputMessage("");
      return true;
    }
  }
  
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+?[0-9\s-()]{7,}$/;
    return phoneRegex.test(phone);
  };
  const handlePhoneInput = () => {
    if(!validatePhoneNumber(phoneInput.current.value.trim())){
      setPhoneInputMessage('the phone number must be like this format +212 610703593') 
      return false;
    }else{
      setPhoneInputMessage('');
      return true;
    } 
 
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailInput = () => {
    if (validateEmail(emailInput.current.value.trim())) {
      setEmailInputMessage("");
      return true;
    } else if(firstNameInput.current.value.trim().length > 3 && lastNameInput.current.value.trim().length > 3) {
      setEmailInputMessage(`the email must be like  ${firstNameInput.current.value.trim()} ${lastNameInput.current.value.trim()}@gmail.com`) 
      return false;
    }else{
      setEmailInputMessage(`the email must be like ahmedibnali123@gmail.com`) 
      return false;
    }
    
  }

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };


  const handlePasswordInput = () => {
    if (!validatePassword(passwordInput.current.value.trim())) {
      setPasswordInputMessage([
        "Contains at least one lowercase letter.",
        "Contains at least one uppercase letter.",
        "Contains at least one digit.",
        "Contains at least one special character (#&@$)",
        "Has a minimum length of 8 characters."
      ]);
      return false;
    } else {
      setPasswordInputMessage([]);
      return true;
    }
  }
  
  const handleConfirmPasswordInput = () => {
    const password = passwordInput.current.value.trim();
    const confirmPassword = confirmPasswordInput.current.value.trim();
  
    if (confirmPassword !== password) {
      setConfirmPasswordInputMessage("Passwords do not match");
      return false;
    } else {
      setConfirmPasswordInputMessage("");
      return true;
    }
  }





  const [formData, setFormData] = useState({});
 
  const [formErrors, setFormErrors] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if all fields are valid before submission
    if (
      handleFirstNameInput() &&
      handleLastNameInput() &&
      handlePhoneInput() &&
      handleEmailInput() &&
      handlePasswordInput() &&
      handleConfirmPasswordInput()
    ) {
      const formData = {
        first_name: firstNameInput.current.value,
        last_name: lastNameInput.current.value,
        phone: phoneInput.current.value,
        email: emailInput.current.value,
        password: passwordInput.current.value,
      };
  
      try {
        const response = await axios.post("http://localhost:8000/api/register", formData);
  
        if (response.status === 200) {
         
          alert(response.data.message);
        } else if (response.status === 422) {
          // Display validation errors
          const errorMessages = Object.values(response.data.errors).join('\n');
          alert(errorMessages);
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 500) {
            
            alert("Email already exists. Please use a different email.");
          } else {
            const errorMessages = Object.values(error.response.data.errors).join('\n');
            
            alert(errorMessages + '\n' + "try again and respect the messages bellow rhe inputs !");
          }
        } else {
          console.error('An error occurred:', error.message);
         
        }
      }
    } else {
      alert("Please correct the errors and try again!!");
    }
  };


  return (
    <main className="register__main row justify-content-center align-items-center">
      <section className="register__main__fromSection col-12 col-lg-9">
        <img src="/assets/photos/Logo.png" alt="SAmasarOnline Logo" className="register__main__logo" />
        <div className="register__main__fromSection__form">
          <form className="register__form row" method='POST' onSubmit={handleSubmit}>
            <div className="register__form__group col-12 col-md-6 gap-2">
              <div className="register__form__group__item mb-3">
                <label htmlFor="first_name" className="register__form__label">First Name :</label>
                <input type="text" ref={firstNameInput} onChange={handleFirstNameInput} className="register__form__control" id="first_name" placeholder="Enter your first name" />
                {firstNameInputMessage && ( <small className='text-danger'>{firstNameInputMessage}</small> )}
              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="last_name" className="register__form__label">Last Name :</label>
                <input type="text" ref={lastNameInput} onChange={handleLastNameInput} className="register__form__control" id="last_name" placeholder="Enter your last name" />
                {lastNameInputMessage && ( <small className='text-danger'>{lastNameInputMessage}</small> )}

              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="phone" className="register__form__label">Phone :</label>
                <input type="tel" ref={phoneInput} onChange={handlePhoneInput} className="register__form__control" id="phone" placeholder="Enter your phone" />
                {phoneInputMessage && ( <small className='text-danger'>{phoneInputMessage}</small> )}

              </div>
            </div>
            <div className="register__form__group col-12 col-md-6 gap-2">
              <div className="register__form__group__item mb-3">
                <label htmlFor="exampleInputEmail1" className="register__form__label">Email address :</label>
                <input type="email" ref={emailInput} onChange={handleEmailInput}  className="register__form__control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                {emailInputMessage && ( <small className='text-danger'>{emailInputMessage}</small> )}

              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="exampleInputPassword1" className="register__form__label">Password :</label>
                <input type="password" ref={passwordInput} onChange={handlePasswordInput}  className="register__form__control" id="exampleInputPassword1" placeholder="Enter your password" />
                {passwordInputMessage.length > 0 && (
      <ul>
        {passwordInputMessage.map((element, i) => (
          <li key={i} className='text-danger'>{element}</li>
        ))}
      </ul>
    )}
              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="confirm" className="register__form__label">Confirm Password :</label>
                <input type="password" ref={confirmPasswordInput} onChange={handleConfirmPasswordInput}  className="register__form__control" id="confirm" placeholder="Repeat your password" />
                {setConfirmPasswordInputMessage && ( <small className='text-danger'>{confirmPasswordInputMessage}</small> )}
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
