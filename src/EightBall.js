import { useState } from "react";
import DEFAULT_ANSWERS from "./data/answers";
import "./EightBall.css";
import getRandomChoice from "./helpers";

/** Renders our Magic EightBall.
 *
 * Props:
 * - answers (defaults to answers imported from data)
 *
 * State:
 * - EightBallInfo: {msg, color}
 *
 * Helpers:
 * - getRandomChoice (returns random object)
 *
 * App -> EightBall
 */

function EightBall({ answers = DEFAULT_ANSWERS }) {
  const [eightBallInfo, setEightBallInfo] = useState({
    msg: "Think of a Question",
    color: "black"
  });

  const styleOptions = {
    backgroundColor: eightBallInfo.color
  };

  function handleClick(evt) {
    const ans = getRandomChoice(answers);

    setEightBallInfo({
      msg: ans.msg,
      color: ans.color
    });
  }

  return (
    <div className="EightBall" onClick={handleClick} style={styleOptions}>
      <p>{eightBallInfo.msg}</p>
    </div>
  );
}

export default EightBall;