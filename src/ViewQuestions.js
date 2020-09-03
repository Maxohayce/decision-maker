import React, { useEffect, useState } from "react";
import './App.css';

const l = ["A", "B", "C", "D", "E", "F"];

function ViewQuestions(props) {

    const [active, setActive] = useState();

    const getAllQuestions = () => {
        console.log("All Questions are ", props.questions);
        return props.questions;
    }

    const getLastQuestion = () => props.questions[props.questions.length - 1];

    const toggleOptions = () => {
        let max = getLastQuestion()["options"].length - 1;
        setActive(Math.floor(Math.random() * (max + 1)))
    }

    useEffect(() => {
        toggleOptions();
        return;
    })

    return (
        <div>
            {console.log("below...")}
            {console.log()}
            <div className="container">
                <p style={{marginBottom: 8}}>Question:</p>
                <p style={{fontSize: 30, margin: 0}}>{`${getLastQuestion()["question"]}${getLastQuestion()["question"].endsWith("?") ? "" : "?"}`}</p>
                <div style={{marginTop: 30}}>
                    <p style={{marginBottom: 8}}>Options:</p>
                    {
                        getLastQuestion().options.map((option, index) => (
                            <div key={index} style={{margin: "12px 0"}}>
                                <span className={active === index ? "active optionFont" : "optionFont"}>{l[index]}  </span>
                                <span className={active === index ? "active optionFont" : "optionFont"}>{option}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="actions">
                    <button className="green" onClick={() => toggleOptions()}>Toggle Options</button>
                    <button className="blue" onClick={() => props.togglePage()}>⬅︎ Ask New Question</button>
                </div>
                <div style={{marginTop: 16}}>
                    <p style={{color: "#05a7d4", fontWeight: "bold", textAlign: "center"}}>List of all asked questions in order of their popularity</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Popularity</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            getAllQuestions().map((question, index) => (
                                <tr key={index}>
                                    <td>{`${question["question"]}${question["question"].endsWith("?") ? "" : "?"}`}</td>
                                    <td>{question["count"]}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewQuestions;