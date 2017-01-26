require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="application">
      	{this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.any
};

App.displayName = 'App';

export default App;
