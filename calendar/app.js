(function(){
	'use strict';
	angular.module('calendar',['esCalendar']);
	angular.module('calendar').controller('Controller',Controller);

	function Controller($esCalendar){
		var vm = this;

		vm.calendar = $esCalendar;
	}
})();