   
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
  
  
  // $scope.curPage = 1,
  // $scope.itemsPerPage = 3,
  // $scope.maxSize = 5;
    
  //   this.items = services;
  
  
  // $scope.numOfPages = function () {
  //   return Math.ceil(services.length / $scope.itemsPerPage);
    
  // };
  
  //   $scope.$watch('curPage + numPerPage', function() {
  //   var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
  //   end = begin + $scope.itemsPerPage;
    
  //   $scope.filteredItems = services.slice(begin, end);
  // });

    
  $scope.services = [
        {"type":2, "status":'a', "category": 'Manejo de Botella',"name":'producto 1 de manejo de botella',"srcimg":"s3"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"name":'producto 2 de manejo de botella',"srcimg":"s1"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"name":'producto 1 de manejo de botella',"srcimg":"s3"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"name":'producto 2 de manejo de botella',"srcimg":"s1"},         
        {"type":2, "status":'a', "category": 'Manejo de Botella',"name":'producto 1 de manejo de botella',"srcimg":"s3"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"name":'producto 2 de manejo de botella',"srcimg":"s1"},         
        {"type":2, "status":'a', "category": 'Manejo de Botella',"name":'producto 1 de manejo de botella',"srcimg":"s3"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"name":'producto 2 de manejo de botella',"srcimg":"s1"},         
        {"type":2, "status":'a', "category": 'Manejo de Botella',"name":'producto 1 de manejo de botella',"srcimg":"s3"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"name":'producto 2 de manejo de botella',"srcimg":"s1"}, 
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"name":'producto 1 de refacciones industriales',"srcimg":"s3"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"name":'producto 2 de refacciones industriales',"srcimg":"s1"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"name":'producto 2 de refacciones industriales',"srcimg":"s2"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"name":'producto 2 de refacciones industriales',"srcimg":"s2"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"name":'producto 2 de refacciones industriales',"srcimg":"s2"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"name":'producto 2 de refacciones industriales',"srcimg":"s2"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"name":'producto 2 de refacciones industriales',"srcimg":"s2"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"name":'producto 2 de refacciones industriales',"srcimg":"s2"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"name":'producto 2 de refacciones industriales',"srcimg":"s2"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"name":'producto 3 de refacciones industriales',"srcimg":"s3"}
    ];

    $scope.viewby = 20;
    $scope.totalItems = $scope.services.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 5; //Number of pager buttons to show
  
    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };
  
    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };
  
  $scope.setItemsPerPage = function(num) {
    $scope.itemsPerPage = num;
    $scope.currentPage = 1; //reset to first paghe
  }
}]);





// SECCION DE FUNCIONES JS

/*función que permite, en modo mobile, contraer el menu cuando se da un click sobre alguno de sus elementos*/
function closeMenu() {
    var element = document.getElementById("navbarSupportedContent");
    element.classList.remove("show");
  }

  function cleanCategory() {         
    var element1 = document.getElementById("catButton1"); element1.classList.remove("thisActive");
    var element2 = document.getElementById("catButton2"); element2.classList.remove("thisActive");
    var element3 = document.getElementById("catButton3"); element3.classList.remove("thisActive");
    var element4 = document.getElementById("catButton4"); element4.classList.remove("thisActive");
    var element5 = document.getElementById("catButton5"); element5.classList.remove("thisActive");
    var element6 = document.getElementById("catButton6"); element6.classList.remove("thisActive");
  }

  function activeCategory(catID) {
    cleanCategory();
    var catPos = "catButton" + catID;
    var catElement = document.getElementById(catPos);
    catElement.classList.add("thisActive");
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
  

  