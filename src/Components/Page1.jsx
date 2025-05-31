
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/global.css";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  CheckCircle,
  ArrowRight,
  LineChartIcon as ChartLine,
  Dumbbell,
  Code,
  Layers,
  Database,
  Wrench,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            Satyam Khule
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                "home",
                "about",
                "education",
                "experience",
                "projects",
                "skills",
                "contact",
              ].map((section) => (
                <li className="nav-item" key={section}>
                  <button
                    className={`nav-link btn btn-link ${
                      activeSection === section ? "active" : ""
                    }`}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section bg-primary text-white">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <div className="hero-avatar mb-4">
                <div className="avatar-circle">
                  <span className="display-1 fw-bold">SK</span>
                </div>
              </div>
              <h1 className="display-3 fw-bold mb-3">Satyam Khule</h1>
              <h2 className="h3 mb-4 text-light">Full Stack Developer</h2>
              <p className="lead mb-4">
                Passionate about building scalable web applications with
                React.js and Spring Boot
              </p>
              <div className="contact-info mb-4">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                      <span className="badge bg-light text-dark p-2">
                        <MapPin className="icon" size={16} /> Pune
                      </span>
                      <span className="badge bg-light text-dark p-2">
                        <Mail className="icon" size={16} />{" "}
                        satyamkhule179@gmail.com
                      </span>
                      <span className="badge bg-light text-dark p-2">
                        <Phone className="icon" size={16} /> 9322310934
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-buttons">
                <button
                  className="btn btn-light btn-lg me-3"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </button>
                <a
                  href="https://linkedin.com/in/satyam-khule-965b12221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-lg"
                >
                  <Linkedin className="icon" size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-center mb-5">About Me</h2>
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <p className="lead text-muted">
                    Full Stack Developer with hands-on experience in building
                    scalable and responsive web applications using React.js for
                    front-end development and Spring Boot with MySQL for backend
                    services. Proficient in designing and integrating RESTful
                    APIs, implementing responsive UI/UX, and managing code
                    versioning with Git.
                  </p>
                  <p className="text-muted">
                    Strong foundation in Java, object-oriented programming, and
                    Agile methodologies. Passionate about delivering efficient
                    solutions and continuously improving development skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Education</h2>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="timeline">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title text-primary">
                          Bachelor of Engineering (B.E.) in Computer Engineering
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          Samarth Group of Institutions College of Engineering
                        </h6>
                        <p className="card-text">
                          <strong>CGPA:</strong> 7.84
                        </p>
                      </div>
                      <div className="col-md-4 text-md-end">
                        <span className="badge bg-primary p-2">
                          Dec 2020 – Jun 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title text-primary">
                          Higher Secondary Certificate (HSC) in Science
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          D. K. More Janata Junior College
                        </h6>
                        <p className="card-text">
                          <strong>Marks:</strong> 55.69%
                        </p>
                      </div>
                      <div className="col-md-4 text-md-end">
                        <span className="badge bg-primary p-2">
                          Jun 2018 – Jun 2020
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title text-primary">
                          Secondary School Certificate (SSC)
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          Shri Janardhan Swami Madh.Vidyalaya Kolhewadi
                        </h6>
                        <p className="card-text">
                          <strong>Marks:</strong> 71.80%
                        </p>
                      </div>
                      <div className="col-md-4 text-md-end">
                        <span className="badge bg-primary p-2">
                          Jun 2017 – Mar 2018
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Experience</h2>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <div className="row mb-3">
                    <div className="col-md-8">
                      <h4 className="text-primary mb-1">
                        Software Engineer Trainee (Intern)
                      </h4>
                      <h5 className="text-muted mb-0">The Data Techlabs</h5>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <span className="badge bg-success p-2">
                        Sep 2024 – Mar 2025
                      </span>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <CheckCircle className="icon text-success" size={18} />
                      <span className="ms-2">
                        Developed and maintained front-end components using
                        JavaScript and React, ensuring seamless user
                        interactions.
                      </span>
                    </li>
                    <li className="mb-2">
                      <CheckCircle className="icon text-success" size={18} />
                      <span className="ms-2">
                        Integrated RESTful APIs using Axios to enable real-time
                        data updates, reducing data fetching time by 15%.
                      </span>
                    </li>
                    <li className="mb-2">
                      <CheckCircle className="icon text-success" size={18} />
                      <span className="ms-2">
                        Collaborated with cross-functional teams to implement
                        UI/UX improvements, increasing user interaction by 30%.
                      </span>
                    </li>
                    <li>
                      <CheckCircle className="icon text-success" size={18} />
                      <span className="ms-2">
                        Contributed to Agile workflows, including sprint
                        planning and code reviews, delivering projects ahead of
                        schedule.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <ChartLine className="icon" size={20} />
                    <span className="ms-2">
                      Employee Performance Management System (EPMS)
                    </span>
                  </h5>
                  <p className="card-text">
                    Developed a web-based system to track and evaluate employee
                    performance, including goal setting, feedback, and
                    performance reviews.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-1">
                      <ArrowRight className="icon text-primary" size={18} />
                      <span className="ms-2">
                        Implemented React for the front end and integrated REST
                        APIs for real-time data synchronization.
                      </span>
                    </li>
                    <li>
                      <ArrowRight className="icon text-primary" size={18} />
                      <span className="ms-2">
                        Designed an intuitive dashboard for managers to monitor
                        employee progress and generate performance reports.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <span className="badge bg-primary me-1">React.js</span>
                    <span className="badge bg-primary me-1">REST APIs</span>
                    <span className="badge bg-primary">Dashboard</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <Dumbbell className="icon" size={20} />
                    <span className="ms-2">Gym Management System</span>
                  </h5>
                  <p className="card-text">
                    Created a user portal to schedule training sessions and
                    access personalized fitness plans.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-1">
                      <ArrowRight className="icon text-primary" size={18} />
                      <span className="ms-2">
                        Built with React.js and integrated with Spring Boot APIs
                        for dynamic content updates.
                      </span>
                    </li>
                    <li>
                      <ArrowRight className="icon text-primary" size={18} />
                      <span className="ms-2">
                        Managed backend logic and data storage using MySQL and
                        ensured consistent data flow via REST APIs.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <span className="badge bg-primary me-1">React.js</span>
                    <span className="badge bg-primary me-1">Spring Boot</span>
                    <span className="badge bg-primary">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Technologies & Skills</h2>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row">
                <div className="col-md-3 mb-4">
                  <div className="card text-center h-100 shadow-sm">
                    <div className="card-body">
                      <Code className="icon-xxl text-primary" />
                      <h5 className="card-title">Languages</h5>
                      <div className="skill-tags">
                        <span className="badge bg-secondary m-1">Java</span>
                        <span className="badge bg-secondary m-1">
                          JavaScript
                        </span>
                        <span className="badge bg-secondary m-1">HTML</span>
                        <span className="badge bg-secondary m-1">CSS</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-4">
                  <div className="card text-center h-100 shadow-sm">
                    <div className="card-body">
                      <Layers className="icon-xxl text-primary" />
                      <h5 className="card-title">Frameworks</h5>
                      <div className="skill-tags">
                        <span className="badge bg-secondary m-1">
                          Spring Boot
                        </span>
                        <span className="badge bg-secondary m-1">React.js</span>
                        <span className="badge bg-secondary m-1">Redux</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-4">
                  <div className="card text-center h-100 shadow-sm">
                    <div className="card-body">
                      <Database className="icon-xxl text-primary" />
                      <h5 className="card-title">Database</h5>
                      <div className="skill-tags">
                        <span className="badge bg-secondary m-1">MySQL</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 mb-4">
                  <div className="card text-center h-100 shadow-sm">
                    <div className="card-body">
                      <Wrench className="icon-xxl text-primary" />
                      <h5 className="card-title">Tools</h5>
                      <div className="skill-tags">
                        <span className="badge bg-secondary m-1">Git</span>
                        <span className="badge bg-secondary m-1">GitHub</span>
                        <span className="badge bg-secondary m-1">Postman</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Get In Touch</h2>
              <p className="lead mb-4">
                I'm always interested in new opportunities and exciting
                projects. Let's connect!
              </p>
              <div className="row justify-content-center">
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <Mail className="icon-xxl text-primary" />
                    <h5>Email</h5>
                    <a
                      href="mailto:satyamkhule179@gmail.com"
                      className="text-light"
                    >
                      satyamkhule179@gmail.com
                    </a>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <Phone className="icon-xxl text-primary" />
                    <h5>Phone</h5>
                    <a href="tel:+919322310934" className="text-light">
                      +91 9322310934
                    </a>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="contact-item">
                    <Linkedin className="icon-xxl text-primary" />
                    <h5>LinkedIn</h5>
                    <a
                      href="https://linkedin.com/in/satyam-khule-965b12221"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">© 2024 Satyam Khule. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
