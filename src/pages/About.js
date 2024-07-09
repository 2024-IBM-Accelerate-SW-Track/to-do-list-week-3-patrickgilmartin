import React, { Component } from "react";
import "./About.css";
<<<<<<< HEAD
import profile_pic from "../assets/Screenshot 2024-05-29 203100.png";
=======
import profile_pic from "../assets/profile_pic.jpg";
>>>>>>> 6c174a370c08c86a2581337c2cea2fc9edbe9de3

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
<<<<<<< HEAD
        <div className="split left">
=======
        <div class="split left">
>>>>>>> 6c174a370c08c86a2581337c2cea2fc9edbe9de3
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
<<<<<<< HEAD
            />
=======
            ></img>
>>>>>>> 6c174a370c08c86a2581337c2cea2fc9edbe9de3
          </div>
        </div>
        <div className="split right">
          <div className="centered">
<<<<<<< HEAD
            <div className="name_title">Patrick Gilmartin</div>
            <div className="brief_description">
              I'm a rising junior at the University of Virginia, pursuing a double major in Econ and CS.
=======
            <div className="name_title">Your Name</div>
            <div className="brief_description">
              Tell us about yourself in a few sentences. Tell us your interests
              and say a fun fact about yourself.
>>>>>>> 6c174a370c08c86a2581337c2cea2fc9edbe9de3
            </div>
          </div>
        </div>
      </div>
    );
  }
}
