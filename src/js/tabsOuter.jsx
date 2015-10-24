var React = require('react');
var ReactBootstrap = require('react-bootstrap');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      key: 1
    };
  },
  handleSelect: function(key) {
    this.setState({key: key});
  },
  render: function() {
  	var Tabs = ReactBootstrap.Tabs;
	var Tab = ReactBootstrap.Tab;
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
      </Tabs>
    );
  }
});
