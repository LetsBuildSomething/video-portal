angular.module('BlurAdmin.pages.insert')
    .controller('addPlaylistController', ['insertService','$scope', addPlaylistCtrl]);

/** @ngInject */
function addPlaylistCtrl(insertService,$scope) {

    $scope.initialize = function(){
        console.log("initialize addPlaylistController")
        $scope.formData = {};
    };

    $scope.initialize();

    $scope.submit = function(){
        if($scope.formData.name) {
            insertService.addPlaylist($scope.formData);
            console.log($scope.formData);
            insertService.alertMsg = "You successfully added a Playlist";
            insertService.showAlert();
        }
    };
}
