var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab;
var Hammer = require('react-hammerjs');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			key: 1,
			fire: 1
		};
	},
	handleSelect: function(key) {
		this.setState({key: key});
	},
	handlePan: function(event) {
		var threshold = 10;
		if (this.state.fire === 1) {
			if (event.deltaX < -threshold && this.refs.TabsRef.props.children.length > this.state.key) {
				this.setState({key: this.state.key+1});
			} else if (event.deltaX < -threshold && this.refs.TabsRef.props.children.length === this.state.key) {
				this.setState({
					key: 1
				});
			} else if (event.deltaX > threshold && this.state.key !== 1) {
				this.setState({key: this.state.key-1});
			} else if (event.deltaX > threshold && this.state.key === 1) {
				var childrenLength = this.refs.TabsRef.props.children.length;
				this.setState({
					key: childrenLength
				});
			}
			this.setState({
				fire: 0
			});
		}
	},
	handlePanEnd: function() {
		setTimeout( function() { 
			this.setState({
				fire: 1
			});
		}.bind(this), 1000); // needed this to avoid weird things from hapening if you swipe really fast multiple time in a row.
		
	},
  	render: function() {
	    return (
	    	<Hammer onPanEnd={this.handlePanEnd} onPan={this.handlePan}>
			    <Tabs justified ref="TabsRef" defaultActiveKey={1} activeKey={this.state.key} onSelect={this.handleSelect}>
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
