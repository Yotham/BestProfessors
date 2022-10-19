import React from 'react'

export default function ClassResults() {
  return (
    <div>
        <div className="class-search-results-title">
          Showing results for {'{'}Class Name{'}'}:
        </div>
        <div className="results">
          <div className="result-card">
            <div className="professor-name-and-rating">
              <div className="prof-name">
                Mr. Professor
              </div>
              <div className="prof-rating">
                4.5
              </div>
            </div>
            <ul className="descriptions">
              <li>
                <div className="professor-description">
                  <div className="comment">
                    This professor was great!
                  </div>
                  <div className="author">
                    - Joe Shmoe
                  </div>
                </div>
              </li>
              <li>
                <div className="professor-description">
                  <div className="comment">
                    This professor was mid!
                  </div>
                  <div className="author">
                    - Joel Shmoel
                  </div>
                </div>
              </li>
              <li>
                <div className="professor-description">
                  <div className="comment">
                    This professor was bad!
                  </div>
                  <div className="author">
                    - Joely Shmoely
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="result-card">
            <div className="professor-name-and-rating">
              <div className="prof-name">
                Mr. Professor
              </div>
              <div className="prof-rating">
                4.5
              </div>
            </div>
            <ul className="descriptions">
              <li>
                <div className="professor-description">
                  <div className="comment">
                    This professor was great!
                  </div>
                  <div className="author">
                    - Joe Shmoe
                  </div>
                </div>
              </li>
              <li>
                <div className="professor-description">
                  <div className="comment">
                    This professor was mid!
                  </div>
                  <div className="author">
                    - Joel Shmoel
                  </div>
                </div>
              </li>
              <li>
                <div className="professor-description">
                  <div className="comment">
                    This professor was bad!
                  </div>
                  <div className="author">
                    - Joely Shmoely
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
