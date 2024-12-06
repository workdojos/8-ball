const React = require('react');
const PageLayout = require('./layout');

// Index Page
class IndexPage extends React.Component
{
  render()
  {
    return (
      <PageLayout title="Index">
        <QuestionForm />
        <Reply />
        <History questions={ this.props.questions } />
        <script src="javascripts/ajax.js" />
      </PageLayout>
    );
  }
}

// Question Form
class QuestionForm extends React.Component
{
  render()
  {
    return (
      <div className="question-form">
        <form id="submissionForm">
          <div className="form-group">
            <label htmlFor="question">Ask the Magic 8-Ball a Question!</label>
            <div className="input-group">
              <input id="question" className="form-control" type="text" name="question" />
              <div className="input-group-append">
                <button className="btn btn-dark btn-sm">&nbsp; Ask &nbsp;</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// Reply
class Reply extends React.Component
{
  render()
  {
    return (
      <div className="reply">
        <div id="reply1" class="answer up">It is<br />certain</div>
        <div id="reply2" class="answer up">It is<br />decidedly<br />so</div>
        <div id="reply3" class="answer down">Without<br />a<br />doubt</div>
        <div id="reply4" class="answer up">Yes<br />definitely</div>
        <div id="reply5" class="answer down">You may<br />rely<br />on it</div>
        <div id="reply6" class="answer down">As I<br />see it,<br />yes</div>
        <div id="reply7" class="answer up">Most<br />likely</div>
        <div id="reply8" class="answer down">Outlook<br />good</div>
        <div id="reply9" class="answer down">Yes</div>
        <div id="reply10" class="answer down">Signs<br />point to<br />yes</div>

        <div id="reply11" class="answer down">Reply hazy<br />try<br />again</div>
        <div id="reply12" class="answer up">Ask<br />again<br />later</div>
        <div id="reply13" class="answer down">Better not<br />tell you<br />now</div>
        <div id="reply14" class="answer down">Cannot<br />predict<br />now</div>
        <div id="reply15" class="answer down">Concentrate<br />and ask<br />again</div>

        <div id="reply16" class="answer up">Don't<br />count<br />on it</div>
        <div id="reply17" class="answer down">My reply<br />is<br />no</div>
        <div id="reply18" class="answer down">My<br />sources<br />say<br />no</div>
        <div id="reply19" class="answer down">Outlook<br />not so<br />good</div>
        <div id="reply20" class="answer up">Very<br />doubtful</div>
      </div>
    );
  }
}

// Questions History
class History extends React.Component
{
  get questions()
  {
    const arr = [];

    this.props.questions.forEach((question, i) => {
      arr.unshift(<HistoryItem key={ i } question={ question } />);
    });

    return (arr.length) ? arr : "Nothing here, yet...";
  }

  render()
  {
    return (
      <div className="history">
        <h4>Previously Asked Questions</h4>
        <div>{ this.questions }</div>
      </div>
    );
  }
}

// History Item
class HistoryItem extends React.Component
{
  get dateAndTime()
  {
    const dateTime = new Date(this.props.question.createdAt);
    const date = dateTime.toLocaleString('en-GB', { day: '2-digit', month: 'short' });
    const time = dateTime.toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit' });

    return { date: date, time: time };
  }

  get answerTypeClass()
  {
    const answerType = this.props.question.answer.answerType.name;
    const colours = {
      'affirmative': "success",
      'non-committal': "warning",
      'negative': "danger"
    };
    return "badge badge-" + colours[answerType];
  }

  render()
  {
    const question = this.props.question;
    const dateTime = this.dateAndTime;

    return (
      <div className="h-item flex spbe">
        <div className="h-time">
          <p>{ dateTime.date }</p>
          <p>{ dateTime.time }</p>
        </div>
        <div className="h-content">
          <p className="h-question">{ question.text }</p>
          <p className="h-answer">
            <span className={ this.answerTypeClass }>{ question.answer.text }</span>
          </p>
        </div>
      </div>
    );
  }
}

module.exports = IndexPage;
