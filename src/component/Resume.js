import React,{useRef} from "react";
import "./Resume.css";
import { useSelector } from "react-redux";
import { useReactToPrint } from 'react-to-print';
const Resume = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content:()=>componentRef.current,
    documentTitle:'Resume',
    onAfterPrint:()=>alert('printed')
  })
  const info = useSelector((state) => state.personalInfo.value);
  const about = useSelector((state) => state.about.value);
  const work = useSelector((state) => state.work.value);
  const education = useSelector((state) => state.education.value);
  const languages = useSelector((state) => state.language.value);
  const proj = useSelector((state) => state.pro.value);
  const skills = useSelector((state) => state.skill.value);
  return (
    <>
    <div className="resume-container" ref={componentRef} style={{height:window.innerHeight}}>
      <div className="personal-data">
        <p className="name">{info.fullname}</p>
        <p className="phone">Phone: {info.phone}</p>
        <p className="date">Date of Birth: {info.date}</p>
        <p className="email">Email: <span className="links">{info.email}</span></p>
        <p className="linked">Linked In: <span className="links">{info.linked}</span></p>
        <p className="github">Github: <span className="links"> {info.github}</span></p>
      </div>
      <div className="about">
        <h3>About Me</h3>
        <hr />
        <p className="about">{about.about}</p>
      </div>
      <div className="work">
        <h3>Work</h3>
        <hr />
        {work.map((work) => {
          return (
            <div className="works" key={work.title}>
              {work.title && (
                <p>{`${work.title} at ${work.organization} from ${work.from} - ${work.to}`}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="work">
        <h3>Education and Training</h3>
        <hr />
        {education.map((edu) => {
          return (
            <div className="works" key={edu.title}>
              {edu.title && (
                <p>{`${edu.title} in ${edu.departement} from ${edu.from} - ${edu.to}`}</p>
              )}
            </div>
          );
        })}
      </div>
      <div className="language">
        <h3>Languages</h3>
        <hr />
        {languages.map((lan) => {
          return (
            <div className="lan" key={lan.language}>
              {lan.listen && (
                <p>
                 <span className="lang"> {`${lan.language}`}</span>{" "} 
                  <span className="listen"> Listening </span> {`${lan.listen} `}{" "}
                  <span className="speak">Speaking</span> {` ${lan.speak} `}{" "}
                  <span className="write">Writting</span> {`${lan.write} `}{" "}
                  <span className="read">Reading</span> {`${lan.read}`}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div className="project">
        <h3>Projects</h3>
        <hr />
        {proj.map((projc)=>
        {
          return(
            <div key={projc.title} className="pro">
              <h4>{projc.title}</h4>
              <p>{projc.about}</p>
              </div>
          )
        })}
      </div>
      <div className="skills-container">
        <h3>Skills</h3>
        <hr />
        <div className="skills">
        {skills.map((sk)=>
        {
          return(
            <div key={sk.skill} className="skill">
              <p>{sk.skill}</p>
              </div>
          )
        })}
        </div>
      </div>
    </div>
    <button onClick={handlePrint}>Save</button>
    </>
  );
};

export default Resume;
