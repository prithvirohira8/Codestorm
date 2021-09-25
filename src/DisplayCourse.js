import React, { useState, useEffect, useParams } from 'react'
import app from './firebase';
import firebase from './firebase';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import DisplayQuiz from './DisplayQuiz';
import ReactPlayer from 'react-player';



const DisplayCourse = ({ match }) => {
    var student_course_info = [];
    const [StudentCourse, setStudentCourse] = useState();
    const student_course_information = async () => {
        const course_info_ref = app.database().ref('Courses/' + match.params.course_name);
        await course_info_ref.once('value').then((snapshot) => {
            student_course_info = (snapshot.val());
            setStudentCourse(student_course_info);

        })
    }

    useEffect(() => {
        student_course_information();
    }, [])

    return (
        <div style={{ margin: "1rem",  }}>
            <Link to="/students_dashboard">
                <Button variant="contained" color="secondary" >go back</Button>
            </Link>
            <Link to={`/forum/${match.params.course_name}`} style={{ float: "right" }}>
                <Button variant="contained" color="secondary" >Forum</Button>
            </Link>
            <h1>Courses</h1>
            {StudentCourse && Object.keys(StudentCourse).map((course, id) => {
                if (course != "Course_Details") {

                    return (
                        <div style={{ margin: "2rem" }}>
                            <h2>{StudentCourse[course].VideoTitle}</h2>
                            <h5>{StudentCourse[course].VideoDescription}</h5>
                            <ReactPlayer width="480px" height="240px" controls url={StudentCourse[course].VideoLink} />
                            <br />
                        </div>


                    )
                }
            })


            }
            <div className="quiz-container" style={{margin:"50px", border: "1px solid rgb(185, 185, 185)"}}>
                <center>
                <DisplayQuiz course_name={match.params.course_name} />
                </center>
            </div>
        </div>
    )
}

export default DisplayCourse
