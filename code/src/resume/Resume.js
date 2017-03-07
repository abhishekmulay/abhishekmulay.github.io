/**
 * Created by abhishek on 3/6/17.
 */


import React, {Component} from 'react';
import './resume.css'

class Resume extends Component {
    render() {
        return (
            <div className="container-fluid" id="resume">

                {/*<!--main wrapper-->*/}
                <div className="row">
                    {/*<!--padding for big screen-->*/}
                    <div className="col-lg-1"></div>

                    {/*<!--actual content here-->*/}
                    <div className="col-lg-10 col-xs-12">

                        {/*<!--contact details and photo row-->*/}
                        <div className="row contact">
                            <div className="col-md-10 col-xs-12">
                                <div className="row">
                                    <div className="col-xs-12 text-md-left text--center">
                                        <h1>Abhishek Mulay</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 text-md-left text--center">
                                        <span className="h5"> Problem Solver </span><span className="fa fa-circle fa-1 dot"></span>
                                        <span className="h5">Programmer </span> <span className="fa fa-circle fa-1 dot"></span>
                                        <span className="h5">Product Guy</span>
                                    </div>
                                </div>
                                <div className="row color-soft">
                                    <div className="col-sm-4 text-md-left col-xs-12 text--center">
                                        <span className="fa fa-envelope-o"></span>
                                        <span>abhishek_mulay@hotmail.com</span>
                                    </div>
                                    <div className="col-sm-4 text-md-left col-xs-12 text--center">
                                        <span className="fa fa-mobile"></span>
                                        <span>+1 (857) 206-9100 </span>
                                    </div>
                                    <div className="col-md-4 text-md-left hidden-xs-down">
                                        <span className="fa fa-map-marker"></span>
                                        <span>Boston, MA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-xs-12">
                                <figure className="center-block">
                                    <div alt="Abhishek" className="profile-pic"></div>
                                </figure>
                            </div>
                        </div>

                        {/*<!--content columns-->*/}
                        <div className="row content">

                            {/*<!--left colurm-->*/}
                            <div className="col-md-8 col-xs-12">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="row">
                                            <div className="col-xs-12  section-heading">
                                                <h3>Software Development Experience</h3></div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="row work-ex">
                                            <div className="col-xs-12">
                                                <h4>Software Engineer/ Front End Architect</h4>
                                            </div>
                                            <div className="col-xs-4">
                                                <span className="company-name"> <h5> Mezi</h5></span>
                                            </div>
                                            <div className="col-xs-4  color-soft">
                                                <span className="fa fa-calendar-check-o"></span>Jul, 2015 - Oct, 2016
                                            </div>
                                            <div className="col-xs-4  color-soft">
                                                <span className="fa fa-map-marker"></span>
                                                <span className="location">Pune, IN/ Sunnyvale, US</span>
                                            </div>
                                            <div className="col-xs-12 description">
                                                <ul className="list-group">
                                                    <li className="list-group-item"> Worked closely with CTO & VP of Product for product vision and roadmap</li>
                                                    <li className="list-group-item"> Architected and developed highly performant, world className conversational commerce webapp</li>
                                                    <li className="list-group-item"> Owned more than 70 % codebase of Webapp written in Angular js</li>
                                                    <li className="list-group-item">Tech stack: Angular.js/Angular 2, Python, Google App Engine, HTML, CSS</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="row work-ex">
                                            <div className="col-xs-12">
                                                <h4>Software Engineer</h4>
                                            </div>
                                            <div className="col-xs-4">
                                                <span className="company-name"> <h5>CDK Global/ ADP</h5> </span>
                                            </div>
                                            <div className="col-xs-4  color-soft">
                                                <span className="fa fa-calendar-check-o"></span>Jun, 2013 - Jul, 2015
                                            </div>
                                            <div className="col-xs-4  color-soft">
                                                <span className="fa fa-map-marker"></span>
                                                <span className="location">Pune, IN</span>
                                            </div>
                                            <div className="col-xs-12 description">
                                                <ul className="list-group">
                                                    <li className="list-group-item">  Developed high-performant, robust, mobile first features for automotive manufacturers and dealerships </li>
                                                    <li className="list-group-item">  Developed reusable widgets using Object Oriented Javascript</li>
                                                    <li className="list-group-item">  Wrote JavaScript unit tests with Jasmine in TDD style</li>
                                                    <li className="list-group-item">  Tech stack: Java, Apache Velocity, Oracle DB, Object Oriented JavaScript, Node.js, HMTL, CSS </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/*<!--left colurm ends -->*/}

                            {/*<!--right column-->*/}
                            <div className="col-md-4 col-xs-12">
                                <div className="row">
                                    <div className="col-xs-12 section-heading">
                                        <h3>Education</h3>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="row education">
                                            <div className="col-xs-12">
                                                M. S. Computer Science
                                            </div>
                                            <div className="col-xs-12">
                                                Northeastern University, Boston, US
                                            </div>
                                            <div className="col-xs-12 color-soft">
                                                <span className="fa fa-calendar-check-o"></span> Jan 2017 - Dec 2018 (expected)
                                            </div>
                                        </div>

                                        <div className="row education">
                                            <div className="col-xs-12">
                                                B. Tech. Computer Science
                                            </div>
                                            <div className="col-xs-12">
                                                Walchand College of Engineering, Sangli, IN
                                            </div>
                                            <div className="col-xs-12  color-soft">
                                                <span className="fa fa-calendar-check-o"></span> Jun 2009 - May 2013
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 section-heading">
                                        <h3>Skills</h3>
                                    </div>
                                    <div className="col-xs-12 skills">
                                        <span className="pill">HTML</span> <span className="pill">CSS</span> <span className="pill">Javascript</span> <span className="pill">Angular JS</span>
                                        <span className="pill">Node JS</span> <span className="pill">Java</span> <span className="pill">Python</span>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- right column ends -->*/}

                        </div>
                    </div>

                    {/*<!--padding for big screen-->*/}
                    <div className="col-lg-1"></div>
                </div>

            </div>
        );
    }
}

export default Resume;