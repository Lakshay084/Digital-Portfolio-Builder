import React, { useEffect, useRef } from "react";

const GistEmbed = ({ gistUrl }) => {
  const gistRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${gistUrl}.js`; // Gist embed script URL
    script.async = true;
    script.crossOrigin = "anonymous"; // Prevent CSP issues
    gistRef.current.innerHTML = ""; // Clear previous Gist (if any)
    gistRef.current.appendChild(script);
  }, [gistUrl]);

  return (
    <div>
      <div ref={gistRef}></div>
    </div>
  );
};

export default GistEmbed;
