import { IoIosPeople } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";

const LastAboutPort = () => {
  return (
    <div className="lastAboutCont">
      <div className="floatBoxPort"></div>
      <img
        src="images/collageAboutInside.png"
        alt="insider"
        className=" Right"
      />
      <div className="leftPort">
        <img src="images/aboutLast.jpg" alt="image" className="imageAbt" />
        <div className="floatingDiv">
          <img src="images/offer.jpg" alt="image" className="imageOffer" />
        </div>
      </div>

      <div className="rightAboutPort">
        <div className="insideLt"></div>
        <div className="topPart">
          <h2 className="text-lg text-orange-600 uppercase font-bold">
            who am I
          </h2>
          <h1 className="text-4xl text-blue-900 font-bold">
            what do I Carry the{" "}
            <span className="text-blue-500 font-bold text-4xl"> Best of</span>
          </h1>
        </div>
        <div className="adds flex flex-row justify-center items-center gap-5 w-100% h-40  border-t-2 mt-10">
          <div className="w-18 h-18 rounded-full bg-orange-400 m-auto justify-center">
            <PiStudentBold className="text-sm text-white w-12 h-12 rounded-full " />
          </div>
          <div>
            <h2 className="text-blue-800 text-lg font-bold">
              Technical Proficiency
            </h2>
            <p className="text-zinc-600 text-base">
              Wide knowledge of programming languages, frameworks, and tools
              (e.g.,C,C++, JavaScript, React, Node.js, MongoDB, etc.).
            </p>
          </div>
        </div>
        <div className="adds flex flex-row justify-center items-center gap-5 w-100% h-40  border-t-2">
          <div className="w-18 h-18 rounded-full bg-orange-400 m-auto justify-center">
            <GrNotes className="text-sm text-white w-12 h-12 rounded-full bg-teal-200" />
          </div>
          <div>
            <h2 className="text-blue-800 text-lg font-bold">
              Have strong Problem-Solving Ability
            </h2>
            <p className="text-zinc-600 text-base">
              We Engineers are those who can break down complex problems and
              create efficient solutions.
            </p>
          </div>
        </div>
        <div className="adds flex flex-row justify-center items-center gap-5 w-100% h-40  border-t-2">
          <div className="w-18 h-18 rounded-full bg-orange-400 m-auto justify-center">
            <IoIosPeople className="text-sm text-white w-12 h-12 rounded-full bg-gray-600" />
          </div>
          <div>
            <h2 className="text-blue-800 text-lg font-bold">
              User-Centered Designer (UX)
            </h2>
            <p className="text-zinc-600 text-base">
              We do Provide wireframes, prototypes, or user flow diagrams to
              illustrate how we design a product around user needs.
            </p>
          </div>
        </div>
        <div className="adds flex flex-row justify-center items-center gap-5 w-100% h-40  border-t-2">
          <div className="w-18 h-18 rounded-full bg-orange-400 m-auto justify-center">
            <PiStudentBold className="text-sm text-white w-12 h-12 rounded-full " />
          </div>
          <div>
            <h2 className="text-blue-800 text-lg font-bold">
              Continuous Learning and Adaptability
            </h2>
            <p className="text-zinc-600 text-base">
              Technology evolves quickly, and so we as a software engineer must
              stay up-to-date with the latest trends and technologies.
            </p>
          </div>
        </div>
        <div className="adds flex flex-row justify-center items-center gap-5 w-100% h-40  border-t-2">
          <div className="w-18 h-18 rounded-full bg-orange-400 m-auto justify-center">
            <IoIosPeople className="text-sm text-white w-12 h-12 rounded-full bg-gray-600" />
          </div>
          <div>
            <h2 className="text-blue-800 text-lg font-bold">
              Collaborative Mindset
            </h2>
            <p className="text-zinc-600 text-base">
              I do prefer working well in teams, as collaboration is key in
              software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastAboutPort;
