var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
	render:function(){
		return <nav className="navbar navbar-default header">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					Status
				</Link>
				<ul className="nav navbar-nav navbar-right">
					<li>
						<Link to="/1">Normal View</Link>
					</li>
					<li>
						<Link to="/2">Grid View</Link>
					</li>
				</ul>
			</div>
		</nav>
	}
})