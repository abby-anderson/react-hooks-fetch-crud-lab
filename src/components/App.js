import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [newQuestion, setNewQuestion] = useState([]);

  function addNewQuestion (data) {
    console.log('addnewquestion in app', data)
    setNewQuestion(data);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addNewQuestion={addNewQuestion} setPage={setPage} /> : <QuestionList newQuestion={newQuestion} />}
    </main>
  );
}

export default App;
