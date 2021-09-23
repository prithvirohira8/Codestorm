import React from 'react'
import Button from '@material-ui/core/Button';


const DisplayCourse = ({courses,setcourse_description,setcourse_id,}) => {
    return (
        <div>{
             courses && courses.map((course,id) => 
                    <div>
                        <h2>Course Name: {course.Course_Details.Name}</h2>
                        <h2>Description: {course.Course_Details.Description}</h2>
                        <Button onClick={() => {
                            setcourse_id(id);
                            setcourse_description(true);
                        }}variant="contained" color="secondary" >Learn More</Button>
                        <br/>
                        <br/>
                    </div>
                    )
             }
        </div>
    )
}

export default DisplayCourse
