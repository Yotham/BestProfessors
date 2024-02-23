/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable valid-jsdoc */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */

import './ProfResults.css';
import ProfessorReviews from './ProfessorReviews';
import {useResolvedPath, useMatch, Link,useLocation } from 'react-router-dom';
import React, {useState} from 'react';

import RMPData from '../Data/rmp.json';


/**
 * handle user input that is not a prof at RPI
 * checks if prof exited in json data after looking through
 * json data for prof
 * takes boolean seeProf and what the user input into the search bar as input
 * outputs error message if prof not seen, or empty string if prof was seen
 * @return {div or ' '} true or false -> ' ' if false
 */
function ifNotSeen(seenProf, search) {
  if (seenProf === false) {
    return (
      <div id='not-seen'>
        <div><span>"{search}" is not an RPI professor that has any ratings.</span></div>
        <div><span><a href="/profhome">see a list of RPI professors with ratings</a></span></div>
        <div><span><a href="/">return to search</a></span></div>
      </div>

    );
  }
  return ('');
}

/**
 *Generate Prof Results Page
 * @return {/ProfResults} prof results page
*/
export default function ProfResults() {
  const location = useLocation();
  const data = location.state.data;
  const search = location.state.professor.message;
  let seenProf = false;
  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  const filteredProfessors = data.filter(professor =>
    professor.profname.toUpperCase() === search.toUpperCase()
  );

  // After filtering, set seenProf to true if we have any professors
  seenProf = filteredProfessors.length > 0;
  function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
  
    return <Link id='search-btn' className={isActive ? 'active' : ''} to={to} {...props}>{children}</Link>;
  }
  
  return (
    <div>
      <div className="search-group">
        <input
          className="search-input professor-search"
          onChange={handleChange}
          type="text"
          placeholder="Search Professors...."
        />
        <CustomLink className="search-button" to="/profresults" state={{ data: RMPData, professor: { message } }}>
          Search
        </CustomLink>
      </div>
      {filteredProfessors.map((professors, i) => (
        <div className='prof' key={ professors.profname }>
          <div id='prof-name'>
            <div className='prof-name-title' onClick={() => toggle(i)}>
              <h2>{ professors.profname } - { professors.overall_rating.toFixed(1)}</h2>
              <h2>{selected === i ? '-' : '+'}</h2>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              <ProfessorReviews reviewData={professors.reviews}/>
            </div>
            <br></br>
          </div>
        </div>
      ))}
      <center>
        {!seenProf && ifNotSeen(seenProf, search)}
      </center>
      
    </div>
  );
}

