import React from 'react'
import './Mycourse.css'
import ReactPlayer from 'react-player'
import Quiz from 'react-quiz-component';
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";
import FooterNew from './FooterNew';
import './Footer.css'
import { data1, data2, data3, data4, data5, data6, data7 } from './Data1.js'
const Mycourse = () => {
    return (
        <>
            <Navbar
                signup={<Button>Students Sign Up</Button>}
                teachers_signup={<Button>Teachers Sign Up</Button>}
                students_login={<Button>Students Log In</Button>}
                teachers_login={<Button>Teachers Log In</Button>}
            />
            <div className="container">
                <div className="stage-container" className="stage-container">
                    <div className="Stage">
                        <h1>Stage 0 - Setting up a Text Editor</h1>
                    </div>
                    <div className="videos-wrapper">
                        <div className="video">
                            <h2>Setting up VSCode</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=fnPhJHN0jTE' />
                        </div>
                        <div className="video">
                            <h2>Setting up VSCode (+ Python) [Windows]</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=fnPhJHN0jTE' />
                        </div>
                        <div className="video">
                            <h2>Setting up VSCode (+ Python) [Mac]</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=fnPhJHN0jTE' />
                        </div>
                    </div>
                    <div className="resources">
                        <h2>Resources - </h2><p>Other popular editors are Sublime Text, Atom and Notepad++. If you’re a God posing as a
                            human, you might also prefer Vim or Emacs.</p>
                    </div>
                </div>

                <div className="stage-container" className="stage-container">
                    <div className="Stage">
                        <h1>Stage 1 - Basic web development</h1>
                    </div>
                    <div className="videos-wrapper">
                        <div className="video">
                            <h3>HTML</h3>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=UB1O30fR-EE' />
                        </div>
                        <div className="video">
                            <h2>CSS</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=yfoY53QXEnI' />
                        </div>
                        <div className="video">
                            <h2>JavaScript</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=hdI2bqOjy3c&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX' />
                        </div>
                        <div className="video">
                            <h2>JavaScript OOP Concepts</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=vDJpGenyHaA' />
                        </div>
                        <br />
                        <a href="http://eloquentjavascript.net/">For Proof Reading (click here)</a>
                        <div className="video">
                            <h2>JavaScript ES6/ES7/ES8</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=nZ1DMMsyVyI' />
                        </div>
                    </div>
                    <div className="resources">
                        <h2>Resources - </h2><p>You could also refer the Bible - <a href="https://developer.mozilla.org/en-US/docs/Web/Tutorials.">Click here</a><br />
                            Another amazing resource for beginners - <a href="https://www.w3schools.com/.">Click here</a><br />
                            Have a look at this too - <a href="https://github.com/djunicode/resources#javascript.">Click here</a><br />
                            Look for other videos, articles, etc. on these topics as well and make sure that you are
                            comfortable with building simple, responsive, dynamic websites.
                            Now - make them. Make at least two websites about anything you feel like. A good starting
                            point is a resume/profile website. This could come in handy in the future as wel</p>
                    </div>
                    <div className="Stage">
                        <Quiz quiz={data1} shuffle={true} />
                    </div>
                </div>

                <div className="stage-container" className="stage-container">
                    <div className="Stage">
                        <h1>Stage 1.5 - Intermediate frontend development (optional)</h1>
                    </div>
                    <div className="videos-wrapper">
                        <div className="video">
                            <h2>Bootstrap</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=4sosXZsdy-s' />
                        </div>
                        <div className="video">
                            <h2>Flexbox</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=JJSoEo8JSnc' />
                        </div>
                        <div className="video">
                            <h2>jQuery</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=HgvIox6ehkM' />
                        </div>
                        <div className="video">
                            <h2>Visualizations </h2>
                            <p>Libraries like D3.js and Chart.js are extremely powerful for making
                                production-grade visualizations. They are easy to learn (not so easy to master) and can
                                take your website to the next level.</p>
                        </div>
                    </div>
                    <div className="resources">
                        <h2>Resources - </h2><p>
                            Bootstrap <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">Click here</a><br />
                            Jquery <a href="https://api.jquery.com/">Click here</a><br />
                        </p>
                        <Quiz quiz={data2} shuffle={true} />
                    </div>
                </div>
                <div className="stage-container" className="stage-container">
                    <div className="Stage">
                        <h1>Stage 2 - The Terminal, Git and GitHub</h1>
                    </div>
                    <div className="videos-wrapper">
                        <div className="video">
                            <h2>Command Prompt (Windows)</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/playlist?list=PL6gx4Cwl9DGDV6SnbINlVUd0o2xT4JbMu' />
                        </div>
                        <div className="video">
                            <h2>Bash (Mac)</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=oxuRxtrO2Ag' />
                        </div>
                        <div className="video">
                            <h2>Git and GitHub</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=SWYqp7iY_Tc' />
                        </div>
                        <Quiz quiz={data3} shuffle={true} />
                    </div>
                </div>
                <div className="stage-container" className="stage-container">
                    <div className="Stage">
                        <h1>Stage 3 - The Internet</h1>
                        <p>Perhaps the most important stage of all. It has next-to-nothing to do with programming but
                            only with understanding how the web is structured on a very basic level.
                            Do not cut any corners while studying these things.
                        </p>
                    </div>
                    <div className="videos-wrapper">
                        <div className="video">
                            <h2>The Internet vs the Web</h2>
                            <p><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server">READ HERE</a></p>
                        </div>
                        <div className="video">
                            <h2>What is a Web Server?</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=fnPhJHN0jTE' />
                        </div>
                        <div className="video">
                            <h2>HTTP</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=eesqK59rhGA' /><br />
                            <ReactPlayer width="480px" height="240px" controls url='https://youtu.be/iYM2zFP3Zn0' />
                            <p>Resources:<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview">Click Here</a></p>
                        </div>
                        <div className="video">
                            <h2>Client-Server model</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=L5BlpPU_muY' />
                        </div>
                        <div className="video">
                            <h2>URLs, URIs and URNs</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=vpYct2npKD8' />
                        </div>
                        <div className="video">
                            <h2>JSON</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=GpOO5iKzOmY' />
                        </div>
                        <div className="video">
                            <h2>What is an API?</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=s7wmiS2mSXY' />
                        </div>
                        <div className="video">
                            <h2>REST</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=7YcW25PHnAA' /><br />
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=FOZtRzY5x8E' /><br />
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=Q-BpqyOT3a8' />
                        </div>
                    </div>
                    <div className="resources">
                        <p>A helpful exercise after understanding these concepts is to learn how APIs are ‘consumed’
                            and building a simple program in your preferred language to grab some information from a
                            public API.You can do this quite simply in Python using the requests module.
                            In JavaScript you can do this via fetch or axios. Avoid using callbacks and try to use modern
                            features such as Promises wherever you can.</p>
                    </div>
                    <Quiz quiz={data4} shuffle={true} />
                </div>
                <div className="stage-container" className="stage-container">
                    <div className="Stage">
                        <h1>Stage 4:Advanced frontend development</h1>
                    </div>
                    <div className="videos-wrapper">
                        <div className="video">
                            <h2>Reactjs</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=4UZrsTqkcW4&t=5s' /><br />
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=DLX62G4lc44&t=2s' />
                            <p>React docs :<a href="https://reactjs.org/docs/getting-started.html">CLICK HERE</a></p>
                        </div>
                        <div className="video">
                            <h2>Angularjs</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=oxuRxtrO2Ag' />
                            <p>Angular docs :<a href="https://angular.io/docs">CLICK HERE</a></p>
                        </div>
                        <div className="video">
                            <h2>Vuejs</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=FXpIoQ_rT_c' />
                            <p>Vue docs :<a href="https://vuejs.org/v2/guide/">CLICK HERE</a></p>
                        </div>
                        <p>Resources:<a href="https://reactresources.com/">Click Here</a></p><br />
                        <p>GitHub Resources:<a href="https://github.com/nareshbhatia/react-learning-resources">Click here </a></p>
                    </div>
                    <Quiz quiz={data5} shuffle={true} />
                </div>
                <div className="stage-container" className="stage-container">
                    <div className="Stage">
                        <h1>Stage 5:Backend development</h1>

                    </div>
                    <div className="videos-wrapper">
                        <div className="video">
                            <h2>Backend development with Python</h2>
                            <p>The biggest advantage of choosing this route is Python itself. Up until now, we have only
                                covered JavaScript and as powerful and versatile as it may be, knowing Python is a must. It
                                is much easier to learn, is cleaner than JavaScript and is the go-to choice for data science.
                                And hence, this is a great option to get adept at the language via a different domain.
                                These frameworks also allow you to integrate Python code seamlessly into your web
                                applications which is super, super helpful.</p>
                            <h2>Django</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=F5mRW0jo-U4' />
                            <p>Resources</p><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction"></a>
                        </div>
                        <div className="video">
                            <h2>Flask</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=lj4I_CvBnt0' />
                        </div>
                        <div className="video">
                            <h2>Backend development with JavaScript</h2>
                            <p>
                                NodeJS is a JavaScript runtime environment and ExpressJS is a NodeJS framework that
                                provides a robust set of features for web application development. An overview of Node
                                and Express can be found here https://developer.mozilla.org/en-US/docs/Learn/Serverside/Express_Nodejs/Introduction.
                                Its primary advantage is that it serves as the second and final piece of the puzzle and
                                brings all of web development under JavaScript. Given your proximity with JavaScript until
                                now, you wouldn’t have to learn any new language. Its concepts are fairly easy to grasp as
                                well and it allows phenomenal customization. This is obviously very useful, but could be
                                intimidating as you might feel like you have too many options.
                                Also, Node by-far offers the most internship opportunities. Keep that in mind while making
                                your choice.
                                If you end up making this choice, make sure you understand things like npm, the event
                                loop and what async code means. You should be moderately comfortable with this having
                                covered modern JavaScript features. Also, unlike Django, Node does not have out-of-thebox support for databases. Given that Node’s ecosystem is largely community-driven, most
                                people prefer using non-relational databases with it (most popularly MongoDB) and
                                hence, that is another skill you will have to pick up on.
                            </p>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=Oe421EPjeBE' /><br />
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=yEHCfRWz-EI&list=PLsyeobzWxl7occsESx2X1E2R2Uw5wCoeG' /><br />
                            <ReactPlayer width="480px" height="240px" controls url=' https://www.youtube.com/watch?v=L72fhGm1tfE' />


                            <p>Nodejs docs :<a href="https://www.bing.com/search?q=Node+js&pc=COS2&ptag=D090720-N0640AF75BAE01A83A43AB87F&form=CONBDF&conlogo=CT3331983">CLICK HERE</a></p>
                        </div>
                    </div>
                    <Quiz quiz={data6} shuffle={true} />
                </div>
                <div className="stage-container" className="stage-container">
                    <div className="Stage">
                        <h1>Stage 6:Database Management</h1>
                    </div>
                    <div className="videos-wrapper">
                        <div className="video">
                            <h2>SQL database</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=WmGgxTpGs_8' />
                        </div>
                        <div className="video">
                            <h2>Sql and reactjs </h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=re3OIOr9dJI' />
                        </div>
                        <div className="video">
                            <h2>PostgreSQL</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=qw--VYLpxG4' />
                        </div>
                        <div className="video">
                            <h2>Non-relational Database(MongoDB) </h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=lBBtq3Oawqw' />
                        </div>
                        <div className="video">
                            <h2>Mongodb with nodejs </h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=rMiRZ1iRC0A' />
                        </div>
                        <div className="video">
                            <h2>Reactjs + Firebase </h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=Oi4v5uxTY5o&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3' />
                        </div>
                        <div className="resources">

                            <h2>Resources - </h2><p>Other popular editors are Sublime Text, Atom and Notepad++. If you’re a God posing as a
                                human, you might also prefer Vim or Emacs.</p>
                        </div>

                    </div>
                    <Quiz quiz={data7} shuffle={true} />
                </div>
                <div className="stage-container" className="stage-container">
                    <div className="Stage">
                        <h1>Stage 7:Practice Projects </h1>
                    </div>
                    <div className="videos-wrapper">
                        <div className="video">
                            <h2>React</h2>
                            <ReactPlayer width="480px" height="240px" controls url='youtube.com/watch?v=Nl54MJDR2p8&t=11551s' />
                        </div>
                        <div className="video">
                            <h2>Django</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=YZvRrldjf1Y' />
                        </div>
                        <div className="video">
                            <h2>Node and express</h2>
                            <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=Dkh2IjrAkVI&t=1064s' />
                        </div>
                    </div>

                </div>
                <div className="resources">
                    <h1>Closing Notes</h1>
                    <p>You are now a Jedi. You possess enough knowledge to judge how you wish to proceed further.
                        You could choose to continue down this path, or you could choose to jump into unfamiliar
                        waters, like Data Science or Crypto or IoT or something entirely different - there are far too
                        many fields to list here.
                        This was only the beginning - your journey doesn’t end here!
                        Go on - find out for yourself what the world of Computer Engineering holds for you.
                        All the very best.</p>
                </div>
                <div>
                    <h1>References</h1>
                    <h2>Youtube channels</h2>
                    <p>Traversy Media ,FreeCodeCamp,Edureka,Web concepts,Brian Design,Telusko,Net Ninja,webdevsimplified,Codevolution.
                    </p>
                </div>

            </div>
            <FooterNew />
        </>
    )
}

export default Mycourse
