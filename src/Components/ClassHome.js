import React from 'react'
import './ClassHome.css'

export default function ClassHome({ data }) {
  return (
    <div className='course-cataloge'>
      {
        data && data.map( courseCode => {
          return (
            <div className="code" key={ courseCode.code }>
              -------------------- { courseCode.code } --------------------
              { courseCode.courses && courseCode.courses.map( availableCourses => {
                return (
                  <div key={ availableCourses.id }>
                    { availableCourses.id } -- { availableCourses.title }
                    { availableCourses.sections && availableCourses.sections.map( courseSections => {
                      return (
                        <div key={ courseSections.crn }>
                          { courseSections.timeslots && courseSections.timeslots.map( courseInstructor => {
                            return (
                              <div key={ courseSections.crn }>
                                <span>Professor: </span>{ courseInstructor.instructor }
                                <br></br>
                              </div>
                            )
                          }) }
                          <span>CRN: </span>{ courseSections.crn }
                          <br></br>
                          <span>Seats Available:</span>{ courseSections.rem }<span>/</span>{ courseSections.cap }
                          <br></br>
                        </div>
                      )
                    }) }
                    <br></br>
                  </div>
                )
              }) }
            </div>
          )
        } )
      }
    </div>
  )
}
