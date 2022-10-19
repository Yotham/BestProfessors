import React from 'react'

export default function ClassHome() {
  return (
    <div>
        <div className="class-home-title">
          Here are the offered classes organized by subject (ie. CSCI):
        </div>
        <div className="results">
          <div className="result-card">
            <div className="professor-name-and-rating">
              <div className="prof-name">
                Class 1
              </div>
            </div>
            <ul className="descriptions">
              <li>
                <div className="professor-description">
                  <div className="comment">
                    Offered in the fall and spring
                  </div>
                </div>
              </li>
              <li>
                <div className="professor-description">
                  <div className="comment">
                    13/60 spots remaining
                  </div>
                </div>
              </li>
              <li>
                <div className="professor-description">
                  <div className="comment">
                    Prerequisites: Class1, Class2, Class3
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="result-card">
            <div className="professor-name-and-rating">
              <div className="prof-name">
                Class 2
              </div>
            </div>
            <ul className="descriptions">
              <li>
                <div className="professor-description">
                  <div className="comment">
                    Offered in the fall and spring
                  </div>
                </div>
              </li>
              <li>
                <div className="professor-description">
                  <div className="comment">
                    13/60 spots remaining
                  </div>
                </div>
              </li>
              <li>
                <div className="professor-description">
                  <div className="comment">
                    Prerequisites: Class1, Class2, Class3
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="result-card">
            <div className="professor-name-and-rating">
              <div className="prof-name">
                Class 3
              </div>
            </div>
            <ul className="descriptions">
              <li>
                <div className="professor-description">
                  <div className="comment">
                    Offered in the fall and spring
                  </div>
                </div>
              </li>
              <li>
                <div className="professor-description">
                  <div className="comment">
                    13/60 spots remaining
                  </div>
                </div>
              </li>
              <li>
                <div className="professor-description">
                  <div className="comment">
                    Prerequisites: Class1, Class2, Class3
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
