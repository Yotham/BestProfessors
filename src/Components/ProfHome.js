import React, { useState } from 'react'
import ProfessorReviews from './ProfessorReviews';
import ReactPaginate from 'react-paginate';
import './ProfHome.css'


export default function ProfHome({ data }) {
  return (
    <div>
      <PaginatedItems itemsPerPage={10} data={data} />
    </div>
  )
}

function Items({ data, fullData }) {
  const [searchText, setText] = useState('');
  const handleChange = event => {
    setText(event.target.value.toLowerCase());
    console.log('value is:', searchText);
  };
  var foundFlag = false;

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  

  return (
    <div>
      <input id="class-search-home" onChange = {handleChange} type="text" placeholder="Search by professor name...." />
      <div id = "heading">Professors</div>
      {(() => {
        if (searchText === "") {
          return (
            <div className='prof-list'>
              {
                data && data
                .sort((a,b) => a.overall_rating < b.overall_rating ? 1 : -1)
                .map((profName, i) => {
                  return (
                  <div>
                  {(() => {
                    if ((profName.profname.toLowerCase().includes(searchText) || searchText === "") && profName.overall_rating != 0.0) {
                      foundFlag = true;
                      return(
                        <div className='prof-item' key={ profName.profName }>
                          <div className='prof-item-title' onClick={() => toggle(i)}>
                            <h2>{ profName.profname } - { profName.overall_rating.toFixed(1)}</h2>
                            <h2>{selected === i ? '-' : '+'}</h2>
                          </div>
                          <div className={selected === i ? 'content show' : 'content'}>
                            <ProfessorReviews reviewData={profName.reviews}/>
                          </div>
                        </div>
                      )
                    }
                  })()}
                  </div>
                  )
                })
              }
            </div>
          )
        }
        else {
          return (
            <div>
              <div className='prof-list'>
                {
                  fullData && fullData
                  .sort((a,b) => a.overall_rating < b.overall_rating ? 1 : -1)
                  .map((profName, i) => {
                    return (
                    <div>
                    {(() => {
                      if ((profName.profname.toLowerCase().includes(searchText) || searchText === "") && profName.overall_rating != 0.0) {
                        foundFlag = true;
                        return(
                          <div className='prof-item' key={ profName.profName }>
                            <div className='prof-item-title' onClick={() => toggle(i)}>
                              <h2>{ profName.profname } - { profName.overall_rating.toFixed(1)}</h2>
                              <h2>{selected === i ? '-' : '+'}</h2>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                              
                              <ProfessorReviews reviewData={profName.reviews}/>
                            </div>
                          </div>
                        )
                      }
                    })()}
                    </div>
                    )
                  })
                }
              </div>
              {(() => {
                if (!foundFlag) {
                  return (
                    <center><div id='no-course-found'>
                      no professor found with that name!
                    </div></center>
                  )
                }
              })()}
            </div>
          )
        }
      })()}

    <br></br>
    <br></br>
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