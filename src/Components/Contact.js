/* eslint-disable linebreak-style */
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
      <div className="contact-title" data-testid="title-test">
          Contact:
      </div>
      <div className="contact-p" data-testid="p1-test">
          Let us know if you have any suggestions or issues!
      </div>
      <div className="contact-p" data-testid="p2-test">
          Email: bestprofessorlist@gmail.com
      </div>
    </div>
  );
}
