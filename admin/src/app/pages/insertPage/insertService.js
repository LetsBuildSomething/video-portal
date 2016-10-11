angular.module('insert')
  .service('insertService', ['dataContext', insertServ]);

/** @ngInject */
function insertServ(dataContext) {

  this.addUser = function(data){
      dataContext.getData("add/user",data);
      return 200;
  }
}
