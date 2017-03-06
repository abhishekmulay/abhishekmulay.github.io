/**
 * Created by abhishek on 3/5/17.
 */
import React, {Component} from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="header row"></div>
                <div className="row">
                    <div className="col-lg-2 col-md-2"></div>
                    <div className="col-lg-4 col-md-4 col-xs-12 text-center">
                        <figure>
                            <div alt="Abhishek" className="profile-pic"></div>
                        </figure>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12 text-center name-container">
                        <h1 className="text-center">Abhishek Mulay</h1>
                        <h4 className="text-center text-muted"> Polyglot Software Engineer</h4>
                    </div>
                    <div className="col-lg-2 col-md-2"></div>
                </div>

                <div className="row introduction">
                    <div className="col-xs-12 col-md-8 col-md-offset-2">
                        <div className="text-lg-left font-120">
                            <div >Hello! 👋 I am Abhishek. I am a Software Engineer by profession and a geek by
                                nature.
                            </div>
                            <div>I am now back in college and studying Master's degree in Computer Science at
                                Northeastern University, Boston, MA.
                            </div>
                            <div >I have had my affairs with Java in past, but currently I am in love with Javascript
                                and Web in general.
                            </div>
                            <div >I am proficient in modern web technologies including Javascript, Typescript, Angular
                                1&2, React.
                            </div>
                            <div >I hate to use terms like Javascript Ninja! (What are your weapons? Callback Shuriken?
                                Closure Katana? 😂), I <i>promise</i> I am not this punny everytime! 🤓
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2 col-md-2"></div>
                    <div className="col-lg-4 col-md-4 skills-container">
                        <h4 className="text-center">Front End Skills</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="pull-left">HTML</div>
                                <div className="pull-right">
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                </div>
                                <div className="clearfix"></div>
                            </li>
                            <li className="list-group-item">
                                <div className="pull-left">
                                    CSS, SCSS, LESS
                                </div>
                                <div className="pull-right">
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                </div>
                                <div className="clearfix"></div>
                            </li>
                            <li className="list-group-item">
                                <div className="pull-left">
                                    JavaScript, Angular 1&2, React
                                </div>
                                <div className="pull-right">
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star half-star"></span>
                                </div>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 skills-container">
                        <h4 className="text-center">Back End Skills</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <span className="pull-left">Python</span>
                                <div className="pull-right">
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star empty-star"></span>
                                </div>
                                <div className="clearfix"></div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left">Java</span>
                                <div className="pull-right">
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star half-star"></span>
                                    <span className="star empty-star"></span>
                                </div>
                                <div className="clearfix"></div>
                            </li>
                            <li className="list-group-item">
                                <span className="pull-left"> Node.js, Express, Restify </span>
                                <div className="pull-right">
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star"></span>
                                    <span className="star half-star"></span>
                                    <span className="star empty-star"></span>
                                </div>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2"></div>
                </div>

                <div className="row text-center">
                    <a href="https://in.linkedin.com/in/abhishekmulay/">
                        <img className="social-icon" src="img/linkedin.png" alt="Abhishek on Linkedin"/>
                    </a>

                    <span className="text-muted text-center email"> abhishek_mulay [at] hotmail [dot] com </span>

                    <a href="https://github.com/abhishekmulay">
                        <img className="social-icon" src="img/github.svg" alt="Abhishek on Github"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default HomePage;