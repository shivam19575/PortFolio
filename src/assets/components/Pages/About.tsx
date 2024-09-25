import { FaWhatsapp } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import LastAboutPort from "../LastAboutPort";

import { RiLinkedinLine } from "react-icons/ri";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div>
        <div className="btnBx flex flex-row justify-center items-center gap-7">
          <a
            href="https://x.com/ShivamP21234538?t=yIsx4U98rMbeflBo38QNHw&s=09"
            className="w-10 h-10 cursor-pointer "
          >
            <RiTwitterXFill className="w-10 h-10 cursor-pointer text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/index_insane/"
            className="w-10 h-10 cursor-pointer"
          >
            <FaInstagramSquare className="w-10 h-10 cursor-pointer text-blue-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-pandey-441a152a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="w-10 h-10 cursor-pointer"
          >
            <RiLinkedinLine className="w-10 h-10 cursor-pointer text-blue-500" />
          </a>
          <a
            href="https://github.com/shivam19575"
            className="w-10 h-10 cursor-pointer"
          >
            <FaGithub className="w-10 h-10 text-blue-500 cursor-pointer" />
          </a>
          <a
            href="https://wa.me/918299692948?text=Hello How Can I help you ?"
            target="_blank"
            className="w-10 h-10 cursor-pointer"
          >
            <FaWhatsapp className="w-10 h-10 text-blue-500 cursor-pointer" />
          </a>
        </div>
        <div className="w-[320px] h-[80px] flex justify-center items-center m-auto mt-8">
          <a
            className="btnApply aboutBtn mt-5"
            href="https://wa.me/918299692948?text=Hello How Can I help you ?"
            target="_blank"
          >
            hire now
            <IoIosArrowDropleftCircle className="insideIconBtn" />
          </a>
        </div>
      </div>

      {/* this is the actual about part */}
      <div className="topAbout">
        <div className="leftAbout">
          <img src="images/collageInside.png" alt="inside" className="inside" />
          <div className="boxOverImage"></div>
          <img
            src="images/shivamProfile.jpg"
            alt="collage"
            className="collage"
          />
        </div>
        <div className="rightAbout ">
          <div className="aboutDown"></div>
          <h2 className="text-orange-500 text-xl mb-4">About</h2>
          <h1 className="text-blue-700 text-4xl font-bold down">About</h1>
          <div className="aboutDataTop">
            {/* <p className="paras pt-6"> */}
            Highly motivated and detail-oriented software engineer with 1.5+
            years of experience in designing, developing, and deploying scalable
            software solutions. Proficient in a range of programming languages,
            including JavaScript ,C Language ,C++ . Proven track record of
            delivering high-quality software products on time and on budget.
            Strong understanding of software development life cycles, agile
            methodologies, and version control systems. Excellent
            problem-solving skills, with the ability to collaborate effectively
            with cross-functional teams to drive innovation and growth.
            {/* </p> */}
            {/* <a href="https://ankitdwivedi.netlify.app/#home">go no</a> */}
          </div>
          <div className="secondThirdAbout">
            <div className="btnBx flex flex-row justify-center items-center gap-7">
              <a
                href="https://x.com/ShivamP21234538?t=yIsx4U98rMbeflBo38QNHw&s=09"
                className="w-10 h-10 cursor-pointer "
              >
                <RiTwitterXFill className="w-10 h-10 cursor-pointer text-blue-500" />
              </a>
              <a
                href="https://www.instagram.com/index_insane/"
                className="w-10 h-10 cursor-pointer"
              >
                <FaInstagramSquare className="w-10 h-10 cursor-pointer text-blue-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-pandey-441a152a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="w-10 h-10 cursor-pointer"
              >
                <RiLinkedinLine className="w-10 h-10 cursor-pointer text-blue-500" />
              </a>
              <a
                href="https://github.com/shivam19575"
                className="w-10 h-10 cursor-pointer"
              >
                <FaGithub className="w-10 h-10 text-blue-500 cursor-pointer" />
              </a>
              <a
                href="https://wa.me/918299692948?text=Hello How Can I help you ?"
                target="_blank"
                className="w-10 h-10 cursor-pointer"
              >
                <FaWhatsapp className="w-10 h-10 text-blue-500 cursor-pointer" />
              </a>
            </div>
          </div>
          {/* <div className="actionButtons"> */}
          <a
            className="btnApply aboutBtn mt-5"
            href="https://wa.me/918299692948?text=Hello How Can I help you ?"
            target="_blank"
          >
            hire now
            <IoIosArrowDropleftCircle className="insideIconBtn" />
          </a>
          {/* </div> */}
        </div>
      </div>
      <LastAboutPort />
    </>
  );
};

export default About;
