import React from 'react'
import {useLocation } from 'react-router-dom'
import './ClassResults.css'

//determine if string is only letters
function isAlpha(s)
{
  return /^[a-zA-Z()]+$/.test(s);
}
//checks if search was valid. If the input is too long
//or not formatted like: CSCI4440, 0 is returned
//if the input is formatted properly but doesn't exist in catalog,
// 1 is returned.
//else the input is valid, return 2

function validInput(str, dat){
  if(str.length != 8 || !(isAlpha(str.substring(0,4))) || isNaN(str.substring(5))) {
    return (0)
  }
  else if (!(dat)) {
    return 1
  }
    return 2
}

//main function
export default function ClassResults() {
  const location = useLocation();
  console.log(location)
  let rmpData = location.state.data
  let search = location.state.professor.message.toString().toUpperCase()
  let courseData = location.state.courseData.CourseProfs[search]
  let valid = validInput(search, courseData)
  let numRevs = 0

  // handle badly formatted user input
  if( valid == 0){
    return (
      <center><div>
        <div><span> {search} is not a properly formatted search.</span></div>
        <div><span> Please try again with an RPI course ID; four letters followed by four numbers without spaces.</span></div>
        <div><span> An example of a valid course ID is: 'CSCI1100' without the quotation marks. </span></div>
        <div><span><a href="/">Click Here to Try Another Search</a></span></div>
      </div></center>
    )
  }
  // handle input of a class that doesn't exist
  else if(valid == 1){
    return (
      <center><div>
        <div><span> {search} is not a course in the RPI catalog.</span></div>
        <div><span> Please try again with an RPI course that actually exists.</span></div>
        <div><span> An example of a valid course ID is: 'CSCI1100' without the quotation marks. </span></div>
        <div><span><a href="/">Click Here to Try Another Search</a></span></div>
      </div></center>
    )
  }
  return (
    <div>
      <center><div id='course-search'>
        { search }
      </div></center>
      {
        courseData && courseData.map( prof => {
          return (
            <div>
              {
                rmpData && rmpData
                .sort((a,b) => a.overall_rating > b.overall_rating ? 1 : -1)
                .map( professors => {
                  return (
                    <div className='prof' key={ professors.profname }>
                      {(() => {
                        if (professors.profname === prof) {
                          numRevs = numRevs + 1
                          return (
                            <div className='full-review'>
                              <div id='prof-name-class'>
                                { professors.profname }
                                <span> - </span>
                                { professors.overall_rating }
                              </div>
                              <center><select >
                                     <option selected disabled = "true" >Professor Reviews</option>{
                                      professors.reviews && professors.reviews.map((result) => (<option disabled = "true"> {result.className} - {result.qualityRating.toFixed(1)} - {result.review} </option>))
                                      }

                             </select></center>                             
                            </div>

                          )
                        }// end of if
                        //if there are no reviews after looking at every prof, bad input
                        if(numRevs === 0 && (professors.profname === rmpData[rmpData.length - 1].profname)){
                          return(<div><center>
                                  <div><span>Unfortunately, there are no rated professors teaching this course.</span></div>
                                  <div><span><a href="/">Click Here to Try Another Search</a></span></div>
                                </center></div>
                          )
                        }
                      })()}
                    </div>
                  )
                })
              }

            </div>
          )
        })
      }
    </div>

  )
}
