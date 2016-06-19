import React,{ Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';


class LeftPanel extends Component{


  renderLinks(routes){
    return routes.map(route=>{
      return (
        <li className="left-panel-link" key={route.name}>
          <Link className={route.name} to={route.path}>
            <i className="material-icons">face</i>
          </Link>
      </li>);
    })
  }

  render(){
    return(
      <div className="left-panel">
        <ul>
          <li><Link to="/" className="logo"></Link></li>
          {this.renderLinks(this.props.routes)}
        </ul>
      </div>
    );
  }

}


const mapStateToProps=(state,ownProps)=>{
  return{
    routes:state.routes
  }
};

const mapDispatchToProps=(dispatch,ownProps)=>{
  return{

  }
};


export default connect(mapStateToProps,mapDispatchToProps)(LeftPanel);
