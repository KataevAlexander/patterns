var Application = (function () {
	var Application = (function () {
		function Application() {

		}

		Application.prototype.log = function () {
			console.log('log')
		}

		return Application
	})()

	var app = new Application()

	return {
		instance: function() {
			return app
		}
	}
})()

var app = Application.instance()