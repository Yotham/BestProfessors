/* eslint-disable linebreak-style */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React, {useState} from 'react';
import ProfessorReviews from './ProfessorReviews';
import ReactPaginate from 'react-paginate';
import './ProfHome.css';

/**
 * Generates the ProfHome page
 * @return {/ProfHome} The ProfHome page
 */
export default function ProfHome({data}) {
  return (
    <div>
      <PaginatedItems itemsPerPage={10} data={data} />
    </div>
  );
}
/**
 * ProfReview dropdown
 * @return {profReview-dropdown} drop down of reviews associated with each professor
 */
function Items({data, fullData}) {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      {/* <div id = "heading">Professors</div> */}
      <div className='prof-list'>
        {
          data && data
            .map((profName, i) => {
              return (
                <div>
                  <div className='prof-item' key={ profName.profName }>
                    <div className='prof-item-title' onClick={() => toggle(i)}>
                      <h2>{ profName.profname } - { profName.overall_rating.toFixed(1)}</h2>
                      <h2>{selected === i ? '-' : '+'}</h2>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}>
                      <ProfessorReviews reviewData={profName.reviews}/>
                    </div>
                  </div>
                </div>
              );
            })
        }
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

/**
 * Paginates each part of the ProfHome page for final generation
 * @return {/profHome} The ProfHome page
 */
function PaginatedItems({itemsPerPage, data}) {
  // creating the offset
  const [itemOffset, setItemOffset] = useState(0);

  // simulate fetching items from source
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // click event handling
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  // event handling for searchbar
  const [searchText, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value.toLowerCase());
    console.log('value is:', searchText);
  };
  let foundFlag = false;

  // dropdown menu event handling
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <input id="class-search-home" onChange = {handleChange} type="text" placeholder="Search by professor name...." />
      {(() => {
        if (searchText === '') {
          return (
            <div>
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
            </div>
          );
        } else {
          return (
            <div>
              <div className='prof-list'>
                {
                  data && data
                    .sort((a, b) => a.overall_rating < b.overall_rating ? 1 : -1)
                    .map((profName, i) => {
                      return (
                        <div>
                          {(() => {
                            if ((profName.profname.toLowerCase().includes(searchText) || searchText === '') && profName.overall_rating !== 0.0) {
                              foundFlag = true;
                              return (
                                <div className='prof-item' key={ profName.profName }>
                                  <div className='prof-item-title' onClick={() => toggle(i)}>
                                    <h2>{ profName.profname } - { profName.overall_rating.toFixed(1)}</h2>
                                    <h2>{selected === i ? '-' : '+'}</h2>
                                  </div>
                                  <div className={selected === i ? 'content show' : 'content'}>

                                    <ProfessorReviews reviewData={profName.reviews}/>
                                  </div>
                                </div>
                              );
                            }
                          })()}
                        </div>
                      );
                    })
                }
              </div>
              {(() => {
                if (!foundFlag) {
                  return (
                    <center><div id='no-course-found'>
                        no professor found with that name!
                    </div></center>
                  );
                }
              })()}
            </div>
          );
        }
      })()}
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
