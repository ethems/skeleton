import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {connect} from 'react-redux';


class LeftPanel extends Component{

  constructor(props){
    super(props);
  }


  renderLinks(routes){
    return routes.map((route,index)=>{
      return (
        <li className="left-panel-link" key={route.name}>
          <Link to={route.path} onlyActiveOnIndex  activeClassName="active" >
            <span>
              <i className={route.name + " material-icons md-48 "}></i>
              <div className="text-location">
                {route.text}
              </div>
            </span>
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
