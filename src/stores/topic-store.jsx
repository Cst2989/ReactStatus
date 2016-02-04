var Api = require('../utils/api');
var Reflux = require('reflux');

module.exports = Reflux.createStore({
	getTopics: function(){
		return Api.get('index.php?host=http://deadline-app.dev.webstyler.ro')
		.then(function(json){

			this.topics = json.data;
		}.bind(this));
	}
});