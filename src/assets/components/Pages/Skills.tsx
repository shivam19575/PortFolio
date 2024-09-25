import ProgressBars from "../ProgressBars";
import SkillsTherory from "../SkillsTherory";

const Skills = () => {
  return (
    <div className="skills_box">
      <div className="leftOneSkills">
        <SkillsTherory />
      </div>
      <div className="rightoneSkills">
        <ProgressBars />
      </div>
    </div>
  );
};

export default Skills;
