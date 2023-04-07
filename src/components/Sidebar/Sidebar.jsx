import React from 'react';
import './Sidebar.css';
import Info from '../Step1/Info.jsx'
import Plan from '../Step2/Plan.jsx'
import AddOn from '../Step3/AddOn.jsx'
import Summary from '../Step4/Summary.jsx';

const steps = [
  {
    number: 1,
    title: 'Your Info',
    component: Info
  },
  {
    number: 2,
    title: 'Select Plan',
    component: Plan
  },
  {
    number: 3,
    title: 'Add-ons',
    component: AddOn
  },
  {
    number: 4,
    title: 'Summary',
    component: Summary
  }
];

const Sidebar = ({ activeStep, handleStepClick }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {steps.map((step) => (
          <SidebarItem
            key={step.number}
            number={step.number}
            title={step.title}
            active={activeStep === step.number}
            // onClick={() => handleStepClick(step.number)}
          />
        ))}
      </ul>
    </div>
  );
};

const SidebarItem = ({ number, title, active, onClick }) => {
  const classNames = `sidebar__step ${active ? 'active' : ''}`;
  return (
    <li className="sidebar__item">
      <span className={classNames} onClick={onClick}>
        {number}
      </span>
      <p className="sidebar__title">
        <span className="step">Step {number}</span>
        <span className="side-title">{title}</span>
      </p>
    </li>
  );
};

export default Sidebar;
