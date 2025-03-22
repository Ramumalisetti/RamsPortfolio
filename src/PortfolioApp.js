import React, { useState } from 'react';
import './PortfolioApp.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const PortfolioApp = () => {
 
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0) 

  const personalInfo = {
    name: "VENKATA RAMA RAO MALISETTI",
    title: "Tech Lead (Data) | GIS Specialist & Senior GIS Analyst",
    email: "ramu.malisetti@gmail.com",
    linkedin: {
      url: "https://www.linkedin.com/in/venkata-rama-rao-malisetti-26a27036",
      display: "Venkata Rama Rao Malisetti"
    }
  };
  

  const careerObjective = {
    experience: "Over 18 years in geospatial analysis and GIS automation",
    expertise: "Python scripting, GeoAI solutions, and enterprise GIS workflows",
    goal: "Deliver impactful solutions using cutting-edge AI tools and spatial data integration",
    problemSolving: "Advanced analytical thinking and innovative approaches to complex spatial challenges"
  };

  // const projects = [
  //   "MPDA (Makkah Province Development Authority, Saudi Arabia)",
  //   "ZATCA (Zakat, Tax, and Customs Authority, Saudi Arabia)",
  //   "Ministry of Tourism (Saudi Arabia)",
  //   "e-Pass (Department of Municipalities and Transport, Abu Dhabi)",
  //   "UMIS (Urban Management Information System, Afghanistan)",
  //   "MAF (Majid Al Futtaim)"
  // ];
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    "MPDA (Makkah Province Development Authority, Saudi Arabia)",
    "ZATCA (Zakat, Tax, and Customs Authority, Saudi Arabia)",
    "Ministry of Tourism (Saudi Arabia)",
    "e-Pass (Department of Municipalities and Transport, Abu Dhabi)",
    "UMIS (Urban Management Information System, Afghanistan)",
    "MAF (Majid Al Futtaim)",
    "Al HosnGas (Al HosnGas, Abu Dhabi)",
    "MJEC (Majan Electricity Company Muscat, Oman)",
    "SoCal Gas (Southern California Gas Company, US)",
    "PEPCO (Potomac Electric Power Company, US)"
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
  const portfolioItems = [
    { title: "Experience Builder - Dashboard", img: "Experience-Builder-Dashboard.jpg" },
    { title: "3D Data - Publish Revit Data capture", img: "3D-Data-Revit.jpg" },
    { title: "Road Network and Utility Network data", img: "Road-Network-Utility.jpg" },
    { title: "CAD – GIS Migration", img: "CAD-GIS-Migration.jpg" },
    { title: "Network Analyst – Find the nearest Facility", img: "Network-Analyst.jpg" },
    { title: "ArcGIS Dashboard", img: "ArcGIS-Dashboard.jpg" },
    { title: "ArcGIS Insights", img: "ArcGIS-Insights.jpg" },
    { title: "Map Services Publish & Geoprocessing Tools Publish", img: "Map-Services.jpg" },
    { title: "FME Workbench creation", img: "FME-Workbench.jpg" },
    { title: "Python using AI", img: "Python-AI.jpg" },
    { title: "Geo AI - Building Extraction", img: "GeoAI-Building-Extraction.jpg" }
  ];


  return (
    <div className="portfolio-container">
      <header>
        <h1>GIS Specialist & Tech Lead Portfolio</h1>
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

      {/* {activeSection === 'home' && (
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
      )} */}
{activeSection === 'home' && (
  <section className="home-section">
  <div className="profile-container">
    <img 
      className="profile-img" 
      src={`${process.env.PUBLIC_URL}/Images/Profile.jpg`} 
      alt="Profile"
    />
    <div className="profile-info">
    <h1>VENKATA RAMA RAO MALISETTI</h1>
    <h3>Tech Lead (Data) | GIS Specialist & Senior GIS Analyst</h3>
      <div className="contact-info">
      <p><strong>Email:</strong> <a href="mailto:ramu.malisetti@gmail.com">ramu.malisetti@gmail.com</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/venkata-rama-rao-malisetti-26a27036" target="_blank" rel="noopener noreferrer">Venkata Rama Rao Malisetti</a></p>
    </div>
      
    </div>
  </div>

  <div className="career-projects-container">
    <div className="career-objective">
      <h3>Career Objective</h3>
      <div className="objective-box">
        <div className="objective-item experience">
          <h4>Experience</h4>
          <p>{careerObjective.experience}</p>
        </div>
        <div className="objective-item expertise">
          <h4>Expertise</h4>
          <p>{careerObjective.expertise}</p>
        </div>
        <div className="objective-item goal">
          <h4>Goal</h4>
          <p>{careerObjective.goal}</p>
        </div>
        <div className="objective-item problem-solving">
          <h4>Problem Solving</h4>
          <p>{careerObjective.problemSolving}</p>
        </div>
      </div>
    </div>

    <div className="featured-projects">
      <h3>Featured Projects</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      {/* <button onClick={() => setActiveSection('portfolio')}>View all projects →</button> */}
    </div>
  </div>
</section>

)}

      {/* {activeSection === 'skills' && (
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
      )} */}
{activeSection === 'skills' && (
  <section className="skills-section">
    <h2>Professional Skills</h2>

    <div className="skills-category">
      <h3>GIS Tools</h3>
      <div className="skills-tags">
        {skills.gisTools.map(skill => <span key={skill} className="tag gis">{skill}</span>)}
      </div>
    </div>

    <div className="skills-category">
      <h3>Programming</h3>
      <div className="skills-tags">
        {skills.programming.map(skill => <span key={skill} className="tag programming">{skill}</span>)}
      </div>
    </div>

    <div className="skills-category">
      <h3>GeoAI</h3>
      <div className="skills-tags">
        {skills.geoAI.map(skill => <span key={skill} className="tag geoai">{skill}</span>)}
      </div>
    </div>

    <div className="skills-category">
      <h3>Utility Networks</h3>
      <div className="skills-tags">
        {skills.utilityNetworks.map(skill => <span key={skill} className="tag utility">{skill}</span>)}
      </div>
    </div>

    <div className="skills-category">
      <h3>Database</h3>
      <div className="skills-tags">
        {skills.database.map(skill => <span key={skill} className="tag database">{skill}</span>)}
      </div>
    </div>

    <div className="certifications">
      <h3>Certifications</h3>
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
      {education.map((edu, index) => (
        <div key={index} className="education-card">
          <h4>{edu.degree}</h4>
          <p>{edu.institution}, {edu.period}</p>
        </div>
      ))}

      <div className="certifications">
        <h3>Professional Certifications</h3>
        <ul>
          <li>Do It Yourself Geo Apps</li>
          <li>Earth Imagery at Work</li>
          <li>Going Places with Spatial Analysis</li>
          <li>Cartography</li>
          <li>Spatial Data Science: The New Frontier in Analytics</li>
        </ul>
      </div>
    </div>
  </section>
)}


{/* {activeSection === 'portfolio' && (
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
)} */}
{activeSection === 'portfolio' && (
        <section className="portfolio-section">
          <h2>Portfolio Highlights</h2>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="portfolio-card"
                onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
              >
                <img src={`${process.env.PUBLIC_URL}/Images/${item.img}`} alt={item.title} />
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>

          {isOpen && (
            <Lightbox
              mainSrc={`${process.env.PUBLIC_URL}/Images/${portfolioItems[photoIndex].img}`}
              nextSrc={`${process.env.PUBLIC_URL}/Images/${portfolioItems[(photoIndex + 1) % portfolioItems.length].img}`}
              prevSrc={`${process.env.PUBLIC_URL}/Images/${portfolioItems[(photoIndex + portfolioItems.length - 1) % portfolioItems.length].img}`}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + portfolioItems.length - 1) % portfolioItems.length)}
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % portfolioItems.length)}
            />
          )}
        </section>
      )}


      <footer>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioApp;
