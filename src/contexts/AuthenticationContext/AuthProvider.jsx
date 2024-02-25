import AuthContext from "./AuthContexts";
import { useState, useRef } from "react";
import axios from "axios";

const AuthProvider = ({ children }) => {


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
        if (!validatePhoneNumber(phoneInput.current.value.trim())) {
            setPhoneInputMessage('the phone number must be like this format +212 610703593')
            return false;
        } else {
            setPhoneInputMessage('');
            return true;
        }

    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    // hendle register email
    const handleRegisterEmailInput = () => {
        if (validateEmail(emailInput.current.value.trim())) {
            setEmailInputMessage("");
            return true;
        } else if (firstNameInput.current.value.trim().length > 2 && lastNameInput.current.value.trim().length > 2) {
            setEmailInputMessage(`the email must be like  ${firstNameInput.current.value.trim()}x${lastNameInput.current.value.trim()}@gmail.com`)
            return false;
        } else {
            setEmailInputMessage(`the email must be like ahmedibnali123@gmail.com`)
            return false;
        }

    }

    //   handle login email
    const handleLoginEmailInput = () => {
        if (validateEmail(emailInput.current.value.trim())) {
            setEmailInputMessage("");
            return true;
        } else {
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



    // handle register form submit

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if all fields are valid before submission
        if (handleFirstNameInput() && handleLastNameInput() && handlePhoneInput() && handleLoginEmailInput() && handlePasswordInput() && handleConfirmPasswordInput()) {
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
                    alert("try again and respect the messages bellow rhe inputs !");
                }
            }
        } else {
            alert("Please correct the errors and try again!!");
        }
    };

    // handle login form submit
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
      
        // Check if all fields are valid before submission
        if (handleLoginEmailInput() && handlePasswordInput()) {
          const formData = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
          };
      
          try {
            const response = await axios.post("http://localhost:8000/api/login", formData);
      
            if (response.status === 200) {
              const token = response.data.token;
              alert("Login successful!");
            } else if (response.status === 422) {
              const errorMessages = Object.values(response.data.errors).join('\n');
              alert(errorMessages);
            }
          } catch (error) {
            if (error.response) {
              if (error.response.status === 401) { 
                alert(error.response.data.error);
              } else {
              
                alert("An error occurred. Please try again later.");
              }
            } else {
              alert("Network error. Please check your internet connection.");
            }
          }
        } else {
          alert("Please correct the errors and try again!!");
        }
      };
      

    return (
        <AuthContext.Provider value={{
            firstNameInput,
            lastNameInput,
            phoneInput,
            emailInput,
            passwordInput,
            confirmPasswordInput,
            firstNameInputMessage,
            lastNameInputMessage,
            phoneInputMessage,
            emailInputMessage,
            passwordInputMessage,
            confirmPasswordInputMessage,
            handleFirstNameInput,
            handleLastNameInput,
            handlePhoneInput,
            handleLoginEmailInput,
            handleRegisterEmailInput,
            handlePasswordInput,
            handleConfirmPasswordInput,
            handleSubmit,
            handleLoginSubmit
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider