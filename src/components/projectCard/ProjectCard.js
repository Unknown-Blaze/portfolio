import React from "react";
import Button from "../button/Button";
import "./ProjectCard.css";

export default function ProjectCard({ project, theme }) {
  // Gracefully handle missing images
  let projectImage = null;
  if (project.image) {
    try {
      projectImage = require(`../../assets/images/${project.image}`);
    } catch (e) {
      console.error("Could not find image:", project.image);
      projectImage = null;
    }
  }

  const validLinks =
    project.footerLinks?.filter((link) => link.url && link.url !== "#") || [];

  return (
    // 1. ADDED BORDER STYLE HERE
    <div
      className="project-card"
      style={{
        backgroundColor: theme.card_color,
        border: `1px solid ${theme.headerColor}`,
      }}
    >
      {projectImage && (
        <div className="project-card-image-container">
          <img
            src={projectImage}
            alt={project.name}
            className="project-card-image"
          />
        </div>
      )}
      <div className="project-card-body">
        <h3 className="project-card-title" style={{ color: theme.text }}>
          {project.name}
        </h3>
        <h4
          className="project-card-subtitle"
          style={{ color: theme.secondaryText }}
        >
          {project.subtitle}
        </h4>
        {/* 2. CHANGED FROM A LIST TO A SINGLE PARAGRAPH */}
        <p className="project-card-description" style={{ color: theme.text }}>
          {project.description}
        </p>
      </div>
      {validLinks.length > 0 && (
        <div
          className="project-card-footer"
          style={{ borderTop: `1px solid ${theme.headerColor}` }}
        >
          {validLinks.map((link, index) => (
            <Button
              key={index}
              text={link.name}
              href={link.url}
              newTab={true}
              theme={theme}
            />
          ))}
        </div>
      )}
    </div>
  );
}
