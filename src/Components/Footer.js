/* eslint-disable linebreak-style */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import './Footer.css';
/**
 * Generates footer
 * @return {footer} page footer
 */
export default function Footer({gitLogo}) {
  return (
    <div className='footer'>
      <div id='git-link'>
        <a href="https://github.com/Yotham/BestProfessorsList">
          <img id="git-logo" src={ gitLogo } alt="github logo" />
        </a>
        <a data-testid="github-link-test" id='git-title' href='https://github.com/Yotham/BestProfessorsList'>GitHub</a>
      </div>
      <CustomLink id="contact-link" to="/contact">Contact</CustomLink>
    </div>


  );
}
/**
 * this function creates a custom "Link" component which sets the class
 * to reflect if the page is currently active as well as setting the id,
 * redirect address and displayed information
 * @return {CustomLink} custom link
 */
function CustomLink({id, to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});
  return <Link id={id} className={isActive ? 'active' : ''} to={to} {...props}>{children}</Link>;
}
