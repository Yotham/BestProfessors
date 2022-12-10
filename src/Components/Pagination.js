/* eslint linebreak-style: ["error", "windows"] */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React from 'react';
import './Pagination.css';
/**
 * Generates Pagination
 * @return {Pagination} ClassHome and ProfessorHome pagination
 */
export default function Pagination({postsPerPage, totalPosts, paginate}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {
          pageNumbers && pageNumbers.map( (number) => {
            return (
              <li key={number}>
                <a id='page-num' onClick={paginate(number)} href='/classhome'>
                  {number}
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
