import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";
const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let optionArray = [option1, option2, option3, option4];
  let [score, SetScore] = useState(0);
  let [result, setResult] = useState(false);
  const checkAnswer = (elem, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        elem.target.classList.add("correct");
        setLock(true);
        SetScore((prev) => prev + 1);
      } else {
        elem.target.classList.add("wrong");
        setLock(true);
        optionArray[question.ans - 1].current.classList.add("correct");
      }
    }
  };
  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      optionArray.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const reset=()=>{
    setIndex(0);
    setQuestion(data[0])
    SetScore(0)
    setLock(false)
    setResult(false)
  }
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1} {question.question}
          </h2>
          <ul>
            <li ref={option1} onClick={(elem) => checkAnswer(elem, 1)}>
              {question.option1}
            </li>
            <li ref={option2} onClick={(elem) => checkAnswer(elem, 2)}>
              {question.option2}
            </li>
            <li ref={option3} onClick={(elem) => checkAnswer(elem, 3)}>
              {question.option3}
            </li>
            <li ref={option4} onClick={(elem) => checkAnswer(elem, 4)}>
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {data.length} Questions
          </div>
        </>
      )}
      {
        result?<><h2>You Scored {score} out of {data.length}</h2>
        <button onClick={reset}>Reset</button></>:<></>
      }
      
    </div>
  );
};

export default Quiz;
