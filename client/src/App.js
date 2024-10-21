import React, { useState, useEffect } from "react";

// Import the BrowserRouter, Route and Switch components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import the LandingPage component
import LandingPage from "./components/LandingPage";

// Import the ExhibitionPage component (TODO: Create this component)
import ExhibitionPage from "./components/ExhibitionPage";

// Use the LandingPage component in your JSX
<LandingPage />;

// Mock data to simulate the data fetched from the server
const mockData = [
  { id: 1, name: "Footpath 1", description: "Description for Footpath 1" },
  { id: 2, name: "Footpath 2", description: "Description for Footpath 2" },
];

function App() {
  const [data, setData] = useState({ members: [] });

  useEffect(() => {
    fetch("/members") // Adjust the endpoint based on your Flask server
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <Router>
      <Routes>
        {/* <Route
          path="/"
          element={
            typeof data.members === "undefined" ? (
              <p>Loading...</p>
            ) : (
              <LandingPage footpaths={data.members} /> // Pass the fetched data to LandingPage
            )
          }
        /> */}
        <Route path="/" element={<LandingPage footpaths={mockData} />} />
        <Route path="/exhibitions/:id" element={<ExhibitionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
