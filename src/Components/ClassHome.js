import React, { useState, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import Courses from './Courses';
import './ClassHome.css';

export default function ClassHome({ data }) {
  return (
    <div>
      <PaginatedItems itemsPerPage={5} data={data} />
    </div>
  );
}

function Items({ currentItems }) {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  if (currentItems.length === 0) {
    return <div className="course-cataloge">No courses found.</div>;
  }

  return (
    <div>
      <div className='course-cataloge'>
        {
          currentItems && currentItems.map((courseCode, i) => {
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


function PaginatedItems({ itemsPerPage, data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value.toUpperCase());
  };

  // This useMemo will always return the filtered data based on the search text
  const filteredData = useMemo(() => {
    if (!searchText) return data; // If no search text, return full data
    return data.filter((course) =>
      course.code.toUpperCase().includes(searchText)
    );
  }, [data, searchText]);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <>
      <input
        id="class-search-home"
        onChange={handleChange}
        type="text"
        placeholder="Search by course code...."
      />
      <Items currentItems={currentItems} />
      {searchText === '' && (
        <ReactPaginate
          containerClassName={'pagination'}
          pageClassName={'item'}
          activeClassName={'active-page'}
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
      )}
      <br />
      <br />
      <br />
    </>
  );
}
