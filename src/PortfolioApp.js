import React, { useState } from 'react';
import './PortfolioApp.css';

const PortfolioApp = () => {
  const [activeSection, setActiveSection] = useState('home');

  const personalInfo = {
    name: "VENKATA RAMA RAO MALISETTI",
    title: "Tech Lead (Data) | GIS Specialist & Senior GIS Analyst",
    email: "ramu.malisetti@gmail.com",
    linkedin: "Venkata Rama Rao Malisetti",
    mobile: "+966503949027",
  };

  const careerObjective = {
    experience: "Over 18 years in geospatial analysis and GIS automation",
    expertise: "Python scripting, GeoAI solutions, and enterprise GIS workflows",
    goal: "Deliver impactful solutions using cutting-edge AI tools and spatial data integration",
    problemSolving: "Advanced analytical thinking and innovative approaches to complex spatial challenges"
  };

  const projects = [
    "MPDA (Makkah Province Development Authority, Saudi Arabia)",
    "ZATCA (Zakat, Tax, and Customs Authority, Saudi Arabia)",
    "Ministry of Tourism (Saudi Arabia)",
    "e-Pass (Department of Municipalities and Transport, Abu Dhabi)",
    "UMIS (Urban Management Information System, Afghanistan)",
    "MAF (Majid Al Futtaim)"
  ];

  const skills = {
    gisTools: ["ArcGIS Pro", "Enterprise", "Online", "Model Builder", "Revit", "FME", "AutoCAD", "ArcFM", "BIM", "QGIS", "Power-BI", "SQL Queries"],
    programming: ["Python for GIS automation", "geoprocessing", "data analysis", "workflow optimization"],
    geoAI: ["AI and machine learning", "land-use classification", "feature extraction", "predictive modeling"],
    utilityNetworks: ["Managing electrical and gas networks", "feeder tracing", "ArcFM configurations"],
    database: ["SQL Server", "Oracle"]
  };

  const experience = [
    { role: "Tech Lead (Data) & Senior GIS Analyst", company: "GPC East Pvt Ltd, Hyderabad", period: "August 2017 - Present" },
    { role: "Project Leader", company: "Avineon India Pvt Ltd, Hyderabad", period: "2015 - July 2017" },
    { role: "Team Leader", company: "Avineon India Pvt Ltd, Hyderabad", period: "2012 - 2015" },
    { role: "Associate GSS", company: "Avineon India Pvt Ltd, Hyderabad", period: "2006 - 2012" },
    { role: "CAD Engineer", company: "Graben Technology Pvt Ltd, Hyderabad", period: "2005 - 2006" }
  ];

  const education = [
    { degree: "Bachelor of Technology in Electrical & Electronics Engineering (Distance Education)", institution: "JNT University", period: "2006 - 2014" },
    { degree: "Diploma in Electrical & Electronics Engineering", institution: "M.B.T.S Govt Polytechnic College", period: "1999 - 2002" }
  ];

  return (
    <div className="portfolio-container">
      <header>
        <h1>{personalInfo.name}</h1>
        <nav>
          {['home', 'skills', 'experience', 'education', 'portfolio'].map(section => (
            <button
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {activeSection === 'home' && (
        <section className="home-section">
          <div className="profile-card">
          <img 
        className="profile-image" 
        src={`${process.env.PUBLIC_URL}/Images/Profile.jpg`} 
        alt="Profile" 
      />
            <h2>{personalInfo.name}</h2>
            <p>{personalInfo.title}</p>
            <p><strong>Email:</strong> {personalInfo.email}</p>
            <p><strong>LinkedIn:</strong> {personalInfo.linkedin}</p>
            <p><strong>Mobile:</strong> {personalInfo.mobile}</p>
          </div>

          <div className="career-objective">
            <h3>Career Objective</h3>
            <div className="objective-details">
              <p><strong>Experience:</strong> {careerObjective.experience}</p>
              <p><strong>Expertise:</strong> {careerObjective.expertise}</p>
              <p><strong>Goal:</strong> {careerObjective.goal}</p>
              <p><strong>Problem Solving:</strong> {careerObjective.problemSolving}</p>
            </div>
          </div>

          <div className="featured-projects">
            <h3>Featured Projects</h3>
            <ul>
              {projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
            <button onClick={() => setActiveSection('portfolio')}>View all projects →</button>
          </div>
        </section>
      )}

      {activeSection === 'skills' && (
        <section className="skills-section">
          <h3>Professional Skills</h3>
          <div className="skills-grid">
            {Object.entries(skills).map(([key, values]) => (
              <div key={key} className="skill-category">
                <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                <ul>{values.map(skill => <li key={skill}>{skill}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'experience' && (
        <section className="experience-section">
          <h3>Work Experience</h3>
          <ul className="experience-list">
            {experience.map((exp, index) => (
              <li key={index}>
                <h4>{exp.role}</h4>
                <p>{exp.company}</p>
                <span>{exp.period}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    {activeSection === 'education' && (
  <section className="education-section">
    <h2>Education & Certifications</h2>
    <div className="education-details">
      <h4>Bachelor of Technology in Electrical & Electronics Engineering (Distance Education)</h4>
      <p>JNT University, 2006 - 2014</p>

      <h4>Diploma in Electrical & Electronics Engineering</h4>
      <p>M.B.T.S Govt Polytechnic College, 1999 - 2002</p>

      <h3>Professional Certifications</h3>
      <ul>
        <li>Do It Yourself Geo Apps</li>
        <li>Earth Imagery at Work</li>
        <li>Going Places with Spatial Analysis</li>
        <li>Cartography</li>
        <li>Spatial Data Science: The New Frontier in Analytics</li>
      </ul>
    </div>
  </section>
)}
{activeSection === 'portfolio' && (
  <section className="portfolio-section">
    <h2>Portfolio Highlights</h2>
    <div className="portfolio-grid">
      {[
        { title: "Experience Builder - Dashboard", img: "Experience-Builder-Dashboard.jpg" },
        { title: "3D Data - Publish Revit Data capture", img: "3D-Data-Revit.jpg" },
        { title: "Road Network and Utility Network data", img: "Road-Network-Utility.jpg" },
        { title: "CAD - GIS Migration", img: "CAD-GIS-Migration.jpg" },
        { title: "Network Analyst -Find the nearest Facility", img: "Network-Analyst.jpg" },
        { title: "ArcGIS Dashboard", img: "ArcGIS-Dashboard.jpg" },
        { title: "ArcGIS Insights", img: "ArcGIS-Insights.jpg" },
        { title: "Map Services Publish & Geoprocessing Tools Publish", img: "Map-Services.jpg" },
        { title: "FME Workbench creation", img: "FME-Workbench.jpg" },
        { title: "Python using AI", img: "Python-AI.jpg" },
        { title: "Geo AI - Building Extraction", img: "GeoAI-Building-Extraction.jpg" }
      ].map((item, index) => (
        <div key={index} className="portfolio-card">
        <img src={`${process.env.PUBLIC_URL}/Images/${item.img}`} alt={item.title} />
        <h4>{item.title}</h4>
      </div>
      ))}
    </div>
  </section>
)}



      <footer>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioApp;
