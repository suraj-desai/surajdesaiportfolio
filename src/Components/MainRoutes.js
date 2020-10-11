import React from 'react';
import {Link} from 'react-scroll';
const MainRoutes = function(){
        return(
        <div>
          <div className="navigation">
                <div>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                  >Home
                  </Link>
                </div>
                <div>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                  >About
                  </Link>
                </div>

                <div>
                  <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                  >
                    Education
                  </Link>
                </div>

                <div>
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                  >Projects
                  </Link>
                </div>
          </div>
        </div>
        )
};

export default MainRoutes;