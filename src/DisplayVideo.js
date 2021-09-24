import React from 'react'
import Button from '@material-ui/core/Button';
import firebase from './firebase';
import { Link, useHistory } from 'react-router-dom';


async function enroll() {
    var student_id_ref = firebase.database().ref('Students');
    const student_id = [];

    student_id_ref.on('value', (snapshot) => {
        const ids = snapshot.val();
        for (let id in ids) {
            student_id.push(id);
        }
        console.log(student_id);
    })
    if (currentUser == null) {
        history.push('/students_login')
    }
    else {
        
        student_id_ref = firebase.database().ref('Students/' + currentUser.uid+'/MyCourses');
        console.log("student_id_ref = "+student_id_ref);
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        const student_course_data = {
            Course_Name: courses[course_id].Course_Details.Name,
            Date_Enrolled: date
        }
        student_id_ref.push(student_course_data)
        setcourse_description(false);

        var course_ref  = firebase.database().ref('Courses/'+courses[course_id].id+'/Course_Details'); 
        var course_ref_info = [];
        await course_ref.once('value').then((snapshot) => {
            course_ref_info.push(snapshot.val());
        })
        console.log(course_ref_info)
        var x =  course_ref_info[0].No_of_students_enrolled;
        course_ref.update({
            No_of_students_enrolled: x + 1
        })    
    } 
}

const DisplayVideo = ({currentUser,course_id,setcourse_description,courses,history}) => {
    return (
        <div>
           <Button onClick={enroll} variant="contained" color="secondary">Enroll Now</Button>
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
        </div>
    )
}

export default DisplayVideo
