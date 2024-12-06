const React = require('react');
const PageLayout = require('./layout');
const Plotly = require('plotly')('ChrisMB', 'Y2HHjdER1NU2chHcNjBb');

// Statistics Page
class StatsPage extends React.Component
{
  get questionsData()
  {
    const questions = [];
    const dates = [];

    this.props.questions.forEach(question => {
      questions.push(question.Count);
      dates.push(question.Date);
    });

    return {
      x: dates,
      y: questions,
      type: 'scatter',
      line: { color: 'white' }
    };
  }

  updateQuestionsGraph()
  {
    const data = [this.questionsData];

    const axisStyle = {
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: true,
      autotick: true,
      linecolor:'rgba(255, 255, 255, 0.7)',
      linewidth: 1
    };

    const layout = {
      autosize: false,
      width: 640,
      height: 360,
      title: 'Questions Asked Per Day',
      font: { color: 'white' },
      margin: { pad: 20 },
      xaxis: axisStyle,
      yaxis: axisStyle,
      paper_bgcolor: 'rgba(0, 0, 0, 0)',
      plot_bgcolor: 'rgba(0, 0, 0, 0)'
    };

    const options = {
      fileopt: 'overwrite',
      filename: 'magic-8ball-questions',
      layout: layout
    };

    Plotly.plot(data, options, function(err, msg) {
      if (err) console.log(err);
    });

    console.log('Plotly: loaded questions graph');
  }

  get ratiosData()
  {
    const answerTypes = [];
    const amounts = [];

    this.props.ratios.forEach(ratio => {
      answerTypes.push(ratio.AnswerType);
      amounts.push(ratio.Count);
    });

    return {
      labels: answerTypes,
      values: amounts,
      marker: { colors: [ '#63DA62', '#D9DA62', '#DA4D4D' ] },
      type: 'pie'
    };
  }

  updateRatiosGraph()
  {
    const data = [this.ratiosData];

    const layout = {
      autosize: false,
      width: 640,
      height: 360,
      title: 'Answer Type Ratios',
      font: { color: 'white' },
      margin: { pad: 20 },
      paper_bgcolor: 'rgba(0, 0, 0, 0)',
      plot_bgcolor: 'rgba(0, 0, 0, 0)'
    }

    const options = {
      fileopt: 'overwrite',
      filename: 'magic-8ball-ratios',
      layout: layout
    };

    Plotly.plot(data, options, function(err, msg) {
      if (err) console.log(err);
    });

    console.log('Plotly: loaded ratios pie chart');
  }

  render()
  {
    const questionsGraph = {
      url: 'https://plot.ly/~ChrisMB/2',
      key: 'tUBvWHACIGKG6w8PZXtlQD',
      alt: 'Magic 8-Ball Questions',
      id: 2
    }
    this.updateQuestionsGraph();

    const ratiosGraph = {
      url: 'https://plot.ly/~ChrisMB/6',
      key: 'rXv3RRBQPtWKvn0njhpM7d',
      alt: 'Magic 8-Ball Ratios',
      id: 6
    }
    this.updateRatiosGraph();

    return (
      <PageLayout title="Statistics">
        <div className="stats">
          <Graph graph={ questionsGraph } />
          <Graph graph={ ratiosGraph } />
        </div>
      </PageLayout>
    );
  }
}

// Plotly Graph
class Graph extends React.Component
{
  render()
  {
    const graph = this.props.graph;

    const style = {
      display: 'block',
      textAlign: 'center'
    };

    return(
      <div>
        <a href={ graph.url + '/?share_key=' + graph.key } target="_blank" title={ graph.alt } styles={ style }>
          <img src={ graph.url + '.png?share_key=' + graph.key } alt={ graph.alt } onerror="this.onerror=null;this.src='https://plot.ly/404.png';" />
        </a>
        <script data-plotly={ 'ChrisMB:' + graph.id } sharekey-plotly={ graph.key } src="https://plot.ly/embed.js" async />
      </div>
    );
  }
}

module.exports = StatsPage;
