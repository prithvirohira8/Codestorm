import React, { PureComponent, useState, useEffect, useReducer } from 'react'
import './ForumStyles.css';
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import { useAuth } from '../Context/AuthContext';
import firebase from '../firebase';
import app from '../firebase';

// const data1 = [
//   {
//     "userId": "01a",
//     "comId": "012",
//     "fullName": "Riya Negi",
//     "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
//     "text": "Hey, Loved your blog! ",
//     "replies": [
//       {
//         "userId": "02a",
//         "comId": "013",

//         "fullName": "Adam Scott",
//         "avatarUrl": "https://ui-avatars.com/api/name=Adam&background=random",
//         "text": "Thanks! It took me 1 month to finish this project but I am glad it helped out someone!🥰"
//       },
//       {
//         "userId": "01a",
//         "comId": "014",

//         "fullName": "Riya Negi",
//         "avatarUrl": "https://ui-avatars.com/api/name=Riya&background=random",
//         "text": "thanks!😊"
//       }
//     ]
//   },
//   {
//     "userId": "02b",
//     "comId": "017",
//     "fullName": "Lily",
//     "text": "I have a doubt about the 4th point🤔",
//     "avatarUrl": "https://ui-avatars.com/api/name=Lily&background=random"
//   },
//   {
//     "userId": "01c",
//     "comId": "018",
//     "fullName": "Derek",
//     "text": "Great explanation!!!",
//     "avatarUrl": "https://ui-avatars.com/api/name=Derek&background=random"
//   }
// ]
// const ref = firebase.database().ref(`Courses/`);
//   ref.once('value').then((snap) => {
//     console.log(snap.val());
//   })

const Forum = ({ match }) => {
  const ref = firebase.database().ref(`Courses/${match.params.course_name}`)
  const fref = firebase.database().ref(`Courses/${match.params.course_name}/Course_Details/Forum`);

  useEffect(() => {
    ref.once('value', (snap) => {
      if (snap.val()) {
        fref.on('value', async (snapshot) => {
          if (snapshot.val()) {
            setComments(snapshot.val())
            setError(false)
          }
        })
      } else {
        setError(true)
      }
    })
    console.log(error)
  }, [])

  const [error, setError] = useState()
  const [comments, setComments] = useState([])
  const { currentUser } = useAuth();
  const [commentSection, setCommentSection] = useState(false)

  useEffect(() => {
    console.log(comments);
    if (comments.length != 0) {
      fref.set(comments);
    }
  }, [comments])
  // console.log(comments);
  const student_info = [];

  if (currentUser) {
    const student_info_ref = app.database().ref('Students/' + currentUser.uid)
    student_info_ref.on('value', (snapshot) => {
      student_info.push(snapshot.val())
    })
  }

  let count = 0
  comments && comments.map(i => { count += 1; i.replies && i.replies.map(i => count += 1) })

  setTimeout(() => {
    setCommentSection(true)
  }, 1000);

  return (
    <>
      {commentSection && !error && currentUser ?
        <div className="forum-container">
          <div className="commentSection">
            <div className="header">{count} Comments</div>
            <CommentSection currentUser={currentUser.uid && { userId: currentUser.uid, avatarUrl: `https://ui-avatars.com/api/name=${student_info[0].Name}-${student_info[0].LastName}&background=random`, name: student_info[0].Name + " " + student_info[0].LastName }} commentsArray={comments}
              setComment={setComments} />
          </div>
        </div> :
        <h1>Error</h1>
      }
    </>
  )
}


export default Forum;
