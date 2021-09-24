import React, { useState, useEffect } from 'react';
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
import firebase from './firebase';
import Forum from './Forum/Forum';


import Quiz from 'react-quiz-component';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Students_dashboard() {

    const { logout, currentUser } = useAuth();
    const history = useHistory();
    // const [button, setButton] = useState("");
    // const [ref, setRef] = useState();
    const [loading, setLoading] = useState(false);
    // const [Name, setName] = useState("");
    // const [Lname, setLname] = useState("");
    // const [Age, setAge] = useState("");
    // const [College, setCollege] = useState("");
    // const [Email, setEmail] = useState("");
    const [course_name, setcourse_name] = useState("");
    // const [explore, setExplore] = useState();
    // const [courses, setcourses] = useState();
    const [Student_Profile, setStudent_Profile] = useState();
   
    const [render, Setrender] = useState();
    
    const [likeStatus,setLikeStatus] = useState(false);
    const [display,setDisplay] = useState(true)

    useEffect(() => {
        studentinformation();
       
    }, [])

    // useEffect(async() => {

    //     await student_course_information();
    //     //await Quizinformation();


    // }, [course_name])

    async function handleLogout() {
        try {
            await logout();
            history.push('/');
        }
        catch {
            alert('Failed to Logout');
        }
    }

    const student_info = [];
    // const student_course_info = [];
    const studentinformation = async () => {
        const student_info_ref = app.database().ref('Students/' + currentUser.uid);
        await student_info_ref.once('value').then((snapshot) => {
            student_info.push(snapshot.val());
            setStudent_Profile(student_info);
            setLoading(true);
        })
    }

    // const student_course_information = async () => {
    //     const course_info_ref = app.database().ref('Courses/' + course_name);
    //     await course_info_ref.once('value').then((snapshot) => {
    //         student_course_info.push(snapshot.val());
    //         setStudentCourse(student_course_info);
           
    //     })
    // }

    async function delete_course(){
        const student_info_ref = app.database().ref('Students/'+currentUser.uid+'/MyCourses');
        const delete_course = [];
        await student_info_ref.once('value').then((snapshot) => {
            delete_course.push(snapshot.val());
        })
       
        const course_keys =  Object.keys(delete_course[0])
        
        Object.values(delete_course[0]).map((course,id) => {
            if(course.Course_Name==course_name){
                const course_ref_delete = app.database().ref('Students/'+currentUser.uid+'/MyCourses/'+course_keys[id]);
                course_ref_delete.remove();
            }
        })
    }
 
     
    async function upvote_course(){
            var course_ref  = firebase.database().ref('Courses/'+course_name+'/Course_Details'); 
            var course_ref_info = [];
            await course_ref.once('value').then((snapshot) => {
                course_ref_info = (snapshot.val());
            })
           
            var y =  course_ref_info.No_of_students_enrolled;
            var x =  course_ref_info.no_of_likes;
            course_ref.update({
                no_of_likes: x + 1
            }) 
    }

    async function downvote_course(){
            var course_ref  = firebase.database().ref('Courses/'+course_name+'/Course_Details'); 
            var course_ref_info = [];
            await course_ref.once('value').then((snapshot) => {
                course_ref_info = (snapshot.val());
            })
         
            var x =  course_ref_info.no_of_likes;
            course_ref.update({
                no_of_likes: x - 1  
            }) 
    }

    // var Quiz_info = [];
    // var questions= [];
    // var Quiztitle = {

    //     quizTitle:"",
    //     quizSynopsis:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
    // }

    // const Quizinformation = async () => {
    //     const Quiz_info_ref = app.database().ref('Courses/'+course_name+'/Course_Details/Quiz');
    //     await Quiz_info_ref.once('value').then((snapshot) => {
    //         console.log(snapshot.val())
    //         Quiz_info = snapshot.val();
    //         console.log(Quiz_info.Quiztitle.Title)
    //         // console.log(snapshot.val())        
    //          setTitle(Quiz_info.Quiztitle.Title)
    //          Quiztitle.quizTitle = Quiz_info.Quiztitle.Title
    //         // console.log(Quiz_info)
    //          questions.push(Quiztitle)
    //          console.log(questions)
             
            
    //     })
    // }
    
    // var answers = []
    // var data = {
         
        
    //     question:"",
    //     questionType:"text",
    //     answerSelectionType:"Single",
    //     answers:answers,
    //     correctAnswer:"",
    //     explanation:"",
    //     messageForCorrectAnswer:"Correct answer. Good job. ",
    //     messageForIncorrectAnswer:"Incorrect answer. Please try again. ",
    //     point:"20"
       

    // } 

    return (
        <>
            <Navbar
                logout={<Button onClick={handleLogout}>Log Out</Button>}
                updateProfile={<Button><Link to='/updateProfile'>Update Profile</Link></Button>}
            />
            

                <>

                    
                    {/* {StudentCourse && Object.values(StudentCourse[0]).map((course) =>
                        <div>
                            <h2>{course.VideoTitle}</h2>
                            <h3>{course.VideoDescription}</h3>
                            <h3>{course.VideoLink}</h3>

                        </div>
                    )

                    }
                     */}
                    {/* { 
                            
                    Quiz_info && Object.values(Quiz_info[0]).map((que) =>

                        <div>

                            {
                                  
                               data.question=que.Question ,
                               data.answerSelectionType=que.answerSelectionType,
                               answers.push(que.options[0]),
                               answers.push(que.options[1]),
                               answers.push(que.options[2]),
                               answers.push(que.options[3]),
                               data.explanation = que.explanation,
                               questions.push(data)
                               

                            }
                           
                           
                             
                        </div>
                    )
                      

                    }

                             <Quiz questions={questions} shuffle={true}/> */}

                    <Link to={`/forum/${course_name}`} >
                        <Button variant="contained" color="secondary" >Go to Forum</Button>
                    </Link>


                    {/* <Button onClick={(e) => {

                        setExplore(false)

                    }} variant="contained" color="secondary" >go back</Button> */}
                </>
            

                <>

                    {
                        loading && Object.values(Student_Profile).map((info) =>
                            <div>
                                <h1>Students Dashboard</h1>
                                <h2>Name: {info.Name}</h2>
                                <h2>Last Name: {info.LastName}</h2>
                                <h2>Age: {info.Age}</h2>
                                <h2>College: {info.College}</h2>
                                <h2>Email: {info.Email}</h2>
                            </div>
                        )}

                    {loading && Object.values(Student_Profile[0].MyCourses).map((info) =>
                        <div>
                            {info.Course_Name && info.Course_Name!="" ?
                                <div>
                                    <h2>Course Name: {info.Course_Name}</h2>
                                    <h3>Date of Enrollment: {info.Date_Enrolled}</h3>
                                    <Link to={`/students_dashboard/${info.Course_Name}`}>
                                        <Button variant="contained" color="secondary" >Explore</Button>
                                    </Link>
                                    {
                                        likeStatus ? <Button onClick={() => {
                                            setLikeStatus(false);
                                            setcourse_name(info.Course_Name);
                                            downvote_course()
                                        }} variant="contained" color="secondary" >Downvote Course</Button>
                                        : <Button onClick={() => {
                                            setLikeStatus(true);
                                            setcourse_name(info.Course_Name);
                                            upvote_course();
                                        }} variant="contained" color="secondary" >Upvote Course</Button>
                                    }
                                    
                                    <Button onClick={() => {
                                        setcourse_name(info.Course_Name);
                                        delete_course()
                                    }} variant="contained" color="secondary" >Discontinue Course</Button>
                                    <br />
                                </div>
                                : ""
                            }
                        </div>
                    )}
                </>

            
        </>
    );
}