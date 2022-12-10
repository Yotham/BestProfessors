/* eslint-disable linebreak-style */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React from 'react';
import './Courses.css';
/**
 * Generates each course for the course cards
 * @return {course} course
 */
export default function Courses({classData}) {
  return (
    <div>
      { classData.courses && classData.courses.map( (availableCourses) => {
        return (
          <div id='course' key={ availableCourses.id }>
            { availableCourses.id } -- { availableCourses.title }
            { availableCourses.sections && availableCourses.sections.map( (courseSections) => {
              return (
                <div key={ courseSections.crn }>
                  { courseSections.timeslots && courseSections.timeslots.map( (courseInstructor) => {
                    return (
                      <div key={ courseSections.crn }>
                        <span>Professor: </span>{ courseInstructor.instructor }
                        <br></br>
                      </div>
                    );
                  }) }
                  <span>CRN: </span>{ courseSections.crn }
                  <br></br>
                  <span>Seats Available: </span>{ courseSections.rem }<span>/</span>{ courseSections.cap }
                  <br></br>
                </div>
              );
            }) }
            <br></br>
          </div>
        );
      }) }
    </div>
  );
}
