import '../Styles/Homepage.css';
import { Link } from 'react-router-dom';
import profileImage from '../Assets/me.jpg';

const Homepage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image-container">
            <img
              src={profileImage}
              alt="Prakash Mishra"
              className="hero-image"
            />
          </div>
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Prakash Mishra</span>
            </h1>
            <p className="hero-subtitle">
              A passionate <span className="highlight">Frontend Developer</span> specializing in the
              <span className="highlight"> MERN Stack</span>.
            </p>
            <a href="../Myresume.pdf" className="cta-button" download="Prakash_Mishra_Resume.pdf">Download My Resume</a>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="qualifications" id="qualifications">
        <h2>Qualifications</h2>
        <div className="qualification-list">
          <div className="qualification-item">
            <h3>School</h3>
            <p>Shambhu Dayal Inter College, 2019 - 2023</p>
          </div>
          <div className="qualification-item">
            <h3>College</h3>
            <p>KCC Institutes, BCA (2023 - 2026)</p>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="internships" id="internships">
        <h2>Internship Experience</h2>
        <div className="internship-list">
          <div className="internship-item">
            <h3>Frontend Developer Intern</h3>
            <p>None</p>
          </div>
          <div className="internship-item">
            <h3>Web Development Intern</h3>
            <p>None</p>
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
     

      <div className="about-container">
        {/* Introduction Section */}
        <h2>About Me</h2>
        <section className="about-intro">
          <p>
            Hi, I’m <span className="highlight">Prakash Mishra</span>, a passionate Frontend Developer specializing in creating visually stunning and highly interactive web applications. I have experience working with React.js, JavaScript, CSS, and the MERN stack, bringing modern and responsive designs to life.

            I love crafting seamless user experiences with animations, responsiveness, and clean UI/UX. Currently, I'm working on e-commerce platforms, product pages, and interactive web applications to enhance my skills.

            I’m always eager to learn new technologies and collaborate on exciting projects. Let's build something amazing together! 
          </p>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <h2>My Skills</h2>
          <div className="skills-list">
            <div className="skill-item">HTML5</div>
            <div className="skill-item">CSS3</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">React.js</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">Git & GitHub</div>
            <div className="skill-item">Bootstrap</div>
            <div className="skill-item">Figma</div>
          </div>
        </section>

           <section className="tech-stack">
        <h2>Tools & Technologies</h2>
        <div className="tech-list">
          <div className="tech-item">VS Code</div>
          <div className="tech-item">Figma</div>
          <div className="tech-item">Git & GitHub</div>
          <div className="tech-item">Postman</div>
          <div className="tech-item">Netlify</div>
          <div className="tech-item">Render</div>
        </div>
      </section>

        {/* Timeline / Journey Section */}
   <section class="journey-timeline">
  <h2>My Frontend Journey</h2>
  <div class="timeline">
    <div class="timeline-item left">
      <div class="content">
        <span class="dot"></span>
        <h3>Getting Started</h3>
        <p>Third-year engineering curiosity led me to HTML, CSS & JavaScript—building the foundations and joining coding communities.</p>
      </div>
    </div>
    <div class="timeline-item right">
      <div class="content">
        <span class="dot"></span>
        <h3>Projects & Practice</h3>
        <p>Developed small projects and apps, tackling responsive layouts and solving real-world problems at hackathons.</p>
      </div>
    </div>
    <div class="timeline-item left">
      <div class="content">
        <span class="dot"></span>
        <h3>Growth & Challenges</h3>
        <p>Balanced academics and coding, learning from collaborations, and sharpening design skills in the process.</p>
      </div>
    </div>
    <div class="timeline-item right">
      <div class="content">
        <span class="dot"></span>
        <h3>What's Next?</h3>
        <p>Eager to master advanced frameworks, join open source, and seek internships for deeper frontend expertise.</p>
      </div>
    </div>
  </div>
</section>
 
{/* project section  */}

 <div className="navigation-row">
      <p className="nav-text">Tap the button to explore my projects</p>
      <Link to="/projects" className="btn-nav">
        View Projects <span className="btn-arrow">→</span>
      </Link>
    </div>


        {/* Fun Facts Section */}
        <section className="fun-facts">
          <h2>Fun Facts</h2>
          <p>🎮 Gamer at heart | 💻 Code + Coffee | ✈️ Dreaming to work with a global team</p>
          <p>🌍 Open to remote opportunities | 📚 Always learning new tech</p>

           <section className="cta">
          <button onClick={() => window.location.href = "/contact"}>Let's Work Together</button>
        </section>
        </section>

        {/* CTA */}
       
      </div>

     
    </div>
  );
};

export default Homepage;
