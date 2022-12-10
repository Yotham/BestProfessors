/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */

import React from 'react';
import './About.css';
/**
 * Generates the about page
 * @return {/about} The about page
 */
export default function About() {
  return (
    <div>
      <div id = "about-title" className="about-title">
          About Us
      </div>
      <center><div className="row">
        <div className = "column">
          <img id = "member_photo" alt = "Yotham Sage" src = "https://i.ibb.co/dKwYy5p/yotham-sage.jpg" ></img>
          <p data-testid="name1">Yotham Sage</p>
        </div>
        <div className = "column">
          <img id = "member_photo" alt = "Jen Lawless" src = "https://i.ibb.co/7RPGXb0/jenny-lawless.jpg" ></img>
          <p data-testid="name2">Jen Lawless</p>
        </div>
        <div className = "column">
          <img id = "member_photo" alt = "Isaac Foster" src = "https://i.ibb.co/syFXhGS/isaac-foster.jpg" ></img>
          <p data-testid="name3">Isaac Foster</p>
        </div>
        <div className = "column">
          <img id = "member_photo" alt = "Julia Maguire" src = "https://i.ibb.co/10my9ZV/Julia-Maguire.jpg" ></img>
          <p data-testid="name4">Julia Maguire</p>
        </div>
        <div className = "column">
          <img id = "member_photo" alt = "Teddy Clark" src = "https://i.ibb.co/MkzCRmZ/teddy-clark.jpg" ></img>
          <p data-testid="name5">Teddy Clark</p>
        </div>
      </div></center>
      <center><div id = "paragraph-about-us" data-testid="paragraph-test">A group of RPI students dedicated to 
       making the class selection process easier,
       our mission was to eliminate the need to sift through RateMyProfessor to find professor ratings and instead allow students
       to enter their course code and receive all the necessary information.
      </div></center>
    </div>
  );
}
