var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Napiyoruz ?</h1>
      </div>
    );
  }
});

ReactDOM.render(<HelloMessage/>,document.getElementById('app'));
