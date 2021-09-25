import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from './firebase';
const Quiz = ({CourseName}) => {

    const [quiztitle,setQuiztitle] = useState("");
    const [Question,setQuestion] = useState("")
    const [correctAnswer,setCorrectAnswer] = useState("");
    const [explanation,setExplanation] = useState("")
    const [option1,setOption1] = useState("")
    const [option2,setOption2] = useState("")
    const [option3,setOption3] = useState("")
    const [option4,setOption4] = useState("")
    const [visible,setVisible] = useState(false)
        
    

    var Quizref =firebase.database().ref(`Courses/${CourseName}/Course_Details/Quiz`);
   

     function handleSubmit1(e){
        
        const options =[];
        Quizref = firebase.database().ref(`Courses/${CourseName}/Course_Details/Quiz`);
        console.log(Quizref)
        options.push(option1,option2,option3,option4)
        console.log(options)
        console.log(option1)
        const Quiz_info ={
            

            Question:Question,
            questiontype:"text",
            questionPic:"",
            answerSelectionType:"single",
            options:options,
            correctAnswer:correctAnswer,
            messageForCorrectAnswer:"messageForCorrectAnswer",
            messageForIncorrectAnswer:"Incorrect answer. Please try again.",
            explanation:explanation


        }
        Quizref.push(Quiz_info);

        setQuestion("")
        setCorrectAnswer("")
        setOption1("")
        setOption2("")
        setOption3("")
        setOption4("")
        setExplanation("")
        e.preventDefault();




         
         

         
     }
    function handleSubmit(e) {
       // setCourseName(CourseNameRef.current.value)
        const Quiztitle_info = {
            Title:"quiz"
        }
        Quizref.set(Quiztitle_info);
        setVisible(true);
        e.preventDefault();
     }

    return (
        
        <div>
            <br />
            { visible ? (

                <>
                 <form>
          <TextField id="outlined-basic" placeholder="Question" value={Question} onChange={e => setQuestion(e.target.value)}  variant="outlined"  required  /><br/><br/>
          <TextField id="outlined-basic" placeholder="Option1" value={option1} onChange={(e) => {setOption1(e.target.value)}}  variant="outlined"  required  /><br/><br/>
          <TextField id="outlined-basic" placeholder="Option2" value={option2} onChange={(e) => {setOption2(e.target.value)}}  variant="outlined"  required  /><br/><br/>
          <TextField id="outlined-basic" placeholder="Option3" value={option3} onChange={(e) => {setOption3(e.target.value)}}  variant="outlined"  required  /><br/><br/>
          <TextField id="outlined-basic" placeholder="Option4" value={option4} onChange={(e) => {setOption4(e.target.value)}}  variant="outlined"  required  /><br/><br/>
          <TextField id="outlined-basic" placeholder="Correct Answer(option no.)" value={correctAnswer} onChange={e => setCorrectAnswer(e.target.value)}  variant="outlined"  required  /><br/><br/>
          <TextField id="outlined-basic" placeholder="Explanation" value={explanation} onChange={(e) => {setExplanation(e.target.value)}}  variant="outlined"  required  /><br/><br/>
          <Button type='submit' variant="contained" color="secondary" onClick={handleSubmit1}>
                          Add Question
                        </Button>
          </form>
                </>
            ) : (
                <>
                <form >
                {/* <TextField id="outlined-basic"  value={quiztitle} onChange={e => setQuiztitle(e.target.value)}  variant="outlined"  required  /> */}
                 <Button type='submit' variant="contained" color="secondary" onClick={handleSubmit}>
                  Create Quiz
                 </Button>
          </form>
                </>
            ) }
           
         
                
         </div>
            
            
    )
}

export default Quiz;
