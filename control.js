var app = angular.module('myApp',[]);

// MY CONTROLLER
app.controller('myCtrl', ['$scope', function($scope) {

  var vm = this;

   $scope.links = [
       {
            "name" : "A/B Testing",
            "link" : "AB_testing.html"
        },{
            "name" : "Angular",
            "link" : "angular.html"
        },{
            "name" : "Hide API Keys w/Node.js",
            "link" : "hide_api_key_node.html"
        },{
            "name" : "Javascript",
            "link" : "javascript.html"
        },{
            "name" : "Setting up Node",
            "link" : "node.html"
        },{
            "name" : "Host on Github",
            "link" : "host_on_github.html"
        },{
            "name" : "PHP",
            "link" : "PHP.html"
        },{
            "name" : "Test Driven Development",
            "link" : "TDD.html"
        },{
            "name" : "AJAX",
            "link" : "ajax.html"
        },{
            "name" : "Animation JS and CSS",
            "link" : "Animation.html"
        },{
            "name" : "CDNs",
            "link" : "CDN.html"
        },{
            "name" : "REACT",
            "link" : "react.html"
        },{
            "name" : "DESIGN",
            "link" : "design.html"
        },{
            "name" : "GIT",
            "link" : "git.html"
        },{
            "name" : "Wordpress Theme Development",
            "link" : "wordpress.html"
        },{
            "name" : "MongoDB",
            "link" : "MongoDB.html"
        }   "name" : "Backing up Macbook After a crash",
            "link" : "backing-up-macbook.html"
        }
    ]

}]);
