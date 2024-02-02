import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PaymentForm = ({ onNext, onBack, formData }) => {
  const validationSchema = Yup.object().shape({
    paymentAmount: Yup.number()
      .required("Payment amount is required")
      .positive("Payment amount must be a positive Number"),
    cardHolderName: Yup.string().required("Cardholder name is required"),
    creditCardNumber: Yup.string()
      .required("Credit Card number is required")
      .matches(/^\d{16}$/, "Invalid credit card number"),
    expiryDate: Yup.string()
      .required("Expiration date is required")
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date format"),
    cvvCode: Yup.string()
      .required("CVV code is required")
      .matches(/^\d{3,4}$/, "Invalid CVV code"),
  });

  return (
    <div className="border-2 p-10 rounded-lg">
      <h2 className="text-4xl font-medium text-center">Payment Form</h2>
      <Formik
        initialValues={{
          paymentAmount: "",
          cardHolderName: "",
          creditCardNumber: "",
          expiryDate: "",
          cvvCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => onNext(values)}
      >
        <Form>
          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-xl" htmlFor="paymentAmount">
              Payment Amount
            </label>
            <div>
              <Field
                className="border-2 text-black text-lg py-1 px-4 rounded-md focus:outline-none font-medium"
                type="number"
                id="paymentAmount"
                name="paymentAmount"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="paymentAmount"
                component="div"
              />
            </div>
          </div>

          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-xl" htmlFor="cardHolderName">
              Cardholder Name
            </label>
            <div>
              <Field
                className="border-2 text-black text-lg py-1 px-4 rounded-md focus:outline-none font-medium"
                type="text"
                id="cardHolderName"
                name="cardHolderName"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="cardHolderName"
                component="div"
              />
            </div>
          </div>

          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-xl" htmlFor="creditCardNumber">
              Credit Card Number
            </label>
            <div>
              <Field
                className="border-2 text-black text-lg py-1 px-4 rounded-md focus:outline-none font-medium"
                type="text"
                id="creditCardNumber"
                name="creditCardNumber"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="creditCardNumber"
                component="div"
              />
            </div>
          </div>

          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-xl" htmlFor="expiryDate">
              Expiry Date
            </label>
            <div>
              <Field
                className="border-2 text-black text-lg py-1 px-4 rounded-md focus:outline-none font-medium"
                type="text"
                id="expiryDate"
                name="expiryDate"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="expiryDate"
                component="div"
              />
            </div>
          </div>

          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-xl" htmlFor="cvvCode">
              CVV Code
            </label>
            <div>
              <Field
                className="border-2 text-black text-lg py-1 px-4 rounded-md focus:outline-none font-medium"
                type="text"
                id="cvvCode"
                name="cvvCode"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="cvvCode"
                component="div"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="py-2 px-10 bg-violet-900 text-xl rounded-md mx-1"
              type="button"
              onClick={onBack}
            >
              Back
            </button>

            <button
              className="py-2 px-8 bg-violet-900 text-xl rounded-md mx-1"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PaymentForm;
