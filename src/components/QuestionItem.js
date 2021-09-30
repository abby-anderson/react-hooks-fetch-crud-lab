import React from "react";

function QuestionItem({ question, handleDeleteItem }) {
  const { id, prompt, answers, correctIndex } = question;

  //console.log('questionitem from questionlist', question)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));


  function handleChangeItem (event) {
    console.log('question answer changed', event.target.value)

    // ** dex passes the event that way we can grab the event.target.value as the new chosen answer

    //patch request to change the correctindex to the one that we chose in the drop down
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correctIndex: event.target.value
      }),
    }) 
    .then(response => response.json())
    .then(data => console.log(data) )


  }







  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={(e) => handleChangeItem(e)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => handleDeleteItem(question)}>Delete Question</button> 
      {/* handleDeleteItem is in List---also!! remember to call it like this rather than passing it event in an anonymous callback */}
      {/* and handleChangeItem is actually here in this component */}
    </li>
  );
}

export default QuestionItem;
