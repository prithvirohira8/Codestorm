import React, {
    useState,
    useEffect
} from 'react';
import app from './firebase';
import Quiz from 'react-quiz-component';



const DisplayQuiz = ({ course_name }) => {
    const [quizSection, setQuizSection] = useState(false)
    // var data = {
    //     question: "",
    //     questionType: "text",
    //     answerSelectionType: "Single",
    //     answers: [],
    //     correctAnswer: "",
    //     explanation: "",
    //     messageForCorrectAnswer: "Correct answer. Good job. ",
    //     messageForIncorrectAnswer: "Incorrect answer. Please try again. ",
    //     point: "20"
    // }
    
    var dummy =[];
    var quiz = {
        quizTitle: "Quiz",
        quizSynopsis: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        questions: []


    }

    useEffect(async() => {
        const Quizinformation = async () => {
            const Quiz_info_ref = app.database().ref('Courses/' + course_name + '/Course_Details/Quiz');
            await Quiz_info_ref.once('value').then((snapshot) => {
                // console.log(snapshot.val())
                setQuizInfo(snapshot.val());
                // console.log(quizInfo)
                // Quiz.quizTitle = quizInfo.Quiztitle.Title
            })
        }
        await Quizinformation();
    }, [])

    const [quizInfo, setQuizInfo] = useState([])
    // console.log(quizInfo)


    
        if(quizInfo) { 
            Object.keys(quizInfo).map((que, id) => {

                var data = {

                    questionType: "text",
                    answerSelectionType: "Single",
                    answers: [],
                    messageForCorrectAnswer: "Correct answer. Good job. ",
                    messageForIncorrectAnswer: "Incorrect answer. Please try again. ",
                    point: "20"
                }

                if(que != "Quiztitle") {  
                data.question = quizInfo[que].Question;
                //console.log(quizInfo[que].Question)
                 console.log(data.question)
                data.answerSelectionType = quizInfo[que].answerSelectionType;
                data.answers=quizInfo[que].options;
                data.correctAnswer = quizInfo[que].correctAnswer;
                data.explanation = quizInfo[que].explanation;
                console.log(data)
                
                quiz.questions.push(data);
                dummy.push(data)
                // console.log(data)
                console.log(dummy)
                
                }
                
            })
            //Quiz.quizTitle = quizInfo.Quiztitle.Title
             console.log(quiz)
            
        }
   
    setTimeout(()=>{
        setQuizSection(true)
    }, 1000)


    return (
        <>
        { quizSection ?
        <div >
             <Quiz quiz={quiz} shuffle={true}/> 
        </div> :
        <h1>loading...</h1>
        }
        </>
    )
}

export default DisplayQuiz