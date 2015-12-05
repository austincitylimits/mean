angular.module('pieces').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pieces/create', {
        templateUrl: '/public/views/newPiece.html',
    }).when('/', {
        templateUrl: '/public/views/index.html'
    }).when('/pieces', {
        templateUrl: '/public/views/displayPieces.html'
    }).when('/pieces/:pieceId', {
        templateUrl: '/public/views/viewPiece.html'
    }).when('/pieces/:pieceId/edit', {
        templateUrl: '/public/views/editFurniture.html'
    });
    }
]);