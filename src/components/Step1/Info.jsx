import React, { useState, useContext } from 'react';
import './Info.css';
import { AppContext } from '../../hooks/AppContext.jsx';

const Info = ({ handleStepClick }) => {
  const { userData, setUserData } = useContext(AppContext);

  const { name, email, phone } = userData;

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!phone) {
      setPhoneError('Phone number is required');
      isValid = false;
    } else if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
      setPhoneError('Invalid phone number');
      isValid = false;
    } else {
      setPhoneError('');
    }

    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(() => ({ ...userData, [name]: value }));
  
  };

  const handleNextClick = (step) => {
    if (validateForm()) {
      handleStepClick((step) => step + 1);
    }
  };

  return (
    <div>
      <div className="info">
        <h1 className="title">Personal info</h1>
        <p className="des">
          Please provide your name, email address, and phone number.
        </p>
        <form className="info__form">
          <div className={`info__form__group `}>
            <label htmlFor="name" className="info__form__label">
              Name
            </label>
            <input
              type="text"
              className={`info__form__input ${nameError ? 'error' : ''}`}
              id="name"
              placeholder="e.g. Stephen King"
              name='name'
              value={name}
              onChange={handleInputChange}
            />
            {nameError && (
              <span className="info__form__error">{nameError}</span>
            )}
          </div>
          <div className={`info__form__group `}>
            <label htmlFor="email" className="info__form__label">
              Email Address
            </label>
            <input
              type="email"
              className={`info__form__input ${emailError && 'error'}`}
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              name='email'
              value={email}
              onChange={handleInputChange}
            />
            {emailError && (
              <span className="info__form__error">{emailError}</span>
            )}
          </div>
          <div className={`info__form__group `}>
        <label htmlFor="phone" className="info__form__label">
          Phone Number
        </label>
        <input
          type="tel"
          className={`info__form__input ${phoneError && 'error'}`}
          id="phone"
          name='phone'
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={handleInputChange}
        />
         {phoneError && (
<p className="info__form__error">Please enter a valid phone number</p>
)}
</div>
</form>
            <button className='next-btn'  onClick={(step) => handleNextClick(step)}> Next Step</button>
        </div>
    </div>
  )
}

export default Info