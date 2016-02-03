var React = require('react');

module.exports= React.createClass({

	getInitialState:function(){
		return{
			id:this.props.key,
			name:this.props.name,
			description:this.props.description,
			time:this.props.time,
			cont:this.props.cont,
			campanie:this.props.campanie,
			deadline:this.props.deadline,
			day:this.props.day,
			alocator:this.props.alocator,
		}
	},
	render: function() {
		return   <div className="col-sm-6 col-md-4">
							<div className="panel panel-primary">
								  <div className="panel-heading">
								   {this.state.name} / {this.state.campanie} / {this.state.cont} 
								  </div>
								  <div className="panel-body">
								  	{this.state.description}
								  </div>
								  <div className="panel-footer">
								  	By {this.state.alocator} / Deadline: {this.state.deadline} / Hours: {this.state.time}
								  </div>
							</div>
		</div>
	}

});

