import React, { useState,useRef,useEffect } from 'react';
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
    const [name,setName] = useState();
    const [CreateCourse,setCreateCourse] = useState(false);
    const { logout, currentUser } = useAuth();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [button, setButton] = useState("");
    const [CourseName, setCourseName] = useState("");

    async function handleLogout() {
        try {
            await logout();
            history.push('/');
        }
        catch {
            alert('Failed to Logout');
        }
    }

    const undefined = async() => {
        const teacher_info_ref = app.database().ref('Teachers/'+currentUser.uid)
        const teacher_info = []
        await teacher_info_ref.once('value').then((snapshot) => {
        teacher_info.push(snapshot.val())
        })
        setName(teacher_info[0].Name)
    }

      useEffect(() => {
          undefined();
      }, [])

    function handleSubmit(e) {
        e.preventDefault();
        const Course_Ref = app.database().ref('Courses/'+CourseNameRef.current.value)
        setCourseName(CourseNameRef.current.value)
        const Course_info = {
            Name: CourseNameRef.current.value,
            Description: CourseDescriptionRef.current.value,
            Forum: [1,2,3],
            VideoTitle: "", 
            VideoDescription: "",      
            VideoLink: "",
            no_of_likes: 0,
            No_of_students_enrolled: 0
        }
        Course_Ref.child('Course_Details').set(Course_info)
        setCreateCourse(true);
     }

     function handleSubmit1(e) {
        e.preventDefault();
        const Topic_Ref = app.database().ref('Courses/'+CourseName)
        const Topic_info = {
            VideoTitle: CourseTopicNameRef.current.value,
            VideoDescription: TopicDescriptionRef.current.value,
            VideoLink: VideoLinkRef.current.value,
        }
        Topic_Ref.push(Topic_info)
        setCreateCourse(true);
     }

     function push(){
         setCreateCourse(false);
     }

    return (
        <>
            <Navbar
                logout={<Button onClick={handleLogout}>Log Out</Button>} updateProfile={<Button><Link to='/updateProfile'>Update Profile</Link></Button>}/>
            <div>
                <h1>Instructor's Dashboard</h1>
                <h3>Hello {name}</h3>
            </div>

            {
                CreateCourse ?
                (
                    <div>
                        <form onSubmit={handleSubmit1} className={classes.root} >
                        <TextField id="outlined-basic" label="Topic Name" variant="outlined"  required inputRef={CourseTopicNameRef} />
                        <br />
                        <br /> 
                        <TextField id="outlined-basic" label="Topic Description" variant="outlined" required inputRef={TopicDescriptionRef} />
                        <br />
                        <br />  
                        <TextField id="outlined-basic" label="Video Link" variant="outlined" required inputRef={VideoLinkRef} />
                        <br /> 
                        <br />
                        <Button type='submit' disabled={loading} variant="contained" color="secondary">
                           Add Topic
                        </Button>
                        </form>
                        <br /> 
                        <br />
                        <Button onClick={push} disabled={loading} variant="contained" color="secondary">
                          Add Course
                        </Button>
                    </div>
                )
                :
                (
                    <form onSubmit={handleSubmit} className={classes.root} >
                     <TextField id="outlined-basic" label="Course Name" variant="outlined" required inputRef={CourseNameRef} />
                     <br />
                     <br />
                     <TextField id="outlined-basic" label="Description" variant="outlined" required inputRef={CourseDescriptionRef} />
                     <br /> 
                     <br />
                     <Button type='submit' disabled={loading} variant="contained" color="secondary">
                        Create Course
                     </Button>
                     </form>
                )
            }
        </>
    );
}
