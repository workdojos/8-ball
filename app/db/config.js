const Sequelise = require('sequelize');
const db = new Sequelise('sqlite:./app/db/history.db');

const QuestionModel = require('../models/question');
const AnswerModel = require('../models/answer');
const AnswerTypeModel = require('../models/answer-type');

// Initialise Models & Migrate
const Question = QuestionModel(db, Sequelise);
const Answer = AnswerModel(db, Sequelise);
const AnswerType = AnswerTypeModel(db, Sequelise);

// Create Associations
Question.belongsTo(Answer);
Answer.belongsTo(AnswerType);

// Initialise & Seed Database
db.sync({ force: false }).then(() => {
  AnswerType.findAll().then(answerTypes => {
    if (!answerTypes.length)
    {
      // Answer Types
      AnswerType.create({ name: 'affirmative' });
      AnswerType.create({ name: 'non-committal' });
      AnswerType.create({ name: 'negative' });

      // Affirmative Answers
      Answer.create({ text: 'It is certain.'     , answerTypeId: 1 });
      Answer.create({ text: 'It is decidedly so.', answerTypeId: 1 });
      Answer.create({ text: 'Without a doubt.'   , answerTypeId: 1 });
      Answer.create({ text: 'Yes - definitely.'  , answerTypeId: 1 });
      Answer.create({ text: 'You may rely on it.', answerTypeId: 1 });
      Answer.create({ text: 'As I see it, yes.'  , answerTypeId: 1 });
      Answer.create({ text: 'Most likely.'       , answerTypeId: 1 });
      Answer.create({ text: 'Outlook good.'      , answerTypeId: 1 });
      Answer.create({ text: 'Yes.'               , answerTypeId: 1 });
      Answer.create({ text: 'Signs point to yes.', answerTypeId: 1 });

      // Non-Committal Answers
      Answer.create({ text: 'Reply hazy, try again.'    , answerTypeId: 2 });
      Answer.create({ text: 'Ask again later.'          , answerTypeId: 2 });
      Answer.create({ text: 'Better not tell you now.'  , answerTypeId: 2 });
      Answer.create({ text: 'Cannot predict now.'       , answerTypeId: 2 });
      Answer.create({ text: 'Concentrate and ask again.', answerTypeId: 2 });

      // Negative Answers
      Answer.create({ text: 'Don\'t count on it.' , answerTypeId: 3 });
      Answer.create({ text: 'My reply is no.'     , answerTypeId: 3 });
      Answer.create({ text: 'My sources say no.'  , answerTypeId: 3 });
      Answer.create({ text: 'Outlook not so good.', answerTypeId: 3 });
      Answer.create({ text: 'Very doubtful.'      , answerTypeId: 3 });

      // Monday
      Question.create({
        text: 'Moment of truth, does this work?',
        answerId: 6,
        createdAt: "2019-03-11T12:56:53.761Z",
        updatedAt: "2019-03-11T12:56:53.761Z"
      });
      Question.create({
        text: 'Are you alive?',
        answerId: 15,
        createdAt: "2019-03-11T12:56:57.761Z",
        updatedAt: "2019-03-11T12:56:57.761Z"
      });
      Question.create({
        text: 'Are you intelligent?',
        answerId: 3,
        createdAt: "2019-03-11T12:57:04.761Z",
        updatedAt: "2019-03-11T12:57:04.761Z"
      });
      Question.create({
        text: 'Could you pass the Turing test though?!',
        answerId: 4,
        createdAt: "2019-03-11T12:57:15.761Z",
        updatedAt: "2019-03-11T12:57:15.761Z"
      });

      // Tuesday
      Question.create({
        text: 'Logic bomb. Does a list of all lists contain itself?',
        answerId: 11,
        createdAt: "2019-03-12T15:23:32.761Z",
        updatedAt: "2019-03-12T15:23:32.761Z"
      });
      Question.create({
        text: 'Is this statement false?',
        answerId: 14,
        createdAt: "2019-03-12T15:23:44.761Z",
        updatedAt: "2019-03-12T15:23:44.761Z"
      });

      // Wednesday
      Question.create({
        text: 'Will I get this finished on time?',
        answerId: 10,
        createdAt: "2019-03-13T16:36:49.761Z",
        updatedAt: "2019-03-13T16:36:49.761Z"
      });
      Question.create({
        text: 'Will it be any good?',
        answerId: 20,
        createdAt: "2019-03-13T16:37:18.761Z",
        updatedAt: "2019-03-13T16:37:18.761Z"
      });

      // Thursday
      Question.create({
        text: 'Can you lie?',
        answerId: 13,
        createdAt: "2019-03-14T14:21:23.761Z",
        updatedAt: "2019-03-14T14:21:23.761Z"
      });

      // Friday
      Question.create({
        text: 'Does this still work?',
        answerId: 18,
        createdAt: "2019-03-15T18:48:20.761Z",
        updatedAt: "2019-03-15T18:48:20.761Z"
      });
      Question.create({
        text: 'Seriously?',
        answerId: 10,
        createdAt: "2019-03-15T18:48:34.761Z",
        updatedAt: "2019-03-15T18:48:34.761Z"
      });

      // Saturday
      Question.create({
        text: 'Where\'s my Aventador parked?',
        answerId: 11,
        createdAt: "2019-03-16T13:08:51.761Z",
        updatedAt: "2019-03-16T13:08:51.761Z"
      });
      Question.create({
        text: 'Worth a shot. Someday, maybe?',
        answerId: 19,
        createdAt: "2019-03-16T13:09:12.761Z",
        updatedAt: "2019-03-16T13:09:12.761Z"
      });
      Question.create({
        text: 'Lie to me?',
        answerId: 12,
        createdAt: "2019-03-16T13:09:26.761Z",
        updatedAt: "2019-03-16T13:09:26.761Z"
      });

      // Sunday
      Question.create({
        text: 'All done, does this still work?',
        answerId: 16,
        createdAt: "2019-03-17T17:32:40.761Z",
        updatedAt: "2019-03-17T17:32:40.761Z"
      });
      Question.create({
        text: 'Please work?',
        answerId: 12,
        createdAt: "2019-03-17T17:32:47.761Z",
        updatedAt: "2019-03-17T17:32:47.761Z"
      });
      Question.create({
        text: 'Am I doomed?!',
        answerId: 8,
        createdAt: "2019-03-17T17:33:14.761Z",
        updatedAt: "2019-03-17T17:33:14.761Z"
      });
    }
  });
});

module.exports = { Question, Answer, AnswerType };
