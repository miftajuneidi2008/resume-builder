import React, { useState } from "react";
import "./About.css";
import { useDispatch } from "react-redux";
import { aboutMe } from "./data/About";
const About = ({ steps }) => {
  const [about, setAbout] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(aboutMe({ about: about }));
    steps();
  };
  return (
    <div className="text-container">
      <h3>Personal Information</h3>
      <form onSubmit={handleClick}>
        <div className="form-control">
          <textarea
            name="about"
            id="about"
            onChange={(e) => {
              setAbout(e.target.value);
            }}
            placeholder="About Me...."
          />
        </div>
        <div className='form-control'>
                <button type='submit' className='btn btn-primary'>Next</button>
            </div>
      </form>
    </div>
  );
};

export default About;
