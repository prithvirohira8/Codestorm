import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import firebase from './firebase';
import Button from '@material-ui/core/Button';
import { useAuth } from './Context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Courses() {

    const [courses, setcourses] = useState();
    const [course_id, setcourse_id] = useState();
    const [course_description, setcourse_description] = useState(false);
    const [courseName, setcourseName] = useState();
    const { currentUser } = useAuth();
    const history = useHistory();

    const undefined = async() => {
        const Courses_Ref = firebase.database().ref('Courses');
        const courseList = [];
        Courses_Ref.once('value').then((snapshot) => {
            const courses = snapshot.val();
            for(let id in courses){
                courseList.push({id, ...courses[id]})
            }
            setcourses(courseList)
        });
    }

    useEffect(() => {
        undefined()
    }, [])

    return (
        <>
             <Navbar />
             {
                 course_description ? 
                 (
                     <>
                        <Button onClick={() => {
                            setcourse_description(false);
                        }}variant="contained" color="secondary" >Go Back</Button>
                        <Button onClick={() => {

                            var student_id_ref = firebase.database().ref('Students');
                            const student_id = [];

                            student_id_ref.on('value', (snapshot) => {
                                const ids = snapshot.val();
                                for(let id in ids){
                                    student_id.push(id);
                                }
                                console.log(student_id);
                            })
                            if(currentUser==null){
                                history.push('/students_login')
                            }
                            else{
                                student_id_ref = firebase.database().ref('Students/'+currentUser.uid);
                                const current = new Date();
                                const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
                                const student_course_data = {
                                    Course_Name: courses[course_id].Course_Details.Name ,
                                    Date_Enrolled: date
                                }
                                student_id_ref.push(student_course_data)
                                setcourse_description(false);
                            }
                            

                        }} variant="contained" color="secondary">Enroll Now</Button>
                        <h1>{courses[course_id].Course_Details.Name}</h1>
                        <h3>{courses[course_id].Course_Details.Description}</h3>
                        {console.log(courses[course_id])}
                         { courses && Object.values(courses[course_id]).map((course,id) =>
                         <div>
                             <h2>{course.VideoTitle}</h2>
                             <h3>{course.VideoDescription}</h3>
                             <h3>{course.VideoLink}</h3>
                         </div> 
                         )
                         }
                     </>
                 )        
                  :
                 (
                    courses && courses.map((course,id) => 
                    <div>
                        <h2>Course Name: {course.Course_Details.Name}</h2>
                        <h2>Description: {course.Course_Details.Description}</h2>
                        <h5>Users enrolled: {course.Course_Details.no_of_students}</h5>
                        <h5>Likes: {course.Course_Details.no_of_likes}</h5>
                        <Button onClick={() => {
                            setcourse_id(id);
                            setcourse_description(true);
                        }}variant="contained" color="secondary" >Learn More</Button>
                        <br/>
                        <br/>
                    </div>
                    )
                 )   
             }
        </>
    )
}