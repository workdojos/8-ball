const React = require('react');

// Navigation bar
class NavBar extends React.Component
{
  render()
  {
    const readme = 'https://github.com/Chris-1101/magic-8ball/blob/master/README.md';

    return (
      <div id="nav" className="flex spbe">
        <img src="images/peak_logo.png" id="peak-logo" alt="PEAK" />
        <div className="flex spbe">
          <ul className="inline-list">
            <NavItem icon="far fa-question-circle" path="/" opens="_self" label="Questions" />
            <NavItem icon="fas fa-chart-bar" path="/stats" opens="_self" label="Statistics" />
            <NavItem icon="far fa-file-alt" path={ readme } opens="_blank" label="About" />
          </ul>
          <i id="menu-logo" className="fas fa-bars"></i>
        </div>
      </div>
    );
  }
}

// Nav Item
class NavItem extends React.Component
{
  render()
  {
    return(
      <li>
        <i className={ this.props.icon }></i>
        <a href={ this.props.path } target={ this.props.opens }>{ this.props.label }</a>
      </li>
    );
  }
}

module.exports = NavBar;
