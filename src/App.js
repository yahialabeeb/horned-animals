import React from 'react';
import Main from './components/Main';

import 'bootstrap/dist/css/bootstrap.min.css'; 
class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Horned Animals</h1>
        <Main />
      </div>
    );
  }
}


export default App;