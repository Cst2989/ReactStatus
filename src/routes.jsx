var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main.jsx');
var TopicList = require('./components/topic-list')
module.exports = (
	<Router>
		<Route path="/" component={Main}>
			<Route path="1" component={TopicList}>
			</Route>
			<Route path="2" component={TopicList}>
			</Route>
		</Route>
	</Router>
);