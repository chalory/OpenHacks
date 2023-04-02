import React, { useState, useCallback } from 'react';
import ReactModal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion'

export default function ExampleApp(props) {
  // const [showModal, setShowModal] = useState(false);

  // const handleOpenModal = useCallback(() => {
  //  setShowModal(true);
  // }, []);

  // const handleCloseModal = useCallback(() => {
  //   setShowModal(false);
  // }, []);
  const [step, setStep] = useState(1)
  const [isFirstStepVisible, setIsFirstStepVisible] = useState(true)
  const [isSecondStepVisible, setIsSecondStepVisible] = useState(false)
  const [isThirdStepVisible, setIsThirdStepVisible] = useState(false)
  const updateVisibility = (step) => {
    if (step === 1) {
      setIsFirstStepVisible(true)
      setIsSecondStepVisible(false)
      setIsThirdStepVisible(false)
    }
    if (step === 2) {
      setIsFirstStepVisible(false)
      setIsSecondStepVisible(true)
      setIsThirdStepVisible(false)
    }
    if (step === 3) {
      setIsFirstStepVisible(false)
      setIsSecondStepVisible(false)
      setIsThirdStepVisible(true)
    }
  }
  const nextStep = () => {
    if (step + 1 > 3) {
      return
    }
    updateVisibility(step + 1)
    setStep(step + 1)
  }
  const prevStep = () => {
    if (step - 1 === 0) {
      return
    }
    updateVisibility(step - 1)
    setStep(step - 1)
  }

  return (
    /*
    <div>
      <button onClick={handleOpenModal}>Trigger Modal</button>
      <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
    </div>
    */
    <div className="msform">
      <ul id="progressbar">
        <li className={step >= 1 ? "active" : ""}>Account Setup</li>
        <li className={step >= 2 ? "active" : ""}>Personal Details</li>
        <li className={step >= 3 ? "active" : ""}>Contact Details</li>
      </ul>
      <AnimatePresence>
        {isFirstStepVisible && 
          <motion.fieldset
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="fs-title">Create your account</h2>
            <h3 className="fs-subtitle">Step 1</h3>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="pass" placeholder="Password" />
            <input type="password" name="cpass" placeholder="Confirm Password" />
            <input type="button" name="next" className="next action-button" value="Next" onClick={nextStep} />
          </motion.fieldset>
        }
      </AnimatePresence>
      <AnimatePresence>
        {isSecondStepVisible && 
          <motion.fieldset
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="fs-title">Personal Details</h2>
            <h3 className="fs-subtitle">Step 2</h3>
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="lname" placeholder="Last Name" />
            <input type="text" name="phone" id="phone" placeholder="Phone" />
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={prevStep} />
            <input type="button" name="next" className="next action-button" value="Next" onClick={nextStep} />
          </motion.fieldset>
        }
      </AnimatePresence>
      <AnimatePresence>
        {isThirdStepVisible && 
          <motion.fieldset
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="fs-title">Contact Details</h2>
            <h3 className="fs-subtitle">Step 3</h3>
            <input type="text" name="address" placeholder="Address" />
            <select name="country" className="product_select">
              <option value="">Select Country</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="india">India</option>
              <option value="pakistan">Pakistan</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="china">China</option>
            </select>
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={prevStep} />
            <input type="submit" name="submit" className="submit action-button" value="Submit" />
          </motion.fieldset>
        }
      </AnimatePresence>
    </div>
  );
}

