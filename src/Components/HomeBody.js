/* eslint linebreak-style: ["error", "windows"] */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import './HomeBody.css';
/**
 * Generates Homebody for the index page
 * @return {HomeBody} i.e the search bars
 */
export default function HomeBody({data}) {
  return (
    <div>
      <input className="professor-search" type="text" placeholder="Search Professors...." />
      <CustomLink to="/classresults">Search</CustomLink>
      <input className="class-search" type="text" placeholder="Search Classes...." />
      <CustomLink to="/profresults">Search</CustomLink>
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

  return <Link id='search-btn' className={isActive ? 'active' : ''} to={to} {...props}>{children}</Link>;
}
