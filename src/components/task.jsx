var React = require('react');

module.exports= React.createClass({
	getInitialState:function(){
		return{
			name:this.props.name,
			description:this.props.description,
			time:this.props.time,
			cont:this.props.cont,
			campanie:this.props.campanie,
			deadline:this.props.deadline,
			day:this.props.day,
			alocator:this.props.alocator,
			checked:false,
			view:this.props.view
		}
	},
	render: function() {
		return   this.renderTask()
		
	},
	renderTask:function(){
		if (this.state.view == "1") {
					return <div className="col-sm-6 col-md-4">
								<div className={"panel panel-primary " + (this.state.checked ? "checked" :"") }>
									  <div className="panel-heading">
									   {this.state.name} / {this.state.campanie} / {this.state.cont} 
									  </div>
									  <div className="panel-body">
									  	{this.state.description}
									  </div>
									  <div className="panel-footer">
									  	By {this.state.alocator} / Deadline: {this.state.deadline} / Hours: {this.state.time}
									  	<span className="action" onClick={this.HandleHelp}>Help</span>
									  	<span className="action" onClick={this.HandleTask}>Task</span>
									  </div>
									  <div className="done">
									 		<h2 className="headingOuter">Done?</h2>
											<div className="toggle toggle--like">
												<input  type="checkbox" id={"toggle--like-" + this.props.ids} className="toggle--checkbox"/>
												<label onClick={this.HandleChange} className="toggle--btn" htmlFor={"toggle--like-" + this.props.ids}><span className="toggle--feature"></span></label>
											</div>
									  </div>
								</div>
					</div>
		}else{
			return <div>
				<div className="deadline">
					{this.state.deadline}
				</div>
				<div className="time">
					 {this.state.time}
				</div>
				<div className="cont">
					{this.state.cont} 
				</div>
				<div className="campanie">
					{this.state.campanie}
				</div>
				<div className="task">
					{this.state.description}
				</div>
				<div className="alocator">
					{this.state.alocator}
				</div>
			</div>
		}

	},
	HandleChange:function(){
		if(this.state.checked){
			this.setState({
				checked: false
			})
		}else{
			this.setState({
				checked: true
			})
		}
	},
	HandleHelp:function(){
		alert("Am nevoie de ajutor!!! NU inteleg nimic!")
	},
	HandleTask:function(){
		alert("Nu mi se mai deschide AIO imi dai si mie un task?");
	}

});

