import React, { useState } from "react"
import './ClassHome.css'

export default function ClassHome({ data }) {
  const [searchText, setText] = useState('');
  const handleChange = event => {
    setText(event.target.value.toUpperCase());
    console.log('value is:', searchText);
  }

  return (
    <div>
      <input id="class-search-home" onChange = {handleChange} type="text" placeholder="Search by course code...." />
      <div className='course-cataloge'>
        {
          data && data.map( courseCode => {
            return (
              <div className='class-home'>
                {(() => {
                  if (searchText === "" || courseCode.code.includes(searchText)) {
                    return (
                      <div key={ courseCode.code }>
                        <div id="code">
                          { courseCode.code }
                        </div>
                        { courseCode.courses && courseCode.courses.map( availableCourses => {
                          return (
                            <div id='course' key={ availableCourses.id }>
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
                                    <span>Seats Available: </span>{ courseSections.rem }<span>/</span>{ courseSections.cap }
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
                  }
                  <div id='bottom-margin'></div>
                })()}
              </div>
            )
          } )
        }
      </div>
    </div>
  )
}
