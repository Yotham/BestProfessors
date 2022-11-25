import React, { useEffect, useState, ReactDOM } from "react"
import ReactPaginate from "react-paginate";
import './ClassHome.css'


export default function ClassHome({ data }) {  return (
    <div>
      <PaginatedItems itemsPerPage={2} data={data}/>
    </div>
  )
}

function Items({ data, fullData }) {
  const [searchText, setText] = useState('');
  const handleChange = event => {
    setText(event.target.value.toUpperCase());
    console.log('value is:', searchText);
  }

  return (
    <div>
      <input id="class-search-home" onChange = {handleChange} type="text" placeholder="Search by course code...." />
      {(() => {
        if (searchText === "") {
          return (
            <div className='course-cataloge'>
              {
                data && data.map( courseCode => {
                  return (
                    <div className='class-home'>
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
                    </div>
                  )
                } )
              }
            </div>
          )
        }
        else {
          return (
            <div className='course-cataloge'>
              {
                fullData && fullData.map( courseCode => {
                  return (
                    <div className='class-home'>
                      {(() => {
                        if (courseCode.code.includes(searchText)) {
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
          )
        }
      })()}
    </div>
  )
}

function PaginatedItems({ itemsPerPage, data }) {
  // creating the offset
  const [itemOffset, setItemOffset] = useState(0);

  // simulate fetching items from source
  const endOffset = itemOffset + itemsPerPage;
  console.log('Loading items from ${itemOffset} to ${endOffset}');
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount  = Math.ceil(data.length / itemsPerPage);

  // click event handling
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log('User requested page number ${event.selected}, which is offset ${newOffset}')
    setItemOffset(newOffset);
  }

  return (
    <>
      <Items data={currentItems} fullData={data} />
      <ReactPaginate
        containerClassName={'pagination'}
        pageClassName={'item'}
        activeClassName={'item active-page '}
        previousClassName={'previous'}
        nextClassName={'next'}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}