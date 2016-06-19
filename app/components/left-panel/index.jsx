import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {connect} from 'react-redux';


class LeftPanel extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.bindToolTip();
  }

  bindToolTip(){

    $('.has-tip').each(function(element){
         new Foundation.Tooltip($(this));
    });

  }

  renderLinks(routes){
    return routes.map((route,index)=>{
      return (
        <li className="left-panel-link" key={route.name}>
          <Link to={route.path} onlyActiveOnIndex  activeClassName="active" >
            <span data-tooltip aria-haspopup="true"  className="has-tip right" data-disable-hover="false" tabindex="1" title={route.text}>
              <i className={route.name + " material-icons md-48 "}></i>
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
