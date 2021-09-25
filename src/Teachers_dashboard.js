import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from './Context/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import app from './firebase';
import TextField from '@material-ui/core/TextField';
import Quiz from './Quiz';
import Display_teacher_courses from './Display_teacher_courses';
import "./Login.css";
import teacher from "./images/teacher.png";
import './anchor.css';
import FooterNew from './FooterNew';
import './Footer.css'
import Forum from './Forum/Forum';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Teachers_dashboard() {
    const CourseNameRef = useRef();
    const CourseTopicNameRef = useRef();
    const CourseDescriptionRef = useRef();
    const TopicDescriptionRef = useRef();
    const VideoLinkRef = useRef();
    const classes = useStyles();
    const [name, setName] = useState();
    const [CreateCourse, setCreateCourse] = useState(false);
    const { logout, currentUser } = useAuth();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [button, setButton] = useState("");
    const [CourseName, setCourseName] = useState("");
    const [display, setDisplay] = useState(false);

    var courses_display = [];
    var teacher_courses = [];
    let course_obj = {}

    async function viewcourse() {
        // const teacher_course_ref = app.database().ref('Teachers/' + currentUser.uid + '/MyCourses')
        // var teacher_courses = []
        // await teacher_course_ref.once('value').then((snapshot) => {
        //     console.log(snapshot.val())
        //     teacher_courses.push(snapshot.val());
        // })

        // teacher_courses = Object.values(teacher_courses[0]);
        // console.log(teacher_courses)
        // async function just_for_sake_of_async(course) {
        //     const course_ref = app.database().ref('Courses/' + course)
        //     await course_ref.once('value').then((snapshot) => {
        //         console.log(snapshot.val())
        //         course_obj = snapshot.val()
        //         courses_display.push(snapshot.val())
        //     })
        //     setTcourses(courses_display)
        // }
        // teacher_courses.map((course, id) => {
        //     just_for_sake_of_async(course)
        // })
        // console.log(courses_display)
        // // console.log(courses_display[0].Name)
        // console.log(courses_display)

        // console.log(course_obj)
    }

    async function handleLogout() {
        try {
            await logout();
            history.push('/');
        }
        catch {
            alert('Failed to Logout');
        }
    }

    function push() {
        setCreateCourse(false);
    }


    useEffect(() => {
        undefined();
        viewcourse();
    }, [])

    const undefined = async () => {
        const teacher_info_ref = app.database().ref("Teachers/" + currentUser.uid);
        const teacher_info = [];
        await teacher_info_ref.once("value").then((snapshot) => {
            teacher_info.push(snapshot.val());
        });
        setName(teacher_info[0].Name);
    };



    function handleSubmit(e) {
        e.preventDefault();
        const Course_Ref = app.database().ref('Courses/' + CourseNameRef.current.value)
        setCourseName(CourseNameRef.current.value)
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        const Course_info = {
            Name: CourseNameRef.current.value,
            Description: CourseDescriptionRef.current.value,
            Forum: [],
            VideoTitle: "",
            VideoDescription: "",
            VideoLink: "",
            no_of_likes: 0,
            No_of_students_enrolled: 0,
            AuthorUID: currentUser.uid,
            AuthorName: name,
            DateofCreation: date
        }
        Course_Ref.child('Course_Details').set(Course_info)

        const teachers_course_Ref = app.database().ref('Teachers')
        const teachers_course_details = {
            Name: CourseNameRef.current.value
        }
        teachers_course_Ref.child('MyCourses').set(teachers_course_details)
        setCreateCourse(true);
    }

    function handleSubmit1(e) {
        e.preventDefault();
        const Topic_Ref = app.database().ref('Courses/' + CourseName)
        const Topic_info = {
            VideoTitle: CourseTopicNameRef.current.value,
            VideoDescription: TopicDescriptionRef.current.value,
            VideoLink: VideoLinkRef.current.value,
            Quiz: ""
        }
        Topic_Ref.push(Topic_info)
        // const teachers_course_Ref = app.database().ref('Teachers/'+currentUser.uid+'/MyCourses')
        // teachers_course_Ref.push(Topic_info);
        setCreateCourse(true);
    }

    return (
        <div>
            <Navbar
                logout={<Button onClick={handleLogout}>Log Out</Button>}
                updateProfile={
                    <Button>
                        <Link to="/updateProfile">Update Password</Link>
                    </Button>
                }
            />

            <section style={{height: "1200px"}}>
                <div className="imgBx">
                    <div className="photo">
                        <img src={teacher} />
                    </div>
                </div>
                <div className="contentBx" style={{ flexDirection: "column" }}>
                    <div className="formBx"></div>
                    <div>
                        <h1>Instructor's Dashboard</h1>
                        <h3>Hey {name}</h3>< br />
                    </div>
                    {CreateCourse ? (
                        <div>
                            <form onSubmit={handleSubmit1} className={classes.root}>
                                <TextField
                                    id="outlined-basic"
                                    label="Topic Name"

                                    required
                                    inputRef={CourseTopicNameRef}
                                />
                                <br />
                                <br />
                                <TextField
                                    id="outlined-basic"
                                    label="Topic Description"

                                    required
                                    inputRef={TopicDescriptionRef}
                                />
                                <br />
                                <br />
                                <TextField
                                    id="outlined-basic"
                                    label="Video Link"

                                    required
                                    inputRef={VideoLinkRef}
                                />
                                <br />
                                <br />
                                <Button
                                    type="submit"
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        setDisplay(true);
                                    }}
                                    disabled={loading}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Add Topic
                                </Button>
                                {display && <Quiz CourseName={CourseName} /> }
                            </form>
                            <br />
                            <br />
                            <Button
                                onClick={push}
                                disabled={loading}
                                color="secondary"
                                variant="contained"
                            >
                                Add Course
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={classes.root}>
                            <TextField
                                id="outlined-basic"
                                label="Course Name"
                                required
                                inputRef={CourseNameRef}
                            />
                            <br />
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Description"
                                required
                                inputRef={CourseDescriptionRef}
                            />
                            <br />
                            <br />
                            <Button
                                type="submit"
                                disabled={loading}
                                variant="contained"
                                color="secondary"
                            >
                                Create Course
                            </Button>
                        </form>
                    )}
                </div>
            </section>
            <FooterNew />
        </div>
    );
}
