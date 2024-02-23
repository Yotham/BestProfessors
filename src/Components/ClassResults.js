/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable valid-jsdoc */
/* eslint max-len: ["error", { "code": 200 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import ProfessorReviews from './ProfessorReviews';
import './ClassResults.css';


/**
 * determine if a string is only letters
 * @return {True/False} if string is only letters or not
 */
function isAlpha(s) {
  return /^[a-zA-Z()]+$/.test(s);
}

function isDigit(str) {
  return /^\d+$/.test(str);
}


/**
 *function handles output for when a course has no reviewed professors
 *takes the number of reviews a course has as input
 *outputs error message when numRevs  === 0, empty string otherwise
 *called after looping through json data to get course review data
 * @return {True/False}
 */


/**
 *checks if search was valid. If the input is too long
 *or not formatted like: CSCI4440, 0 is returned
 *if the input is formatted properly but doesn't exist in catalog,
 *1 is returned.
 *else the input is valid, return 2
 * @return {0/1/2} 0 = true 1 = false 2 = false
 */
function validInput(str, dat) {
  if (str.length !== 8 || !(isAlpha(str.substring(0, 4))) || !(isDigit(str.substring(4, 8))) || isNaN(str.substring(5))) {
    return (0);
  } else if (!(dat)) {
    return 1;
  }
  return 2;
}
/**
 * Generates class results page
 * @return {/ClassResults} class results page
 */
export default function ClassResults() {
  const location = useLocation();
  //console.log(location);
  const rmpData = location.state.data;
  //console.log(rmpData)
  const search = location.state.professor.message.toString().toUpperCase();
  //console.log(search)
  const [selected, setSelected] = useState(null);
  // Before using the state, check if it exists and has the `CourseProfs` key
  const courseData = location.state && location.state.courseProfs && location.state.courseProfs && location.state.courseProfs[search] ? location.state.courseProfs[search] : null;
  const valid = validInput(search, courseData);
  // console.log(valid)
  // console.log(courseData)
  if ( valid === 0) {
    return (
      <center><div className='invalid'>
        <div><span>"{search}" is not a properly formatted search</span></div>
        <div><span>please try again with an RPI course ID; four letters followed by four numbers without spaces</span></div>
        <div><span>an example of a valid course ID is: "CSCI1100" without the quotation marks</span></div>
        <div><span><a href="/">try another search</a></span></div>
      </div></center>
    );
  } else if (valid === 1) {
    return (
      <center><div className='invalid'>
        <div><span>"{search}" is not a course in the RPI catalog.</span></div>
        <div><span>please try again with an RPI course that actually exists</span></div>
        <div><span>an example of a valid course ID is: "CSCI1100" without the quotation marks</span></div>
        <div><span><a href="/">try another search</a></span></div>
      </div></center>
    );
  }
  // Then you can check if courseData is not null before mapping over it

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  // Filter out the professors that do not match the search term or have a rating of 0
  const filteredProfessors = courseData
    .map(profName => rmpData.find(prof => prof.profname === profName))
    .filter(prof => prof && prof.overall_rating !== 0);

  // handle badly formatted user input
  return (
    <div>
      <center><div id='course-search'>
        { search }
      </div></center>
      {
        courseData && courseData.map( (prof) => {
          return (
            <div>
              {filteredProfessors.length > 0 ? (
                filteredProfessors.map((professor, i) => (
                  <div className='prof' key={professor.profname}>
                    <div className='prof-name-title' onClick={() => toggle(i)}>
                      <h2>{professor.profname} - {professor.overall_rating.toFixed(1)}</h2>
                      <h2>{selected === i ? '-' : '+'}</h2>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}>
                      <ProfessorReviews reviewData={professor.reviews}/>
                    </div>
                  </div>
                ))
              ) : (
                <div className='no-results'>
                  <p>No professors found for this course or no professors have been rated yet.</p>
                </div>
              )}
            </div>
          );
        })
      }
      <br></br>
    </div>

  );
}
