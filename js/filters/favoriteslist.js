var mod = angular.module('tvchat.filters.favorites', []);

mod.filter('sortByName', function() {
  return function(input) {
	  if (input) {
			return _.sortBy(_.values(input), 'name');
	  } else {
		  return []
	  }
  };
});