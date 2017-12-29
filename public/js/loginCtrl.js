
loginApp.controller('loginCtrl',['$scope','$http',($scope,$http) => {

    $scope.login= () =>
    {
        $http.post('/api/login', {email:$scope.email , password:$scope.password}).then(r => {
            $scope.user = r.data;
        }, e => {
            $scope.errorMessage = e.data.message;
        });
    }
    
    $scope.logout = function() {
        $scope.user = null;
    }
    
    $scope.changePassword = function(password) {
        console.log(password);
    }
}]);
