import React from 'react';
import NaviationBar from './NaviationBar'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NaviationBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
