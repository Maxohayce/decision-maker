import React, { useState } from "react";
import './App.css';

const l = ["A:", "B:", "C:", "D:", "E:", "F:"];

function AskQuestion(props) {

    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", "", ""]);
    const [count, setCount] = useState(3);

    const addOption = () => {
        if (options.length < l.length) {
            let temp = options;
            temp.push("");
            console.log(options);
            setOptions(temp);
            setCount(count + 1);
        }
    }

    const handleOptionChange = (index) => (event) => {

        console.log("index is ", index);

        let temp = [...options];
        temp[index] = event.target.value;

        setOptions(temp);

        // console.log("Options are", options);
    }

    const onAnswerClick = () => {
        props.togglePage();

        let que = {question, options};

        props.addQuestion(que);
    }

    return (
        <div>
        
            <div className="container">
                <div className="main">
                    <form>
                        <p>Question</p>
                        <input
                         placeholder="Q: Enter your question..."
                          className="input"
                           value={question} 
                           onChange={event => setQuestion(event.target.value)}
                        />

                    <p style={{marginTop: 40}}>Options</p>
                        {
                            options.map((option, index) => (
                                <input key={index} placeholder={l[index]} className="input" value={options[index]} onChange={handleOptionChange(index)} />
                            ))
                        }
                    </form>
                </div>

                <div className="actions">
                    <button className="blue" onClick={() => addOption()} disabled={options.length >= l.length}>+ Add Option</button>
                    <button className="green" onClick={() => onAnswerClick()}>Answer ➜</button>
                </div>
            </div>
        </div>
    )
}

export default AskQuestion;