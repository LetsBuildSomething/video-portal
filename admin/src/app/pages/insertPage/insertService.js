angular.module('BlurAdmin.pages.insert')
  .service('insertService', ['dataContext','$mdDialog', insertServ]);

/** @ngInject */
function insertServ(dataContext,$mdDialog) {

  this.alertMsg;

  this.addUser = function(data){
      dataContext.postData("signup",data);
      return 200;
  };

  this.addRole = function(data){
      dataContext.postData("role",data);
      return 200;
  };

  this.getRoles = function(){
      return dataContext.getData("role");
  };

  this.addPlaylist = function(data){
      dataContext.postData("playlist", data);
  };
  this.addVideo = function(data){
      dataContext.postData("video", data);
  };
  this.getPlaylists = function(){
      return dataContext.getData("playlist");
  };

  this.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Success')
        .textContent(this.alertMsg)
        .ariaLabel('Alert Dialog Demo')
        .ok('OK')
        .targetEvent(ev)
    );
  };


}
