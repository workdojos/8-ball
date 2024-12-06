const React = require('react');

// Page Footer
class Footer extends React.Component
{
  render()
  {
    const ribbonLink = "https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149";
    const gitHubLink = "https://github.com/Chris-1101";

    return (
      <div className="footer">
        &copy; 2019&nbsp;
        <a href={ gitHubLink } target="_blank">Chris MacBain</a>
        <br />
        MIT License
      </div>
    );
  }
}

module.exports = Footer;
