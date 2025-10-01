"use client"

import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import "bootstrap/dist/css/bootstrap.min.css"
import "./global.css"
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  CheckCircle,
  ArrowRight,
  Baseline as ChartLine,
  Dumbbell,
  Code,
  Layers,
  Database,
  Wrench,
} from "lucide-react"
import { ArrowUp } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("");
   const [showScrollTop, setShowScrollTop] = useState(false) // <-- state for button visibility

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus("Sending...")

    emailjs
      .send(
        "service_yq8wmbr", // <-- replace with your Service ID
        "template_irfzg4w", // <-- replace with your Template ID
        formData,
        "xn6uVleMynDOc15KQ", // <-- replace with your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!")
          setFormData({ name: "", email: "", message: "" })
        },
        (error) => {
          setStatus("❌ Failed to send. Try again.")
          console.error(error)
        },
      )
  }

   useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Show "scroll to top" button after 300px scroll
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="portfolio">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top enhanced-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold gradient-text" href="#home">
            Satyam Khule
          </a>

          <button
            className={`custom-hamburger d-lg-none ${isMobileMenuOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            aria-controls="navbarNav"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["home", "about", "education", "experience", "projects", "skills", "contact"].map((section) => (
                <li className="nav-item" key={section}>
                  <button
                    className={`nav-link btn btn-link enhanced-nav-link ${activeSection === section ? "active" : ""}`}
                    onClick={() => scrollToSection(section)}
                  >
                    <span className="nav-text">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                    <span className="nav-indicator"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section bg-primary text-white">
        <div className="container">
          <div className="row align-items-center min-vh-100 hero-content">
            <div className="col-lg-8 mx-auto text-center">
              <div className="hero-avatar ">
                <div className="avatar-circle">
                  <span className="display-1 fw-bold">SK</span>
                </div>
              </div>
              <h1 className="display-3 fw-bold ">Satyam Khule</h1>
              <h2 className="h3  text-light">Full Stack Developer</h2>
              <p className="lead ">
                Passionate about building scalable web applications with React.js and Spring Boot
              </p>
              <div className="contact-info mb-4">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                      <span className="badge bg-light text-dark p-2">
                        <MapPin className="icon" size={16} /> Pune
                      </span>
                      <span className="badge bg-light text-dark p-2">
                        <Mail className="icon" size={16} /> satyamkhule179@gmail.com
                      </span>
                      <span className="badge bg-light text-dark p-2">
                        <Phone className="icon" size={16} /> 9322310934
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="btn btn-light btn-lg me-3" onClick={() => scrollToSection("projects")}>
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

      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-center mb-5">About Me</h2>
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <p className="lead text-muted">
                    Full Stack Developer with hands-on experience in building scalable and responsive web applications
                    using React.js for front-end development and Spring Boot with MySQL for backend services. Proficient
                    in designing and integrating RESTful APIs, implementing responsive UI/UX, and managing code
                    versioning with Git.
                  </p>
                  <p className="text-muted">
                    Strong foundation in Java, object-oriented programming, and Agile methodologies. Passionate about
                    delivering efficient solutions and continuously improving development skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                        <span className="badge bg-primary p-2">Dec 2020 – Jun 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title text-primary">Higher Secondary Certificate (HSC) in Science</h5>
                        <h6 className="card-subtitle mb-2 text-muted">D. K. More Janata Junior College</h6>
                        <p className="card-text">
                          <strong>Marks:</strong> 55.69%
                        </p>
                      </div>
                      <div className="col-md-4 text-md-end">
                        <span className="badge bg-primary p-2">Jun 2018 – Jun 2020</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title text-primary">Secondary School Certificate (SSC)</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Shri Janardhan Swami Madh.Vidyalaya Kolhewadi</h6>
                        <p className="card-text">
                          <strong>Marks:</strong> 71.80%
                        </p>
                      </div>
                      <div className="col-md-4 text-md-end">
                        <span className="badge bg-primary p-2">Jun 2017 – Mar 2018</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Experience</h2>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <div className="row mb-3">
                    <div className="col-md-8">
                      <h4 className="text-primary mb-1">Software Engineer Trainee (Intern)</h4>
                      <h5 className="text-muted mb-0">The Data Techlabs</h5>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <span className="badge bg-success p-2">Sep 2024 – Mar 2025</span>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <CheckCircle className="icon text-success" size={18} />
                      <span className="ms-2">
                        Developed and maintained front-end components using JavaScript and React, ensuring seamless user
                        interactions.
                      </span>
                    </li>
                    <li className="mb-2">
                      <CheckCircle className="icon text-success" size={18} />
                      <span className="ms-2">
                        Integrated RESTful APIs using Axios to enable real-time data updates, reducing data fetching
                        time by 15%.
                      </span>
                    </li>
                    <li className="mb-2">
                      <CheckCircle className="icon text-success" size={18} />
                      <span className="ms-2">
                        Collaborated with cross-functional teams to implement UI/UX improvements, increasing user
                        interaction by 30%.
                      </span>
                    </li>
                    <li>
                      <CheckCircle className="icon text-success" size={18} />
                      <span className="ms-2">
                        Contributed to Agile workflows, including sprint planning and code reviews, delivering projects
                        ahead of schedule.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    <ChartLine className="icon" size={20} />
                    <span className="ms-2">Employee Performance Management System (EPMS)</span>
                  </h5>
                  <p className="card-text">
                    Developed a web-based system to track and evaluate employee performance, including goal setting,
                    feedback, and performance reviews.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-1">
                      <ArrowRight className="icon text-primary" size={18} />
                      <span className="ms-2">
                        Implemented React for the front end and integrated REST APIs for real-time data synchronization.
                      </span>
                    </li>
                    <li>
                      <ArrowRight className="icon text-primary" size={18} />
                      <span className="ms-2">
                        Designed an intuitive dashboard for managers to monitor employee progress and generate
                        performance reports.
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
                    Created a user portal to schedule training sessions and access personalized fitness plans.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-1">
                      <ArrowRight className="icon text-primary" size={18} />
                      <span className="ms-2">
                        Built with React.js and integrated with Spring Boot APIs for dynamic content updates.
                      </span>
                    </li>
                    <li>
                      <ArrowRight className="icon text-primary" size={18} />
                      <span className="ms-2">
                        Managed backend logic and data storage using MySQL and ensured consistent data flow via REST
                        APIs.
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
                        <span className="badge bg-secondary m-1">JavaScript</span>
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
                        <span className="badge bg-secondary m-1">Spring Boot</span>
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

      <section id="contact" className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Get In Touch</h2>
              <p className="lead mb-4">
                I'm always interested in new opportunities and exciting projects. Let's connect!
              </p>

              <form onSubmit={sendEmail} className="bg-light text-dark p-4 rounded shadow">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>

                {status && <p className="mt-3">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

    <footer className="bg-dark text-white pt-5" role="contentinfo">
        <div className="container">
          <div className="row g-4">
            {/* Contact */}
            <div className="col-12 col-md-4">
              <div className="contact-item d-flex flex-column align-items-start text-start h-100">
                <h5 className="mb-3">Contact</h5>
                <div className="d-flex align-items-center mb-2">
                  <Mail className="icon text-primary me-2" aria-hidden="true" />
                  <a
                    href="mailto:satyamkhule179@gmail.com"
                    className="text-light text-decoration-none"
                    aria-label="Send an email to satyamkhule179@gmail.com"
                  >
                    satyamkhule179@gmail.com
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <Phone className="icon text-primary me-2" aria-hidden="true" />
                  <a
                    href="tel:+919322310934"
                    className="text-light text-decoration-none"
                    aria-label="Call phone number 9322310934"
                  >
                    +91 9322310934
                  </a>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <Linkedin className="icon text-primary me-2" aria-hidden="true" />
                  <a
                    href="https://linkedin.com/in/satyam-khule-965b12221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none"
                    aria-label="Open LinkedIn profile of Satyam Khule in a new tab"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column align-items-start text-start h-100">
                <h5 className="mb-3">Quick Links</h5>
                <ul className="footer-links">
                  <li>
                    <button
                      className="btn btn-link p-0 text-decoration-none text-light"
                      onClick={() => scrollToSection("about")}
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link p-0 text-decoration-none text-light"
                      onClick={() => scrollToSection("projects")}
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link p-0 text-decoration-none text-light"
                      onClick={() => scrollToSection("skills")}
                    >
                      Skills
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-link p-0 text-decoration-none text-light"
                      onClick={() => scrollToSection("contact")}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Location */}
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column align-items-start text-start h-100">
                <h5 className="mb-3">Location</h5>
                <p className="mb-2 d-flex align-items-center">
                  <MapPin className="icon text-primary me-2" aria-hidden="true" />
                  Pune, India
                </p>
                <p className="mb-0 text-white-50">Open to opportunities</p>
              </div>
            </div>
          </div>

          <hr className="mt-5 mb-3" style={{ borderColor: "rgba(255, 255, 255, 0.12)" }} />
          <p className="mb-0 text-center">© 2025 Satyam Khule. All rights reserved.</p>

          
        </div>
      </footer>

            {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      
    </div>
  )
}
