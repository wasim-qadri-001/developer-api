import { useState, useEffect } from "react";
import api from "./api";

import DeveloperForm from "./components/DeveloperForm";
import DeveloperList from "./components/DeveloperList";
import "./App.css";

function App() {
  const [developers, setDevelopers] = useState([]);

  // Load developers on mount
  useEffect(() => {
    api.get("").then((res) => setDevelopers(res.data));
  }, []);

  // Add new developer handler
  const handleAddDeveloper = (newDev) => {
    setDevelopers((prev) => [...prev, newDev]);
  };

  return (
    <div className="app-container">
      <h1 className="main-title">Developer Directory</h1>
      <div className="content-wrapper" >
        <DeveloperForm onAdd={handleAddDeveloper} />

        <DeveloperList developers={developers} setDevelopers={setDevelopers} />
      </div>
    </div>
  );
}

export default App;
