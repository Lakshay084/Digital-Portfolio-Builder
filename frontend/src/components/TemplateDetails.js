import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GistEmbed from "./GistEmbed";

function TemplateDetails() {
  const { slug } = useParams(); // Get the slug from the URL
  const [template, setTemplate] = useState(null); // State to hold the template data

  // Fetch template data when the component mounts
  useEffect(() => {
    fetch(`/api/templates/${slug}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched template data:", data); // Debug log
        setTemplate(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, [slug]);


  // Display loading message while fetching data
  if (!template) return <div>Loading...</div>;

  return (
    <div className="container my-4">
      <h2>{template.name}</h2>
      <p>{template.description}</p>

      {/* Thumbnail */}
      <img
        src={template.thumbnail_url}
        alt={template.name}
        className="img-fluid"
        style={{ maxWidth: "500px" }}
      />

      {/* Multimedia Section */}
      {template.multimedia_url && (
        <div className="mt-4">
          <h4>Multimedia</h4>
          <iframe
            width="560"
            height="315"
            src={template.multimedia_url}
            title="YouTube video player"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Skills Section */}
      {template.skills && (
        <div className="mt-4">
          <h4>Skills</h4>
          <ul>
            {template.skills.split(",").map((skill, index) => (
              <li key={index}>{skill.trim()}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Certifications Section */}
      {template.certifications && (
        <div className="mt-4">
          <h4>Certifications</h4>
          <ul>
            {template.certifications.map((cert, index) => (
              <li key={index}>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Code Integration */}
      {template.code_url && (
        <div className="mt-4">
          <h4>Code Integration</h4>
          {template.code_url.includes("gist.github.com") ? (
            <GistEmbed gistUrl={template.code_url} />
          ) : (
            <a
              href={template.code_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              View GitHub Repository
            </a>
          )}
        </div>
      )}

      {/* Shareable Link Section */}
      <div className="mt-4">
        <h4>Shareable Link</h4>
        <p>{window.location.href}</p>
      </div>
    </div>
  );
}

export default TemplateDetails;
