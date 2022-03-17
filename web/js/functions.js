   
var app = angular.module("myApp", ['ngRoute','ui.bootstrap']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "src/sites/content.html",
        controller: 'mailCtrl'

    })
    .when("/servCat", {
        templateUrl : "src/sites/services.html",
        controller: 'loginController'

    })
});


app.controller('loginController', ['$scope', '$filter', function ($scope, $filter) {
     
  $scope.services = [
        {"type":2, "status":'a', "category": 'Manejo de Botella',"srcimg":"mb/prdmb1", "nameModal":"nma"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"srcimg":"mb/prdmb2", "nameModal":"nmb"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"srcimg":"mb/prdmb3", "nameModal":"nmc"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"srcimg":"mb/prdmb4", "nameModal":"nmd"},         
        {"type":2, "status":'a', "category": 'Manejo de Botella',"srcimg":"mb/prdmb5", "nameModal":"nme"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"srcimg":"mb/prdmb6", "nameModal":"nmf"},         
        {"type":2, "status":'a', "category": 'Manejo de Botella',"srcimg":"mb/prdmb7", "nameModal":"nmg"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"srcimg":"mb/prdmb8", "nameModal":"nmh"},         
        {"type":2, "status":'a', "category": 'Manejo de Botella',"srcimg":"mb/prdmb9", "nameModal":"nmi"}, 
        {"type":2, "status":'a', "category": 'Manejo de Botella',"srcimg":"mb/prdmb10", "nameModal":"nmj"}, 
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"srcimg":"ri/prdri1", "nameModal":"nmk"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"srcimg":"ri/prdri2", "nameModal":"nml"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"srcimg":"ri/prdri3", "nameModal":"nmm"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"srcimg":"ri/prdri4", "nameModal":"nmn"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"srcimg":"ri/prdri5", "nameModal":"nmo"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"srcimg":"ri/prdri6", "nameModal":"nmp"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"srcimg":"ri/prdri7", "nameModal":"nmq"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"srcimg":"ri/prdri8", "nameModal":"nmr"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"srcimg":"ri/prdri9", "nameModal":"nms"},
        {"type":5, "status":'a', "category": 'Refacciones Industriales',"srcimg":"ri/prdri10", "nameModal":"nmt"}
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
  

  