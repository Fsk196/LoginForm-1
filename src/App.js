// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StepForm from "./pages/StepForm";

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-5 justify-center items-center h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white">
        <StepForm />
      </div>
    </Router>
  );
}

export default App;
