var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hellosss  {this.props.name}</div>;
  }
});

ReactDOM.render(<HelloMessage/>,document.getElementById('app'));