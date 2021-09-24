import React,{useState,useEffect,useParams} from 'react'
import app from './firebase';
import firebase from './firebase';
import Button from '@material-ui/core/Button';
import { useHistory, Link } from 'react-router-dom';
import DisplayQuiz from './DisplayQuiz';

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
        <div>
            <h1>Courses</h1>
            {StudentCourse && Object.keys(StudentCourse).map((course,id) =>
                    
                   { if(course != "Course_Details"){
                       
                       return(
                        <div>
                            <h2>{StudentCourse[course].VideoTitle}</h2>
                            <h3>{StudentCourse[course].VideoDescription}</h3>
                            <video>
                            <h3>{StudentCourse[course].VideoLink}</h3>
                            </video>
                           
                            
                        </div>
                        
                        
                       )
                    } 
                })
                    
                    
                    }
              
              <DisplayQuiz course_name={match.params.course_name}/>
                <Link to="/students_dashboard">
                
                 <Button onClick={(e) => {
  

                    }} variant="contained" color="secondary" >go back</Button></Link>      
        </div>
    )
}

export default DisplayCourse
