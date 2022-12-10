/* eslint linebreak-style: ["error", "windows"] */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React from 'react';
import './Contact.css';
/**
 * Generates contact page
 * @return {/Contact} contact page
 */
export default function Contact() {
  return (
    <div className='contact-container'>
      <div className="contact-title">
          Contact:
      </div>
      <div className="contact-p">
          Let us know if you have any suggestions or issues!
      </div>
      <div className="contact-p">
          Email: bestprofessorlist@gmail.com
      </div>
    </div>
  );
}
