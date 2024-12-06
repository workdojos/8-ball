const { Question, Answer, AnswerType } = require('../db/config')
const router = require('express').Router();

// GET Home Page
router.get('/', (req, res) => {
  Question.findAll({ include: [{ model: Answer, include: [AnswerType] }] })
  .then(questions => {
    res.render('index', { questions: questions });
  });
});

// POST New Question
router.post('/', (req, res) => {
  Question.create({
    text: req.body.question,
    answerId: Math.floor(Math.random() * 20) + 1
  }).then(question => {
    Question.findByPk(question.id, { include: [{ model: Answer, include: [AnswerType] }] })
    .then(question => {
      res.json(question);
    });
  });
  // Traditional form POST method
  // }).then(() => res.redirect('/'));
});

module.exports = router;
