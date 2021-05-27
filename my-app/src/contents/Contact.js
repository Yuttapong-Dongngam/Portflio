import React, { Component } from "react";

import Social from "../components/Social";

class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <h3>Facebook : Yuttapong Dongngam</h3>
        <h3>Email : Yuttapong001@hotmail.com</h3>
        <h3>Instagram : @m_m_yuttapong</h3>
        <h3>Tel : 0981610462</h3>
        <h3>Line : oomoo101</h3>
        <Social />
      </div>
    );
  }
}

export default Contact;
