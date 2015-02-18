module.exports = {
	"options": {
		
	},
	"gruntfile": {
		"files": ["Gruntfile.js","grunt/*.js"],
		"tasks": ["jshint:gruntfile"],
		"interrupt": true
	},
	"js": {
		"files": "*.js",
		"tasks": ["jshint:js", "mochaTest:all"],
		"interrupt": true
	},
	"version": {
		"files": ["package.json"],
		"tasks": "version",
		"interrupt": true
	},
	"test": {
		"files": ["test/**/*"],
		"tasks": "mochaTest:all",
		"interrupt": true
	}
};
