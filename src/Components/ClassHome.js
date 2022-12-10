/* eslint linebreak-style: ["error", "windows"] */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import Courses from './Courses';
import './ClassHome.css';

/**
 * Generates the ClassHome page
 * @return {/classHome} The ClassHome page
 */
export default function ClassHome({data}) {
  return (
    <div>
      <PaginatedItems itemsPerPage={5} data={data} />
    </div>
  );
}

/**
 * Class dropdown
 * @return {class-dropdown} drop down associated with each class
 */
function Items({data}) {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
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
                      <Courses classData={ courseCode }/>
                    </div>
                  </div>
                </div>
              </div>
            );
          } )
        }
      </div>
    </div>
  );
}

/**
 * Paginates each part of the ClassHome page for final generation
 * @return {/classHome} The ClassHome page
 */
function PaginatedItems({itemsPerPage, data}) {
  // creating the offset
  const [itemOffset, setItemOffset] = useState(0);

  // simulate fetching items from source
  const endOffset = itemOffset + itemsPerPage;
  console.log('Loading items from ${itemOffset} to ${endOffset}');
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // click event handling
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log('User requested page number ${event.selected}, which is offset ${newOffset}');
    setItemOffset(newOffset);
  };

  // search event handling
  const [searchText, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value.toUpperCase());
    console.log('value is:', searchText);
  };

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
      <input id="class-search-home" onChange = {handleChange} type="text" placeholder="Search by course code...." />
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
            <div className='course-cataloge'>
              {
                data && data.map( (courseCode, i) => {
                  return (
                    <div className='class-home'>
                      {(() => {
                        if (courseCode.code.includes(searchText)) {
                          return (
                            <div key={ courseCode.code }>
                              <div>
                                <div className="code-title" onClick={() => toggle(i)}>
                                  <h2 id="code">{ courseCode.code }</h2>
                                  <h2 id="expand">{selected === i ? '-' : '+'}</h2>
                                </div>
                                <div className={selected === i ? 'class-card show' : 'class-card'}>
                                  <Courses classData={ courseCode }/>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })()}
                    </div>
                  );
                } )
              }
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
