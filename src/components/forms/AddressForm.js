import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddressForm = ({ onNext, onBack, formData }) => {
  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    zipOrPostalCode: Yup.string().required("Zip or postal code is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  });
  console.log(onNext);

  return (
    <div className="border-2 p-2 sm:p-10 rounded-lg">
      <h2 className="text-4xl font-medium text-center">Address Form</h2>

      <Formik
        initialValues={{
          streetAddress: "",
          zipOrPostalCode: "",
          city: "",
          country: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => onNext(values)}
      >
        <Form>
          <div className="flex  flex-col sm:gap-4 gap-1 my-4">
            <label className="text-xl" htmlFor="streetAddress">
              Street Address:
            </label>
            <div>
              <Field
                className="border-2 text-black text-lg py-1 px-4 rounded-md focus:outline-none font-medium"
                type="text"
                id="streetAddress"
                name="streetAddress"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="streetAddress"
                component="div"
              />
            </div>
          </div>

          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-xl" htmlFor="zipOrPostalCode">
              Zip/Pincode:{" "}
            </label>
            <div>
              <Field
                className="border-2 text-black text-lg py-1 px-4 rounded-md focus:outline-none font-medium"
                type="text"
                id="zipOrPostalCode"
                name="zipOrPostalCode"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="zipOrPostalCode"
                component="div"
              />
            </div>
          </div>

          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-xl" htmlFor="city">
              City:{" "}
            </label>
            <div>
              <Field
                className="border-2 text-black text-lg py-1 px-4 rounded-md focus:outline-none font-medium"
                type="text"
                id="city"
                name="city"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="city"
                component="div"
              />
            </div>
          </div>

          <div className="flex flex-col sm:gap-4 gap-1 my-4">
            <label className="text-xl" htmlFor="country">
              Country:{" "}
            </label>
            <div>
              <Field
                className="border-2 text-black text-lg py-1 px-4 rounded-md focus:outline-none font-medium"
                type="text"
                id="country"
                name="country"
              />
              <ErrorMessage
                className="text-red-600 text-lg"
                name="country"
                component="div"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="py-2 px-10 bg-violet-900 text-xl rounded-md"
              type="button"
              onClick={onBack}
            >
              Back
            </button>

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

export default AddressForm;
