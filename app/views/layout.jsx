const React = require('react');
const GitHubRibbon = require('./_ribbon');
const Footer = require('./_footer');
const NavBar = require('./_nav');
const Logo = require('./_logo');

// Main Page Layout
class PageLayout extends React.Component
{
  render()
  {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Magic 8-Ball - { this.props.title }</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" />
          <link rel="stylesheet" type="text/css" href="stylesheets/style.css" />
        </head>
        <body>
          <GitHubRibbon />
          <NavBar />
          <Logo />
          { this.props.children }
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = PageLayout;
