var React = require('react');
var TopicStore = require('../stores/topic-store')
var Task = require('./task')


module.exports = React.createClass({
	getInitialState:function(){
		return{
			topics:[],
			viewTask:true,
		}
	},
	getTheTasks:function(){
		TopicStore.getTopics()
		.then(function(){
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
		
		<div className="container">
		<h2>Task-urile tale Azi</h2>
		<hr />
			<div className={"actions " + (this.state.viewTask ? "boxes" :"tables")}>
				<span className="action boxx" onClick={this.changeGrid}>View Boxes</span>
				<span className="action tablex" onClick={this.changeGrid}>View Tables</span>
			</div>
			<div className="row">
				{this.renderTopics()}
			</div>
		</div>
		</div>
	},
	changeGrid:function(){
		if(this.state.viewTask){
			this.setState({
				viewTask: false
			})
		}else{
			this.setState({
				viewTask: true
			})
		}
	},
	renderTopics:function(){
		if (this.state.viewTask == true) {
			return this.state.topics.map(function(topic){
				return <Task
					view = '1'
					description={topic.description} 
					name={topic.name}
					time={topic.time}
					cont={topic.cont}
					campanie={topic.campanie}
					deadline={topic.deadline}
					day={topic.day}
					alocator={topic.alocator} 
					key={topic.id} 
					ids={topic.id} 
					>
				</Task>
			})
		}else{
			return  <div className="table table-hover">
		 				<div className="table-head">
		 					<div className="deadline">Deadline</div>
		 					<div className="time">Ore</div>
		 					<div className="cont">Cont</div>
		 					<div className="campanie">Campanie</div>
		 					<div className="task">Task</div>
		 					<div className="alocator">Alocator</div>
		 				</div>
	 					<div className="table-body">
	 						{this.renderTable()}
	 					</div>
			</div>
		}	
	},
	renderTable:function(){
		return this.state.topics.map(function(topic){
				return <Task
					view = '2'
					description={topic.description} 
					name={topic.name}
					time={topic.time}
					cont={topic.cont}
					campanie={topic.campanie}
					deadline={topic.deadline}
					day={topic.day}
					alocator={topic.alocator} 
					key={topic.id} 
					ids={topic.id} 
					>
				</Task>
			})
	}
});