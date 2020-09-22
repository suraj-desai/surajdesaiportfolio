import React from 'react';
class Education extends React.Component{
    render(){
        return(
          <div className="educationContainer"> 
            <div className="education">
                <h2>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    Education
                </h2>
                <hr/>
                <section className="educationBlock">
                    <div className="educationDate">June, 2016 - June, 2020</div>
                    <div>
                        <h3>Bachelor of Technology, Electronics and Communication
                            Engineering
                        </h3>
                        <h6>Indian Institute of Information Technology, Manipur</h6>
                    </div>
                    <div>
                        <ul>
                            <li>CGPA: 7.8/10</li>
                            <li>Delivered projects in the field of web and electronics </li>
                            <li>Part of many extra-curriculum activities like inter-IIIT sports meet and Coding Competions</li>
                        </ul>
                    </div>
                </section>
                <hr/>
                <section className="educationBlock">
                    <div className="educationDate">March, 2014 - March, 2016</div>
                    <div>
                        <h3>Higher Secondary School
                        </h3>
                        <h6>Sri. Chaitanya Junior College, Kompally, Hyderabad</h6>
                    </div>
                    <div>
                        <ul>
                            <li>Scored 97.5%</li>
                            <li>Part of debating and quizzing socities </li>
                        </ul>
                    </div>
                </section>
                <hr/>
                <section className="educationBlock">
                    <div className="educationDate">June, 2013 - March, 2014</div>
                    <div>
                        <h3>Secondary School
                        </h3>
                        <h6>Smt. Sarnaik School Washim, Maharashtra</h6>
                    </div>
                    <div>
                        <ul>
                            <li>Scored 95.6%</li>
                            <li>Cleared National Talent Search Examination </li>
                        </ul>
                    </div>
                </section>
                <hr/>
            </div>
          </div> 
        )
    }
}

export default Education;