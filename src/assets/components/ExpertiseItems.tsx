import { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { data } from "./lib/Data";

// Defining the interface for ProjectItem in the same file
interface ProjectItem {
  name: string;
  para2: string;
  link: string;
  image: string;
  time:string;
  // Adding other properties as needed (para1, para3, etc.)
}

const ExpertiseItems = () => {
  const [project, setProject] = useState<ProjectItem[]>([]);

  console.log(project);

  useEffect(() => {
    setProject(data);
  }, []);

  return (
    <div className="coursesItemsBox">
      {project.map((elem: ProjectItem) => (
        <div className="itemsOneBox" key={elem.name}>
          <div className="card-body">
            <div className="cardBodyData">
              <h2 className="title text-blue-700">{elem.name}</h2>
              <p className="text-base text-blue-400">{elem.para2}</p>
              <h2>Status:{elem.time}</h2>
            </div>
            <div className="btnCont">
              <a className="btnApply" href={elem.link} target="_blank">
                live link
                <IoIosArrowDropleftCircle className="insideIconBtn" />
              </a>
            </div>
          </div>
          <div className="imageboxCo">
            <img src={elem.image} alt="courses" className="imgCour" />
          </div>
          <div className="dataCourses text-blue-900 font-bold">{elem.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseItems;
