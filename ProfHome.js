import React from 'react'

export default function ProfHome() {
  return (
    <div>
        <div className="professor-home-title">
          Here is a list of professors with the top rated professors at the top:
        </div>
        <div className="results">
          <div className="result-card">
            <div className="professor-name-and-rating">
              <div className="prof-name">
                Mr. Professor
              </div>
              <div className="prof-rating">
                5.0
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
                4.9
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
