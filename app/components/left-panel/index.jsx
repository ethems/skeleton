import React,{ Component } from 'react';
import {Link} from 'react-router';

class LeftPanel extends Component{

  render(){
    return(
      <div className="left-panel">
        <ul>
          <li><Link to="/" className="logo"></Link></li>
        </ul>
      </div>
    );
  }

}


export default LeftPanel;
