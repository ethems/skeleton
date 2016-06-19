import React,{ Component } from 'react';
import LeftPanel from './left-panel';

class App extends Component {

  render() {
    return (
      <div className="expanded row">
        <div className="small-2 columns">
          <LeftPanel location={this.props.location}/>
        </div>
        <div className="small-8 columns">
          {this.props.children}
        </div>
        <div className="small-2 columns">
        </div>
      </div>
    );
  }

}


export default App;
