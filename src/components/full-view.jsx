var React = require('react');
var FullViewStore = require('../stores/full-view-store');

var FullView = React.createClass({
	getInitialState:function(){
		return{
			tasks:[],
			viewTask:true,
		}
	},
	getTheTasks:function(){
		FullViewStore.getTasks()
		.then(function(){
			this.setState({
				tasks: FullViewStore.tasks
			});

		}.bind(this))
		
	},
	componentDidMount:function(){
		this.getTheTasks();
    setInterval(this.getTheTasks,42000);
	},
	render: function() {
		return (
			<div>
				<div className="status_table">
				{this.renderTasks()}
				</div>
				
			</div>
		);
	},
	renderTasks:function(){
				return this.state.tasks.map(function(task){
				return <div className="col nume">
					<div className="header_col">
						{task.name} 
					</div>
					<div className="col_cell">Somerhing</div>
				</div>
			})
	}

});

module.exports = FullView;