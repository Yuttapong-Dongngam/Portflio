import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="condiv about">
        <h1 className="subtopic">About Me</h1>
        <img
          src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.6435-9/182440456_5298995676837640_6735820550748721771_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFDBGRCbgWlrDJQTAoU9oUYk_8US_zkwWuT_xRL_OTBa9LvY9oCe3OIo5fdq9oHLvTk9yxMsi-hb8w41e-AAM1_&_nc_ohc=sQplpF1BXuAAX9ErktY&_nc_ht=scontent.fbkk12-4.fna&oh=089a0a3797565e72043e71fd265c422d&oe=60B5FEC1"
          alt="pt1"
          className="profilepic"
        />
        <h3>Hi, I'm Yuttapong</h3>
        <p>
          Hello my name is Yuttapong Dongn-ngam. My nickname is M. I am 25 years
          old. I was born on Monday the 30th September 1995. I have a Bachelor
          of Business Administration in Business Computing at Sarakham Rajabhat
          University. My particular interest is programming. My personal habits
          are cheerful, quick to learn, honest, patient, and always ready to
          learn new experiences.
        </p>
      </div>
    );
  }
}

export default About;
