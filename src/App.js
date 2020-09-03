import React, { useState } from 'react';
import './App.css';
import AskQuestion from './AskQuestion';
import ViewQuestions from './ViewQuestions';

function App(props) {
  const [page, setPage] = useState(0);

  // Embeded in the question is the question id, question and options
  //{id: "", question: "", options: []}   maximum of 6 options
  const [questions, setQuestions] = useState([]);

  const togglePage = () => {
    if (page === 0) {
      setPage(1)
    } else setPage(0)
  }

  const addQuestion = (question) => {
    let temp = questions;

    let indexDuplicate = temp.findIndex((q) => q["question"].toLowerCase() === question["question"].toLowerCase());

    if (indexDuplicate !== -1) {
      // Run this if duplicate exist
      let count = temp[indexDuplicate]["count"];
      count++;
      temp[indexDuplicate] = {...temp[indexDuplicate], count};
      console.log("Modified Data is ", temp[indexDuplicate]);
      setQuestions(temp);
    } else {
      // run this if no duplicate exists
      temp.push({...question, count: 1});
      setQuestions(temp);
    }

    console.log("Questions are ", questions);
  }


  if (page === 0) {
    return (
      <div>
        <header className="header" style={{padding: "16px 0", backgroundColor: "#04627c"}}>
                <h1 style={{textAlign: "center", margin: 0, marginBottom: 8, color: "white"}}>
                  Welcome to our decision maker</h1>
                <p style={{textAlign: "center", margin: 0, marginBottom: 16, color: "white"}}>
                  You cant always carry the burden alone, whats your question? Your choice is at the click of a button</p>
            </header>
      <AskQuestion togglePage={togglePage} addQuestion={addQuestion}  />
      </div>
    )
  } else if (page === 1) {
    return (
      <div>
            <header className="header" style={{padding: "16px 0", backgroundColor: "#04627c"}}>
                <h1 style={{textAlign: "center", margin: 0, marginBottom: 8, color: "white"}}>
                Welcome to our decision maker</h1>
                <p style={{textAlign: "center", margin: 0, marginBottom: 16, color: "white"}}>
                  You cant always carry the burden alone, whats your question? Your choice is at the click of a button</p>
            </header>
      <ViewQuestions togglePage={togglePage} questions={questions} />
      </div>
    )
  }

  return null;
}

export default App;
