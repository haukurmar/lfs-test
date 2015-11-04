(function () {
	'use strict';

	/**
	 * Angular module
	 * WebStorm names: ngmodule
	 * Recommended naming conventions:
	 * moduleName = lowercase,
	 */

	/**
	 * app module
	 */
	angular
		.module('app', [])
		.config(Config);

	// Config
	// --------------------------------------------------
	/* @ngInject */
	function Config($stateProvider, $urlRouterProvider) {

	}

})();