var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab;
var Hammer = require('react-hammerjs');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			key: 1
		};
	},
	handleSelect: function(key) {
		this.setState({key: key});
	},
	handlePan: function(event, key) {
		console.log(event.type);
		this.setState({key: key});
	},
  	render: function() {
	    return (
	    	<Hammer onPan={this.handlePan}>
		    <Tabs defaultActiveKey={1} activeKey={this.state.key} onSelect={this.handleSelect}>
				    <Tab eventKey={1} title="Tab 1">
					    <h3>Tab 1 Header</h3>
					    <p>Tab 1 content goes here</p>
					    <p>Tab 1 content goes here</p>
					    <p>Tab 1 content goes here</p>
				    </Tab>
				    <Tab eventKey={2} title="Tab 2">
				    	<h3>Tab 2 Header</h3>
					    <p>Tab 2 content goes here</p>
					    <p>Tab 2 content goes here</p>
					    <p>Tab 2 content goes here</p>
					    <p>Tab 2 content goes here</p>
				    </Tab>
				    <Tab eventKey={3} title="Tab 3">
				    	<h3>Tab 3 Header</h3>
					    <p>Tab 3 content goes here</p>
					    <p>Tab 3 content goes here</p>
					    <p>Tab 3 content goes here</p>
					    <p>Tab 3 content goes here</p>
					    <p>Tab 3 content goes here</p>
					    <p>Tab 3 content goes here</p>
					    <p>Tab 3 content goes here</p>
					    <p>Tab 3 content goes here</p>
					    <p>Tab 3 content goes here</p>
					    <p>Tab 3 content goes here</p>
					    <p>Tab 3 content goes here</p>
					    <p>Tab 3 content goes here</p>
				    </Tab>
				
			</Tabs>
			</Hammer>
			
	);
  }
});
