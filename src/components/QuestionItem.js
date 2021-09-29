import React from "react";

function QuestionItem({ question, handleDeleteItem, handleChangeItem }) {
  const { id, prompt, answers, correctIndex } = question;

  console.log('questionitem from questionlist', question)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));




  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={() => handleChangeItem(question)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => handleDeleteItem(question)}>Delete Question</button> 
      {/* handleDeleteItem is in List---also!! remember to call it like this rather than passing it event in an anonymous callback */}
    </li>
  );
}

export default QuestionItem;
