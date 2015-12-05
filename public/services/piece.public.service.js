angular.module('pieces').factory('Pieces', ['$resource', function($resource) {
    return $resource('/api/pieces/:pieceId', {
        pieceId: '@_id'
    }, {
        update: {
            method: 'PUT'
        },
    });
}]);