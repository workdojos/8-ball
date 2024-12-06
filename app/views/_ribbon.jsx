const React = require('react');

// Github Ribbon
class GitHubRibbon extends React.Component
{
  render()
  {
    const ribbonLink = "https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149";
    const gitHubLink = "https://github.com/Chris-1101/magic-8ball";

    return (
      <div className="github-link">
        <a href={ gitHubLink } target="_blank">
          <img src={ ribbonLink } alt="Fork me on GitHub" />
        </a>
      </div>
    );
  }
}

module.exports = GitHubRibbon;
