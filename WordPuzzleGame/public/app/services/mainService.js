mainApp.factory("mainService", function ($http) {
	return {
		useGet: function (url, ty) {
			return $http({
				method: ty,
				url: url, 
			});
		}
	}
})
