var app = angular.module('myApp',[]);



// MY CONTROLLER
app.controller('myCtrl', ['$scope', function($scope) {

  var vm = this;

   $scope.links = [
       {
            "name" : "A/B Testing",
            "link" : "https://docs.google.com/document/d/1oAGs_4qRMF_1G-TeuS1CG8ClVcTWxuLYLDcal7l5DHU/edit?usp=sharing"
        },{
            "name" : "Angular",
            "link" : "https://docs.google.com/document/d/1CTJMwlcXYNZMBGXT8JgOTQ9-tVLU-YyOz0k_eRq4Pps/edit?usp=sharing"
        },{
            "name" : "Hide API Keys w/Node.js",
            "link" : "https://docs.google.com/document/d/15wFpFjs7LvGTzs1ekeDXch9xHN3lMqisNyZ1H1hrZi8/edit?usp=sharing"
        },{
            "name" : "Javascript",
            "link" : "https://docs.google.com/document/d/171EGFnSvRig9RXdj-NBaVlqW_i4ZqnzuOmau7k1-jL8/edit?usp=sharing"
        },{
            "name" : "Setting up Node",
            "link" : "https://docs.google.com/document/d/1dcVEbqgiQWRsKoSmqhDew4PHXXY-lWnxQzT_IyKWtpo/edit?usp=sharing"
        },{
            "name" : "Host on Github",
            "link" : "https://docs.google.com/document/d/1Kp40EZMo_eTNR5jGpYLfkPmUMbqCABaJktazV281sgs/edit?usp=sharing"
        },{
            "name" : "PHP",
            "link" : "https://docs.google.com/document/d/1GH7H-oEaDK6bVsSHVAVrG6iF_6eSrR30Yyh556fe3nc/edit?usp=sharing"
        },{
            "name" : "Test Driven Development",
            "link" : "https://docs.google.com/document/d/109SwWYqAeFWiugb70tGhb55CBvdfg6Zl0XJD7iDWqyE/edit?usp=sharing"
        },{
            "name" : "AJAX",
            "link" : "https://docs.google.com/document/d/1tuIvVJCGadV2EwZVG3la5yHq4VaGkX9ehOD0KzXd8ls/edit?usp=sharing"  
        },{
            "name" : "Animation JS and CSS",
            "link" : "https://docs.google.com/document/d/1q8YlhZ3wLaIdHq0Ew-HG60cN0LaEPYEKmXABbV1D5_E/edit?usp=sharing"
        },{
            "name" : "CDNs",
            "link" : "https://docs.google.com/document/d/17howIS3Vj_Fy0vM1hPUwBVl607KdKElQRcclNlm-1iA/edit?usp=sharing"
        },{
            "name" : "REACT",
            "link" : "https://docs.google.com/document/d/1I82GYM1u3-im7mFgE7BtMD0lEAKE8elGdbxA-gEd2E4/edit?usp=sharing"
        },{
            "name" : "DESIGN",
            "link" : "https://docs.google.com/document/d/1oyS5L3g1k6fc1YqO6ZO68bH-i_ZonedRgDhFXdfj3h8/edit?usp=sharing"
        },{
            "name" : "GIT",
            "link" : "https://docs.google.com/document/d/15i7lnZ1B-XPd3oZE0fbO9sX_WNk7EV9ug4S0CZYxxsE/edit?usp=sharing"
        },{
            "name" : "Wordpress Theme Development",
            "link" : "https://docs.google.com/document/d/1fRdGC3BM9gyCqQ3ahjTbsyKcZEdqTWSkDLjzeDv-JyM/edit?usp=sharing"
        },{
            "name" : "MongoDB",
            "link" : "https://docs.google.com/document/d/1VPJaVD1U6Pys10iJ0YlqKwUeje9UqNPaS20vDULNeog/edit?usp=sharing"
        },{
           "name" : "Backing up Macbook After a crash",
            "link" : "https://docs.google.com/document/d/1OenAKONyRY-lHPlMExtdiSEg_2nROxwiMxUHCEwl9o8/edit?usp=sharing"
        },{
           "name" : "Machine Learning",
            "link" : "https://docs.google.com/document/d/1wcF7KJYxD6WGewsQrTCUBaoL80_JaIyuC6QNmzre9eM/edit?usp=sharing"
        },{
           "name" : "Big O Time and Space for sorts and Data Types",
           "link" : "https://docs.google.com/spreadsheets/d/1RdGfkN0tM6cVLfXZ__g0FvB7rsKGly3ORmbT8SmqX-I/edit#gid=0" 
        }
    ]

}]);
