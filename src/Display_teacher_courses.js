import React, {
    useState,
    useEffect
} from 'react'
import app from './firebase';

const Display_teacher_courses = ({
    currentUser
}) => {


    const [tcourses, setTcourses] = useState();
    useEffect(() => {
        viewcourse()
    }, [])
    var courses_display = [];
    var teacher_courses = [];
    let course_obj = {}
    async function viewcourse() {

        const teacher_course_ref = app.database().ref('Teachers/' + currentUser.uid + '/MyCourses')
        var teacher_courses = []
        await teacher_course_ref.once('value').then((snapshot) => {

            console.log(snapshot.val())
            teacher_courses.push(snapshot.val());
        })

         teacher_courses = Object.values(teacher_courses[0]);
        console.log(teacher_courses)
        async function just_for_sake_of_async(course) {
            console.log(course)
            const course_ref = app.database().ref('Courses/' + course)
            await course_ref.once('value').then((snapshot) => {

                console.log("h1")
                console.log(snapshot.val())
                course_obj = snapshot.val()
                courses_display.push(snapshot.val())

            })
            setTcourses(courses_display)
        }
        teacher_courses.map((course, id) => {
            just_for_sake_of_async(course)
        })
        console.log(courses_display)
        // console.log(courses_display[0].Name)
        console.log(courses_display)
        console.log(tcourses)


    }


    return ( < div >


       {
           courses_display && Object.keys(courses_display).map (details => {
              
            <div>
            <h1>hello</h1>
           <h1>{details.VideoDescription}</h1>
           </div>
           })
       }
        
        
        </div>
    )
}

export default Display_teacher_courses