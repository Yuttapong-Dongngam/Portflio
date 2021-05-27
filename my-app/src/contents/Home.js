import React, { Component } from "react";
//import profilepic from '../img/pt1.jpg'
import Social from "../components/Social";
import Reacttypingeffect from 'react-typing-effect'


class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img
          src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.6435-9/182440456_5298995676837640_6735820550748721771_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFDBGRCbgWlrDJQTAoU9oUYk_8US_zkwWuT_xRL_OTBa9LvY9oCe3OIo5fdq9oHLvTk9yxMsi-hb8w41e-AAM1_&_nc_ohc=sQplpF1BXuAAX9ErktY&_nc_ht=scontent.fbkk12-4.fna&oh=089a0a3797565e72043e71fd265c422d&oe=60B5FEC1"
          alt="pt1"
          className="profilepic" />
          
        <Reacttypingeffect text={['I am Yuttapong','I am Web Developer']} speed={80} eraseDelay={200} className="typingeffect" />
        <Social />
      </div>
    );
  }
}

export default Home;
