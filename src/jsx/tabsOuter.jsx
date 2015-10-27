var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab;
var $ = require('jquery');
var TouchSwipe = require('jquery-touchswipe');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			key: 1
		};
	},
	swipeInit: function() {
		var panes = $('.tab-content').children();
  var last = $('.tab-content').children().last();
  $('.tab-pane').swipe({
   swipeLeft:function(event, direction, distance, duration, fingerCount) {
     $('.tab-pane').removeClass('in active');
     if ($(this).is('#compliant_other_uses')) {
       $('.tab-pane').siblings('.tab-pane').first().addClass('active').delay(200).queue(function(){
         $(this).addClass('in').dequeue();
      });
       var hash = '#' + $('.tab-pane').siblings('.tab-pane').first().attr('id');
     } else {
       var hash = '#' + $(this).next('.tab-pane').attr('id');
       $(this).next('.tab-pane').addClass('active').delay(200).queue(function(){
         $(this).addClass('in').dequeue();
      });


     }

     $('.nav-tabs a').each(function() {
       $(this).parent().removeClass('active');
       if ($(this).attr('href') == hash ) {
         $(this).parent().addClass('active');
       }
     });
   },
   swipeRight:function(event, direction, distance, duration, fingerCount) {
     $('.tab-pane').removeClass('in active');
     if ($(this).is('#compliant_overview')) {
       var hash = '#' + $('.tab-pane').siblings('.tab-pane').last().attr('id');
       $('.tab-pane').siblings('.tab-pane').last().addClass('active').delay(200).queue(function(){
         $(this).addClass('in').dequeue();
      });
     } else {
       var hash = '#' + $(this).prev('.tab-pane').attr('id');
       $(this).prev('.tab-pane').addClass('active').delay(200).queue(function(){
         $(this).addClass('in').dequeue();
      });
     }

     $('.nav-tabs a').each(function() {
       $(this).parent().removeClass('active');
       if ($(this).attr('href') == hash ) {
         $(this).parent().addClass('active');
       }
     });
   },
   threshold:0
  });
	},
	handleSelect: function(key) {
		this.setState({key: key});
	},
  	render: function() {
	    return (
	    <Tabs defaultActiveKey={1} onSelect={this.handleSelect}>
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
	);
  }
});
