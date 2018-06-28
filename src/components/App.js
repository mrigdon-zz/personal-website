import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

export default class App extends React.Component {
  state = {
    route: window.location.pathname
  };

  componentDidMount() {
    window.onpopstate = event => {
      this.setState({ ...this.state, route: window.location.pathname });
    };
  }

  onNavigate = route => {
    this.setState({ ...this.state, route });
    window.history.pushState(null, null, route);
  };

  renderMain = () => {
    const { route } = this.state;

    if (route === '/about') return <About />;

    return <Home />;
  };

  render() {
    return (
      <React.Fragment>
        <Navbar activeRoute={this.state.route} onNavigate={this.onNavigate} />
        <main>
          {this.renderMain()}
        </main>
      </React.Fragment>
    );
  }
}
