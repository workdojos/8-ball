const router = require('express').Router();
const Sequelise = require('sequelize');
const db = new Sequelise('sqlite:./app/db/history.db');

// GET Statistics
router.get('/stats', (req, res) => {
  const questionsSql = `
    SELECT COUNT(*) AS Count, SUBSTR(createdAt, 1, 10) AS Date
    FROM Questions
    GROUP BY Date
  `;
  db.query(questionsSql).then(questions => {
    const ratiosSql = `
      SELECT COUNT(*) AS Count, AnswerTypes.name AS AnswerType
      FROM Questions
      INNER JOIN Answers ON Questions.answerId = Answers.id
      INNER JOIN AnswerTypes ON Answers.answerTypeId = AnswerTypes.id
      GROUP BY AnswerTypes.name
    `;
    db.query(ratiosSql).then(ratios => {
      res.render('stats', { questions: questions[0], ratios: ratios[0] });
    });
  });
});

module.exports = router;
