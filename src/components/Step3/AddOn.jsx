import React, { useContext, useState, useEffect } from 'react';
import './AddOn.css';
import { AppContext } from '../../hooks/AppContext';

const AddOn = ({ handleStepClick }) => {
  const { userData, setUserData } = useContext(AppContext);
  const { addons } = userData;
  const [selectedOptions, setSelectedOptions] = useState([]);

  // useEffect(() => {
  //   console.log(userData);
  // }, [selectedOptions]);

  const onlineServiceOptions = [
    {
      name: 'Online service',
      price: '+$1/mo',
      description: 'Access to multiplayer games',
    },
    {
      name: 'Larger storage',
      price: '+$2/mo',
      description: 'Extra 1TB of cloud save',
    },
    {
      name: 'Customizable Profile',
      price: '+$2/mo',
      description: 'Custom theme on your profile',
    },
  ];

  const handleOptionSelect = (e) => {
    console.log(e.target.name)
    const index = parseInt(e.target.name);
    
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter((s) => s !== index));
    
    } else {
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  const handleNext = (step) => {
    handleStepClick(step);
    setUserData((prevUserData) => ({
      ...prevUserData,
      addons: [...addons, ...selectedOptions],
    }));
  };
  const getOptionClassName = (index, addons) => {
    const isSelected = addons.includes(index);
    return `option ${isSelected ? 'selected' : ''}`;
  };

  return (
    <>
      <div className="addon">
        <h1 className="title">Pick add-ons</h1>
        <p className="des">Add-ons help enhance your gaming experience.</p>
        <div className="options">
          {onlineServiceOptions.map((option, index) => (
            <div
            key={option.name}
            className={getOptionClassName(index, addons)}
            >
              <div className="checkbox-container check">
                <input
                  type="checkbox"
                  name={index}
                  id={`my-checkbox${index}`}
                  className="my-checkbox"
                  checked={selectedOptions.includes(index) || addons.includes(index)}
                  onChange= {handleOptionSelect}
                />
                <label htmlFor={`my-checkbox${index}`} className="checkbox-label"></label>
              </div>
              <div className="option-title">
                <h3 className="option-name">{option.name}</h3>
                <p className="option-des">{option.description}</p>
              </div>
              <p className="option-price">{option.price}</p>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="go-back-btn" onClick={() => handleStepClick((step) => step - 1)}>
            Go Back
          </button>
          <button className="next-btn-plan" onClick={() => handleNext((step) => step + 1)}>
            Next Step
          </button>
        </div>
      </div>
    </>
  );
};

export default AddOn;
