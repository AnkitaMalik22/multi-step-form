import React from "react";
import "./Plan.css";
import img1 from "../../assets/images/icon-arcade.svg";
import img2 from "../../assets/images/icon-advanced.svg";
import img3 from "../../assets/images/icon-pro.svg";
import { AppContext } from "../../hooks/AppContext.jsx";

const Plan = ({ handleStepClick }) => {
  const { userData, setUserData } = React.useContext(AppContext);
  const { selectedPlan, isYearly } = userData;

  // const [select, setSelect] = React.useState(null);

;

  const plans = [
    { name: "Arcade", price: "$9/mo", img: img1 },
    { name: "Advanced", price: "$12/mo", img: img2 },
    { name: "Pro", price: "$15/mo", img: img3 },
  ];

  const handlePlanDurationChange = () => {
    setUserData(() => ({
      ...userData,
 
      isYearly: !isYearly,
    }));
  };

  const handleSelectChange = (index) => {
 

    setUserData(() => ({
      ...userData,
      selectedPlan: index,
    }));
  };

  const handleNext = (step) => {
    handleStepClick(step);
    setUserData(() => ({
      ...userData,
      selectedPlan,
    }));
  };

  return (

    <div className="plan">
      <h1 className="title">Select your plan</h1>
      <p className="des">
        You have the option of monthly or yearly billing.
      </p>

      <div className="plans">
        {plans.map((plan, index) => (
          <div
            className={`box ${
             selectedPlan==index
                ? "box-active"
                : ""
            }`}
            key={index}
            onClick={() => handleSelectChange(index)}
          >
            <img src={plan.img} alt="image" className="box-img" />
            <h3 className="box-title">{plan.name}</h3>
            <p className="box-price">{plan.price}</p>
          </div>
        ))}
      </div>

      <div className="plan-select">
        <p className={`select-dur ${isYearly ? "" : "selected-dur"}`}>
          Monthly
        </p>
        <label className="switch">
          <input
            type="checkbox"
            className="input"
            checked={isYearly}
            onChange={handlePlanDurationChange}
          />
          <span className="slider round"></span>
        </label>
        <p className={`select-dur ${isYearly ? "selected-dur" : ""}`}>Yearly</p>
      </div>

      <div className="buttons">
        <button
          className="go-back-btn"
          onClick={() => handleStepClick((step) => step - 1)}
        >
          Go Back
        </button>
        <button className="next-btn-plan" onClick={() => handleNext((step) => step + 1)}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Plan;
