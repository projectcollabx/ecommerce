import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import Header from '../Header/Header.jsx';
import SectionParent from '../../HomeContent/SectionParent.jsx';
import aboutImg from '../../../../src/images/haridwar4.jfif';

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <Header/>
      <h1 className="aboutImage">About Us</h1>
      
      <div></div>
      <div className="aboutSectionGradient"></div>
      <SectionParent/>
    </div>
  );
};

export default About;
