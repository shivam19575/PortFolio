import { useEffect } from "react";
import "./ProgressBars.css"; // Assuming you move styles to a CSS file

const ProgressBars = () => {

  
  

  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar div");
    progressBars.forEach((bar) => {
      const barElement = bar as HTMLElement; // Casting it  to HTMLElement
      const percentage = barElement.getAttribute("data-percent");
      if (percentage) {
        barElement.style.width = percentage + "%";
      }
    });
  }, []);

  return (
    <div>
      <div className="skill-container">
        <div className="skill-title">HTML</div>
        <div className="progress-bar">
          <div data-percent="95">95%</div>
        </div>
      </div>

      <div className="skill-container">
        <div className="skill-title">CSS</div>
        <div className="progress-bar">
          <div data-percent="90">90%</div>
        </div>
      </div>

      <div className="skill-container">
        <div className="skill-title">JavaScript</div>
        <div className="progress-bar">
          <div data-percent="85">85%</div>
        </div>
      </div>

      <div className="skill-container">
        <div className="skill-title">React</div>
        <div className="progress-bar">
          <div data-percent="80">80%</div>
        </div>
      </div>

      <div className="skill-container">
        <div className="skill-title">Node.js</div>
        <div className="progress-bar">
          <div data-percent="75">75%</div>
        </div>
      </div>

      <div className="skill-container">
        <div className="skill-title">Express</div>
        <div className="progress-bar">
          <div data-percent="70">70%</div>
        </div>
      </div>

      <div className="skill-container">
        <div className="skill-title">MongoDB</div>
        <div className="progress-bar">
          <div data-percent="65">65%</div>
        </div>
      </div>

      <div className="skill-container">
        <div className="skill-title">C & C++</div>
        <div className="progress-bar">
          <div data-percent="90">90%</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
