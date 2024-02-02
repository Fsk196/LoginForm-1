// PersonalDetailsForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PersonalDetailsForm = ({ onNext, formData }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    dateOfBirth: Yup.string().required("Date of birth is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Too short")
      .max(15, "Too long")
      .required("Mobile Numberi is required"),
  });

  return (
    <div className="border-2 py-3 px-7 sm:p-10 rounded-lg">
      <h2 className="text-3xl sm:text-4xl font-medium text-center">
        Personal Details
      </h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          email: "",
          mobileNumber: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => onNext(values)}
      >
        <Form>
          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-lg sm:text-xl" htmlFor="firstName">
              First Name:
            </label>
            <div>
              <Field
                className="border-2 text-black text-md sm:text-lg py-1 px-2 sm:px-4 rounded-md focus:outline-none font-medium"
                type="text"
                id="firstName"
                name="firstName"
              />

              <ErrorMessage
                className="text-red-600 text-lg"
                name="firstName"
                component="div"
              />
            </div>
          </div>

          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-lg sm:text-xl" htmlFor="lastName">
              Last Name
            </label>
            <div>
              <Field
                className="border-2 text-black text-md sm:text-lg py-1 px-2 sm:px-4 rounded-md focus:outline-none font-medium"
                type="text"
                id="lastName"
                name="lastName"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="lastName"
                component="div"
              />
            </div>
          </div>

          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-lg sm:text-xl" htmlFor="dateOfBirth">
              Date of Birth:{" "}
            </label>
            <div>
              <Field
                className="border-2 text-black text-md sm:text-lg py-1 px-2 sm:px-4 rounded-md focus:outline-none font-medium"
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="dateOfBirth"
                component="div"
              />
            </div>
          </div>

          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-lg sm:text-xl" htmlFor="email">
              Email Address:{" "}
            </label>
            <div>
              <Field
                className="border-2 text-black text-md sm:text-lg py-1 px-2 sm:px-4 rounded-md focus:outline-none font-medium"
                type="email"
                id="email"
                name="email"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="email"
                component="div"
              />
            </div>
          </div>

          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-lg sm:text-xl" htmlFor="mobileNumber">
              Mobile No.:{" "}
            </label>
            <div>
              <Field
                className="border-2 text-black text-md sm:text-lg py-1 px-2 sm:px-4 rounded-md focus:outline-none font-medium"
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="mobileNumber"
                component="div"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="py-2 px-10 bg-violet-900 text-xl rounded-md"
              type="submit"
            >
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalDetailsForm;
