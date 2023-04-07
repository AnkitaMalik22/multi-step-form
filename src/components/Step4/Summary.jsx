import React, { useState } from "react";
import "./Summary.css";
import { AppContext } from "../../hooks/AppContext";
import img1 from "../../assets/images/icon-arcade.svg";
import img2 from "../../assets/images/icon-advanced.svg";
import img3 from "../../assets/images/icon-pro.svg";
import thankYou from "../../assets/images/icon-thank-you.svg";

// import Modal from "../Modal/Modal.jsx";

const Summary = ({ handleStepClick }) => {
  const { userData, setUserData } = React.useContext(AppContext);
  const { selectedPlan, isYearly, addons } = userData;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  };
  const plans = [
    { name: "Arcade", price: "$9/mo", img: img1 },
    { name: "Advanced", price: "$12/mo", img: img2 },
    { name: "Pro", price: "$15/mo ", img: img3 },
  ];
  const onlineServiceOptions = [
    {
      name: "Online service",
      price: "+$1/mo",
      description: "Access to multiplayer games",
    },
    {
      name: "Larger storage",
      price: "+$2/mo",
      description: "Extra 1TB of cloud save",
    },
    {
      name: "Customizable Profile",
      price: "+$2/mo",
      description: "Custom theme on your profile",
    },
  ];
  const getPrice = () => {
    const selectedPlanPrice = plans[selectedPlan].price;

    const planPrice =
      selectedPlanPrice.length >= 6
        ? selectedPlanPrice.substring(1, 4)
        : selectedPlanPrice.substring(1, 2);
    const addonsPrice = addons.reduce(
      (acc, addon) =>
        parseInt(acc) +
        parseInt(onlineServiceOptions[addon].price.substring(2, 3)),
      0
    );
    const price = `$${parseInt(planPrice) + parseInt(addonsPrice)}/mo`;

    return price;
  };

  return (
    <>
    {
      isModalVisible ? 
      (  <div className="thank-you">
      <img src={thankYou} alt="thank you" className="thank-you-img" />
      <h1 className="title">Thank you!</h1>
      <p className="des thankyou-des">Thanks for your subscription.We hope you have fun using our platform.If you ever need support please feel free to email us at helloworld@gmail.com</p>
    </div>) : 
    (
      <div className="summary-box ">
       
       <h1 className="title"> Finishing up</h1>
       <p className="des">
         Double-check everything looks OK before confirming.
       </p>
       <div className="summary">
         <div className="step-2-selection ">
           <div className="show-plan-selection-1">
             <h3 className="show-plan1-h3">{plans[selectedPlan].name}</h3>
             <a className="change">Change</a>
           </div>

           <p className="show-price-selection-1">
             {plans[selectedPlan].price}
           </p>
         </div>
         <div className="line"></div>
         <div>
           {addons.map((addon, index) => {
             return (
               <div key={index} className="step-3-selection">
                 <p className="show-plan-selection-2">
                   {onlineServiceOptions[addon].name}
                 </p>
                 <p className="show-price-selection-2">
                   {onlineServiceOptions[addon].price}
                 </p>
               </div>
             );
           })}
         </div>
       </div>

       <div className="total">
         <p className="total-month"> Total (per month/year)</p>
         <p className="total-price">{getPrice()}</p>
       </div>

       <div className="buttons">
         <button
           className="go-back-btn"
           onClick={() => handleStepClick((step) => step - 1)}
         >
           Go Back
         </button>

         <button className="next-btn-plan confirm" onClick={handleShowModal}>
           Confirm
         </button>
         {/* {isModalVisible && (
           <Modal
             visible={isModalVisible}
             onClose={handleHideModal}
             handleStep={handleStepClick}
           />
         )} */}
       </div>
     </div>
    )
    }
    
    </>
  );
};

export default Summary;
