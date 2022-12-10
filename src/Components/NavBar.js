/* eslint linebreak-style: ["error", "windows"] */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import './NavBar.css';
/**
 * Generates the websites navbar
 * @return {NavBar} page navbar
 */
export default function NavBar() {
  return (
    <div className='nav-bar'>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/classhome">Classes</CustomLink>
      <CustomLink to="/profhome">Professors</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </div>
  );
}

/**
 * this function creates a custom "Link" component which sets the class
 * to reflect if the page is currently active as well as setting the id,
 * redirect address and displayed information
 * @return {CustomLink} custom link
 */
function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});

  return <Link className={isActive ? 'active' : ''} to={to} {...props}>{children}</Link>;
}
