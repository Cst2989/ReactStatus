var Api = require('../utils/api');
var Reflux = require('reflux');

module.exports = Reflux.createStore({
	getTasks: function(){
		return Api.get('index.php?host=http://deadline-app.dev.webstyler.ro')
		.then(function(json){

			this.tasks = json.data;
		}.bind(this));
	}
});