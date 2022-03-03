   
var app = angular.module("myApp", ['ngRoute','ui.bootstrap']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "src/sites/content.html"
    })
    .when("/servCat", {
        templateUrl : "src/sites/services.html",
        controller: 'loginController'

    })
});
app.controller('loginController', ['$scope', '$filter', function ($scope, $filter) {
  
  
  $scope.curPage = 1,
  $scope.itemsPerPage = 3,
  $scope.maxSize = 5;
    
    this.items = services;
  
  
  $scope.numOfPages = function () {
    return Math.ceil(services.length / $scope.itemsPerPage);
    
  };
  
    $scope.$watch('curPage + numPerPage', function() {
    var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
    end = begin + $scope.itemsPerPage;
    
    $scope.filteredItems = services.slice(begin, end);
  });

    
   var services = [
        {type:1, status:'a', category: 'Corte con Agua',name:'producto 1 de corte de agua'}, 
        {type:1, status:'a', category: 'Corte con Agua',name:'producto 2 de corte de agua'}, 
        {type:2, status:'a', category: 'Manejo de Botella',name:'producto 1 de manejo de botella'}, 
        {type:2, status:'a', category: 'Manejo de Botella',name:'producto 2 de manejo de botella'}, 
        {type:3, status:'a', category: 'Moldeo de Poliuretano',name:'producto 1 de moldeo de poliuretano'}, 
        {type:3, status:'a', category: 'Moldeo de Poliuretano',name:'producto 2 de moldeo de poliuretano'}, 
        {type:4, status:'a', category: 'Plasticos de Ingenierías',name:'producto 1 de plastico de ingenierias'},
        {type:4, status:'a', category: 'Plasticos de Ingenierías',name:'producto 2 de plastico de ingenierias'},
        {type:5, status:'a', category: 'Refacciones Industriales',name:'producto 1 de refacciones industriales'},
        {type:5, status:'a', category: 'Refacciones Industriales',name:'producto 2 de refacciones industriales'},
        {type:5, status:'a', category: 'Refacciones Industriales',name:'producto 2 de refacciones industriales'},
        {type:5, status:'a', category: 'Refacciones Industriales',name:'producto 3 de refacciones industriales'}
    ];


}]);





// SECCION DE FUNCIONES JS

/*función que permite, en modo mobile, contraer el menu cuando se da un click sobre alguno de sus elementos*/
function closeMenu() {
    var element = document.getElementById("navbarSupportedContent");
    element.classList.remove("show");
  
    var element2 = document.getElementById("navbarSupportedContent");
    element2.classList.remove("active");
  
    var element3 = document.getElementById("navbarSupportedContent");
    element3.classList.add("");
  }
  
  // Cuando el usuario se desplace a tantos pixeles, se habilita el boton
  window.onscroll = function() {
    
    scrollFunction()};
  
  function scrollFunction() {
    var topbutton = document.getElementById("topBtn");

    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      topbutton.style.display = "block";
    } else {
      topbutton.style.display = "none";
    }
  }
  
  // Cuando se de click en el boton nos lleva al tope
  function topFunction() {
    document.body.scrollTop = 10; // For Safari
    document.documentElement.scrollTop = 10; // Para Chrome, Firefox, IE y Opera
  } 
  