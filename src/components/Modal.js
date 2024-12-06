import React from "react";

export default function Modal(props) {

  // calling the toggle function in App component to update state
  const handleClick = () => {
    props.toggle();
  };

  // calling the clear function in App component to update state
  const clearResponses = () => {
    props.clear();
  };

  //map over allResults array from App component
  const mapResponses = () => {
    if (props.allResults) {
      const mapResults = props.allResults.map((response, index) => {
        return (
          <tr key={index}>
            <td className="table-question">{response.question}</td>
            <td className="table-answer">{response.answer}</td>
          </tr>
        );
      });
      return mapResults;
    }
  };

  return (
    <>
      <div className="modal font-20">
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>{mapResponses()}</tbody>
        </table>
        <div>
          {/* The clear responses button only renders if the user has asked questions previously */}
          {props.allResults.length > 0 && (<button className="font-20" onClick={clearResponses}>Clear Responses</button>)}
        </div>
        <div>
          <button className="font-20" onClick={handleClick}>
            Exit
          </button>
        </div>
      </div>
    </>
  );
}
