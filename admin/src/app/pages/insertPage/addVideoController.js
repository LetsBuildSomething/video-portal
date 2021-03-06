/**
 * Created by Ravindu Hasantha on 09-Nov-16.
 */
var app = angular.module('BlurAdmin.pages.insert')
    .controller('addVideoController', ['insertService','S3UploadService', '$scope', addVideoCtrl]);

/** @ngInject */
function addVideoCtrl(insertService,S3UploadService,$scope) {

    $scope.initialize = function(){
        console.log("initialize addVideoController");
        $scope.formData = {};
    };

    $scope.initialize();

    $scope.submit = function(){
        if($scope.formData.title) {
            //$scope.uploadFiles($scope.file);
            insertService.addVideo($scope.formData);
            console.log($scope.formData);

        }
    };

    $scope.uploadVideo = function(){
        $scope.uploadFiles($scope.file);
    };

    $scope.uploadFiles = function(file) {
        if (file) {
            S3UploadService.Upload(file).then(function(result) {
                // Mark as success
                file.Success = true;
                insertService.alertMsg = "You successfully added a Video";
                insertService.showAlert();
                $scope.formData.link = "https://s3-us-west-2.amazonaws.com/letsbuild-videos/" + file.name;
                //$scope.data.profile = $scope.picture;
                //$scope.update($scope.picture);
            }, function(error) {
                // Mark the error
                $scope.Error = error;
                console.log(error);
            }, function(progress) {
                // Write the progress as a percentage
                file.Progress = (progress.loaded / progress.total) * 100;
                $scope.fileProgress = file.Progress;
            });

        }
    };


    $scope.selectVideo = function () {
        var fileInput = document.getElementById('uploadFile');
        fileInput.click();
        console.log(fileInput.value);
    };

    $scope.getFile = function() {
        //var fileReader = new FileReader();

        $scope.file  = document.querySelector('input[type=file]').files[0];
        console.log($scope.file.name);
    };

    insertService.getPlaylists().then(function(data) {
        $scope.allPlaylists =  data;
    });
}
