import React, { useState } from "react";
import { Route, useNavigate, Routes, useLocation } from "react-router-dom";
import PersonalDetailsForm from "../components/forms/PersonalDetailsForm";
import AddressForm from "../components/forms/AddressForm";
import PaymentForm from "../components/forms/PaymentForm";
import Result from "./Result";

const StepForm = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleNext = (values) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    console.log(values);
    if (location.pathname === "/") {
      navigate("/step2");
    } else if (location.pathname === "/step2") {
      navigate("/step3");
    }
  };

  const handleBack = () => {
    if (location.pathname === "/step2") {
      navigate("/");
    } else if (location.pathname === "/step3") {
      navigate("/step2");
    }
  };

  const handleSubmit = (values) => {
    setFormData((prevData) => ({ ...prevData, ...values }));
    // formData(values)
    navigate("/result");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PersonalDetailsForm onNext={handleNext} formData={formData} />
        }
      />
      <Route
        path="/step2"
        element={
          <AddressForm
            onNext={handleNext}
            onBack={handleBack}
            formData={formData}
          />
        }
      />
      <Route
        path="/step3"
        element={
          <PaymentForm
            onNext={handleSubmit}
            onBack={handleBack}
            formData={formData}
          />
        }
      />
      <Route path="/result" element={<Result formData={formData} />} />
      <Route path="/" element={<PersonalDetailsForm onNext={handleNext} />} />
    </Routes>
  );
};

export default StepForm;
