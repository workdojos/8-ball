import React, { useState } from "react";

export default function Form(props) {
  const [question, setQuestion] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleChange = event => {
    setQuestion(event.target.value);
  }

  //check for question mark and make fetch request, otherwise throw error
  const grabResults = async event => {
    event.preventDefault();
    setErrMsg("");
    if (question.substr(-1) === "?") {
      try {
        props.loading(true);
        let params = encodeURIComponent(`${question}`);
        let uri = "https://8ball.delegator.com/magic/JSON/" + params;
        const fetchRequest = await fetch(uri);
        const results = await fetchRequest.json();
        props.results(results.magic);
        props.loading(false);
        setQuestion("");
      } catch {
        setErrMsg("The request failed");
      }
    } else {
      setErrMsg("You need to include a question mark at the end of your question");
    }
  };

  return (
    <form onSubmit={grabResults} data-testid="form">
      <div className="text-center">
        <label htmlFor="question">
          <input
            type="text"
            id="question"
            placeholder="What is your question?"
            className="text-center font-20"
            onChange={handleChange}
            value={question}
            required
          ></input>
        </label>
        {errMsg && <div className="err font-20"> {errMsg} </div>}
        <div>
          <button type="submit" className="font-20">
            Ask the Magic 8-Ball
          </button>
        </div>
      </div>
    </form>
  );
}
