

angular.module('ngForum')
.component('postList',{
    templateUrl: 'post/post-list.template.html',
    controller: postListController
});


function postListController($scope,postService){
    $scope.header = 'Posts List';
    $scope.posts = postService.getAllPosts();
    
}

postListController.$inject = ['$scope','PostService'];