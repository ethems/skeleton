import React,{ Component } from 'react';
import LeftPanel from './left-panel';

class App extends Component {

  render() {
    return (
      <div className="expanded row">
        <div className="small-2 columns">
          <LeftPanel/>
        </div>
        <div className="small-8 columns">
        </div>
        <div className="small-2 columns">
        </div>
      </div>
    );
  }

}


export default App;
