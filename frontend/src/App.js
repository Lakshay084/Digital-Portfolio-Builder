import React, { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import TemplateList from "./components/TemplateList";
import TemplateDetails from "./components/TemplateDetails";

function App() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch("/api/templates/")
      .then((response) => response.json())
      .then((data) => setTemplates(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const handleShareLink = (slug) => {
    const shareableLink = `${window.location.origin}/templates/${slug}`;
    navigator.clipboard.writeText(shareableLink).then(() => {
      alert("Shareable link copied to clipboard!");
    });
  };

  return (
    <div>
      <h1 className="text-center my-4">Digital Portfolio Builder</h1>
      <Routes>
        <Route
          path="/"
          element={
            <TemplateList
              templates={templates}
              handleShareLink={handleShareLink}
            />
          }
        />
        <Route path="/templates/:slug" element={<TemplateDetails />} />
      </Routes>
    </div>
  );
}

export default App;
