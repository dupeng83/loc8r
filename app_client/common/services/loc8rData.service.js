(function() {

  angular
    .module('loc8rApp')
    .service('loc8rData', loc8rData);

  loc8rData.$inject = ['$http'];
  function loc8rData($http) {
    var locationByCoords = function (lat, lng) {
      console.log("zuobiao: ============================")
      console.log(lat)
      console.log(lng)
      return $http.get('/api/locations?lng=126.62&lat=45.75&maxDistance=20');
      // return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20');
    };
    return {
      locationByCoords : locationByCoords
    };
  }

})();