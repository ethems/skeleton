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


require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!./styles/app.scss');
$(document).foundation();

ReactDOM.render(<HelloMessage/>,document.getElementById('app'));
