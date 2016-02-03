var React = require('react');
var TopicStore = require('../stores/topic-store')
var Task = require('./task')


module.exports = React.createClass({
	getInitialState:function(){
		return{
			topics:[]
		}
	},
	getTheTasks:function(){
		TopicStore.getTopics()
		.then(function(){
			console.log(TopicStore.topics)
			this.setState({
				topics: TopicStore.topics
			});
			
		}.bind(this))
		
	},
	componentDidMount:function(){
		this.getTheTasks();
    setInterval(this.getTheTasks,2000);
	},
	render: function() {
		return <div className="list-group">
		<h2>Task-urile tale Azi</h2>
		<hr />
		<div className="row">
			{this.renderTopics()}
		</div>

		</div>
	},
	renderTopics:function(){
		return this.state.topics.map(function(topic){
			return <Task 
			description={topic.description} 
			name={topic.name}
			time={topic.time}
			cont={topic.cont}
			campanie={topic.campanie}
			deadline={topic.deadline}
			day={topic.day}
			alocator={topic.alocator} 
			key={topic.id}  
			>
			</Task>
		})
	}
});