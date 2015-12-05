angular.module('pieces').controller('PiecesController', ['$scope', '$routeParams', '$location', 'Pieces', '$timeout', function($scope, $routeParams, $location, Pieces, $timeout){

    
    $scope.create = function() {

      var piece = new Pieces({
            artisan: this.artisan,
            datePosted: this.datePosted,
            descriptionBody: this.descriptionBody,
            pieceTitle: this.pieceTitle,
            price: this.price,
            ImgURL: this.ImgURL

      });
      
      console.log(this);
      
      piece.$save(function(response) {
          
          console.log(response);
          
          $location.path('/api/pieces/:' + response._id);
      }, function(errorResponse) {
          $scope.error = errorResponse.data.message;
      });
    };
    
    $scope.find = function() {
      $scope.pieces = Pieces.query();
      console.log($scope.pieces);
    };
    
    $scope.findOne = function() {
        $scope.piece = Pieces.get({
            pieceId: $routeParams.pieceId
        });
    };
    
    $scope.update = function() {
        $scope.piece.$update(function() {
            console.log($scope);
            $location.path('/api/pieces/:' + $scope.piece._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };
    
    $scope.delete = function(piece) {
        if (piece) {
            piece.$remove(function() {
                for (var i in $scope.pieces) {
                    if ($scope.pieces[i] === piece) {
                        $scope.pieces.splice(i, 1);
                    }
                }
            });
        } else {
            $scope.piece.$remove(function() {
                $location.path('pieces');
            });
        }
    };
    
    
}]);