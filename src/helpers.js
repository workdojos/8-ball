/** Returns a random object from a list of objects */

function getRandomChoice(answers) {
  const randomChoice = Math.floor(Math.random() * answers.length);
  return answers[randomChoice];
}

export default getRandomChoice;