import React from "react";
import { Link } from "react-router-dom";

function TemplateList({ templates, handleShareLink }) {
  return (
    <div className="container">
      <h2 className="my-4">Available Portfolio Templates</h2>
      <div className="row">
        {templates.map((template) => (
          <div className="col-md-4 mb-4" key={template.id}>
            <div className="card h-100">
              <img
                src={template.thumbnail_url}
                className="card-img-top"
                alt={template.name}
              />
              <div className="card-body">
                <h5 className="card-title">{template.name}</h5>
                <p className="card-text">{template.description}</p>
                <Link to={`/templates/${template.slug}`} className="btn btn-primary">
                  View Details
                </Link>
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => handleShareLink(template.slug)}
                >
                  Share Link
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateList;
