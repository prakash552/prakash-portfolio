import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Introduction Section */}
      <section className="about-intro">
        <h2>About Me</h2>
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

      {/* Timeline / Journey Section */}
      <section className="journey">
        <h2>My Journey</h2>
        <ul>
          <li>Started Web Development in 2023</li>
          <li> Currently building real-world e-commerce & product-based Web</li>
          <li> Passionate about creating interactive and responsive web applications</li>
          <li> Always exploring new technologies and frameworks</li>
        </ul>
      </section>

      {/* Fun Facts Section */}
      <section className="fun-facts">
        <h2>Fun Facts</h2>
        <p>🎮 Gamer at heart | 💻 Code + Coffee  | ✈️ Dreaming to work with a global team   </p>
        <p>🌍 Open to remote opportunities | 📚 Always learning new tech</p>
        
      </section>

      {/* CTA */}
      <section className="cta">
        <button onClick={() => window.location.href = "/contact"}>Let's Work Together</button>
      </section>
    </div>
  );
};

export default About;
