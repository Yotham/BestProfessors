import React, { useState } from "react"
import './ClassHome.css'


export default function ClassHome({ data }) {  
  const [searchText, setText] = useState('');
  const handleChange = event => {
    setText(event.target.value.toUpperCase());
    console.log('value is:', searchText);
  }

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      <input id="class-search-home" onChange = {handleChange} type="text" placeholder="Search by course code...." />
      <div className='course-cataloge'>
        {
          data && data.map((courseCode, i) => {
            return (
              <div className='class-home'>
                <div key={ courseCode.code }>
                  <div>
                    <div className="code-title" onClick={() => toggle(i)}>
                      <h2 id="code">{ courseCode.code }</h2>
                      <h2 id="expand">{selected === i ? '-' : '+'}</h2>
                    </div>
                    <div className={selected === i ? 'class-card show' : 'class-card'}>
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
                  </div>
                </div>
              </div>
            )
          } )
        }
      </div>
    </div>
  )
}