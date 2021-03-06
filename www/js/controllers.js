angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope) {})
.controller('TestCtrl', function($scope) {})
.controller('ChildCtrl', function($scope) {
  $scope.kids = 'Delf';
  $scope.habbit = 'playing games'
})
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
