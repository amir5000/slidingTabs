var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var Tabs = ReactBootstrap.Tabs;
var Tab = require('./tab');

module.exports = React.createClass({
  render: function() {
    return (
    <Tabs defaultActiveKey={1}>
	    <Tab eventKey={1} title="Tab 1" />
	    <Tab eventKey={2} title="Tab 2" />
	    <Tab eventKey={3} title="Tab 3" />
  	</Tabs>
	);
  }
});
