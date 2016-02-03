var Fetch = require('whatwg-fetch');
var rootUrl = 'http://dan-testing.dev.webstyler.ro/Status/';
var apiKey = '15a217202c69d6b';

module.exports  = {
	get:function(url){
		return fetch(rootUrl + url,{
			
		})
		.then(function(response){
			return response.json();
		})
	}
};

