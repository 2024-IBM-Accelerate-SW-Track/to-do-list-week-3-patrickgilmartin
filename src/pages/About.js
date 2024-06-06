import React, { Component } from 'react';
import "./About.css";
import profilePic from "../assets/PG_Profile-Pic.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profilePic} // Use the imported image here
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Patrick Gilmartin</div>
            <div className="brief_description">
              My name is Patrick Gilmartin. I'm a junior at the University of Virginia pursuing a double major in Computer Science and Economics. This summer I'm participating in IBM's Accelerate Program on the Software Developer track. I can't wait to learn! 
            </div>
          </div>
        </div>
      </div> 
    );
  }
}
