var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab;
var Hammer = require('react-hammerjs');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			key: 1,
			direction: "",
			fire: 1
		};
	},
	handleSelect: function(key) {
		this.setState({key: key});
	},
	handlePan: function(event) {
		if (this.state.fire === 1) {
			if (event.deltaX > 10) {
				this.setState({
					direction: "left"
				});
			} else if (event.deltaX < -10) {
				this.setState({
					direction: "right"
				});
			}

			this.setState({
				fire: 0
			});
		}
	},
	handlePanEnd: function() {
		if (this.state.direction === "right") {
			if (this.refs.TabsRef.props.children.length > this.state.key) {
				this.setState({key: this.state.key+1});
			} else if (this.refs.TabsRef.props.children.length === this.state.key) {
				this.setState({key: 1});
			} 
		} else if (this.state.direction === "left") {
			if (this.state.key !== 1) {
				this.setState({key: this.state.key-1});
			} else if (this.state.key === 1) {
				var childrenLength = this.refs.TabsRef.props.children.length;
				this.setState({key: childrenLength});
			}
		}
		this.setState({
			fire: 1
		});
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
