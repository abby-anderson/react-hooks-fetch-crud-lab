import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({newQuestion}) {
const [questions, setQuestions] = useState([])
  
  useEffect (() => {
    fetch('http://localhost:4000/questions')
    .then(response => response.json())
    .then(data => setQuestions(data))
  }, [])
  
  // *****important, now we have the newquestion but we need to figure out how to add it to this page!!
  //actually....i guess we're posting it to the questions db so it's auomatically being added....??

  //something like:
  // const updateQuestions = () => {
  //     const updatedQuestions = [...questions, newQuestion]
  //     setQuestions(updatedQuestions)
  //     console.log(questions)

  // }
  // if (newQuestion) {
  // } 
  //updateQuestions();

  function handleDeleteItem (question) {
    console.log('delete button clicked!')
    //console.log(event.target.parentNode.id) //whole list item
    console.log('id', question.id)

    //delete fetch to get rid of this question
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    }) 
    .then(response => response.json())
    .then(data => {
      console.log(data)
      //also taking the question away from the dom by updating state
      const filteredQuestions = questions.filter(each => {
        return each.id !==question.id
      })
      setQuestions(filteredQuestions)
    })
  }


  return (
    <section>
      <h1>Quiz Questions</h1>
      {console.log('questions from questionlist', questions)}
      {questions.map(eachQuestion => <ul> <QuestionItem handleDeleteItem={handleDeleteItem} question={eachQuestion} key={eachQuestion.id} /> </ul> )}
    </section>
  );
}

export default QuestionList;
