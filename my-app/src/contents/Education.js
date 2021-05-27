import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Bachelor of Business Administration (Business Computer)" where="Rajabhat Maha Sarakham University" from="2014" to="2018" />
                <Widecard title="Pathumrat Pittayakom School" from="2011" to="2014" />
            </div>
        );
    }
}

export default Education;