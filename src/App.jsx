import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar.jsx';
import './App.css'
import Info from './components/Step1/Info.jsx'
import Plan from './components/Step2/Plan.jsx'
import AddOn from './components/Step3/AddOn.jsx'
import Summary from './components/Step4/Summary.jsx';
import Modal from './components/Modal/Modal.jsx';

const renderActiveStep = (activeStep,handleStepClick) => {
  switch (activeStep) {
    case 1:
      return <Info handleStepClick={handleStepClick} />;
    case 2:
      return <Plan handleStepClick={handleStepClick} />;
    case 3:
      return <AddOn handleStepClick={handleStepClick} />;
    case 4:
      return <Summary handleStepClick={handleStepClick} />;

    default:
      return null;
  }
}


function App() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
 
  return (
   <>
  <div className="container" >

    <Sidebar activeStep={activeStep} handleStepClick={handleStepClick} />
      <div className="content">{renderActiveStep(activeStep,handleStepClick)}</div>

      <div className="footer"></div>
  </div>
   </>
  )
}

export default App
