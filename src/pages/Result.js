import React from "react";

const Result = ({ formData }) => {
  return (
    <div className="border-2 py-6 px-10 rounded-lg bg-slate-200 text-black drop-shadow-xl">
      <h2 className="text-4xl text-center my-4 font-medium text-violet-700">
        Form Submission Successful!
      </h2>
      <div className="my-4 border-t-2 border-violet-300 py-4">
        <h2 className="text-3xl font-medium text-violet-400">
          Personal Details:
        </h2>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">First Name:</span> {formData.firstName}
        </p>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">Last Name:</span> {formData.lastName}
        </p>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">Date of Birth:</span>{" "}
          {formData.dateOfBirth}
        </p>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">Email:</span> {formData.email}
        </p>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">Mobile Number:</span>{" "}
          {formData.mobileNumber}
        </p>
      </div>

      <div className="my-4 border-t-2 border-violet-300 py-4">
        <h2 className="text-3xl font-medium text-violet-400">
          Address Details
        </h2>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">Street Address:</span>{" "}
          {formData.streetAddress}
        </p>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">Zip/Postal Code:</span>{" "}
          {formData.zipOrPostalCode}
        </p>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">City:</span> {formData.city}
        </p>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">Country:</span> {formData.country}
        </p>
      </div>

      <div className="my-4 border-y-2 border-violet-300 py-4">
        <h2 className="text-3xl font-medium text-violet-400">
          Payment Information
        </h2>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">Payment Amount:</span>{" "}
          {formData.paymentAmount}
        </p>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">Cardholder name:</span>{" "}
          {formData.cardHolderName}
        </p>
        <p className="text-lg sm:text-xl">
          <span className="font-medium">Expiry Date:</span>{" "}
          {formData.expiryDate}
        </p>
      </div>
      <div className="flex justify-center">
        <button className="text-xl px-6 py-2 bg-violet-600 text-white rounded-md">
          <a href="/">Home</a>
        </button>
      </div>
    </div>
  );
};

export default Result;
